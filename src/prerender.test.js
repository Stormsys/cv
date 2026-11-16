import React from "react";
import ReactDOM from "react-dom";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { act } from "react-dom/test-utils";
import App, { Pages } from "./App";

// The CV is rendered once at build time (scripts/prerender.js) and adopted by
// the browser. That is only safe while both first renders are identical, and
// while the build-time one never holds a contact address.
const ADDRESS = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i;

function serverMarkup() {
  return renderToString(
    <StaticRouter location="/">
      <Pages />
    </StaticRouter>,
  );
}

function hydrateWith(markup) {
  window.location.hash = "";
  window.scrollTo = () => {};
  const container = document.createElement("div");
  container.innerHTML = markup;
  document.body.appendChild(container);
  const errors = jest.spyOn(console, "error").mockImplementation(() => {});
  act(() => {
    ReactDOM.hydrate(<App />, container);
  });
  const complaints = errors.mock.calls.map((call) => String(call[0]));
  errors.mockRestore();
  return { container, complaints };
}

afterEach(() => {
  document.body.innerHTML = "";
});

test("the build-time page holds the CV and no contact details", () => {
  const markup = serverMarkup();
  expect(markup).toContain("<h1");
  expect(markup).toContain("Engineering Manager");
  expect(markup).toContain("University of Westminster");
  expect(markup).toContain("Reveal email");
  expect(markup).not.toMatch(ADDRESS);
  expect(markup).not.toMatch(/mailto:|tel:/i);
});

test("text in neighbouring elements does not run together when read as plain text", () => {
  const container = document.createElement("div");
  container.innerHTML = serverMarkup();
  const text = container.textContent;
  expect(text).toContain("Meta March 2024");
  expect(text).toContain("Developer portal Led the redesign");
  expect(text).toContain("University of Westminster September 2009");
  expect(text).not.toMatch(/[a-z]\)?(January|February|March|April|May|June|July|August|September|October|November|December) \d{4}/);
});

test("the browser adopts the build-time page without a mismatch, and reveal still works", () => {
  const { container, complaints } = hydrateWith(serverMarkup());
  expect(complaints).toEqual([]);
  expect(container.innerHTML).not.toMatch(ADDRESS);
  const reveal = [...container.querySelectorAll("button")].find((button) =>
    button.textContent.includes("Reveal email"),
  );
  act(() => {
    reveal.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(container.querySelector('a[href^="mailto:"]')).not.toBeNull();
});

test("the check reports a mismatch when the two renders differ", () => {
  const altered = serverMarkup().replace("University of Westminster", "Somewhere else");
  expect(hydrateWith(altered).complaints.join(" ")).toMatch(/did not match/i);
});
