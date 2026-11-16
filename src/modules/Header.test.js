import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";

const originalEmail = process.env.REACT_APP_CONTACT_EMAIL;
afterEach(() => {
  if (originalEmail === undefined) delete process.env.REACT_APP_CONTACT_EMAIL;
  else process.env.REACT_APP_CONTACT_EMAIL = originalEmail;
});

test.each([undefined, "private@example.com"])(
  "email stays out of screen and print markup until revealed (configured: %s)",
  (configuredEmail) => {
    if (configuredEmail === undefined)
      delete process.env.REACT_APP_CONTACT_EMAIL;
    else process.env.REACT_APP_CONTACT_EMAIL = configuredEmail;
    const email = configuredEmail || "diogo@stormsys.net";
    const { container } = render(<Header />);

    expect(container.querySelector('a[href^="mailto:"]')).toBeNull();
    expect(container.querySelector(".contact-email-print")).toBeNull();
    expect(container).not.toHaveTextContent(email);
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/diogomoura1",
    );

    fireEvent.click(screen.getByRole("button", { name: "Reveal email" }));
    expect(container.querySelector(".contact-email-screen")).toHaveAttribute(
      "href",
      "mailto:" + email,
    );
    expect(container.querySelector(".contact-email-print")).toHaveAttribute(
      "href",
      "mailto:" + email,
    );
    expect(
      screen.queryByRole("button", { name: "Reveal email" }),
    ).toBeNull();
  },
);
