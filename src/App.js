import { useEffect, useRef } from "react";
import Page from "./sections/Page";
import { Route, Routes, HashRouter, useLocation } from "react-router-dom";
import Cv from "./sections/Cv";
import FeedbackFull from "./sections/FeedbackFull";

function RouteFocus() {
  const { pathname } = useLocation();
  const loaded = useRef(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    // Focus follows a route change only. On first load it stays at the top of
    // the document, so the keyboard reaches the skip link and the navigation.
    if (loaded.current) {
      document.getElementById("page")?.focus({ preventScroll: true });
    }
    loaded.current = true;
    document.title =
      pathname === "/feedback"
        ? "Colleague feedback — Diogo Moura"
        : "Diogo Moura — Engineering Leadership & Experience";
  }, [pathname]);
  return null;
}
// The pages, without a router of their own: the browser wraps them in the hash
// router below, and the build wraps them in a static one (scripts/prerender.js).
export function Pages() {
  return (
    <Page>
      <RouteFocus />
      <Routes>
        <Route path="/feedback" element={<FeedbackFull />} />
        <Route path="*" element={<Cv />} />
      </Routes>
    </Page>
  );
}
export default function App() {
  return (
    <HashRouter>
      <Pages />
    </HashRouter>
  );
}
