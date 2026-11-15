import { useEffect } from "react";
import Page from "./sections/Page";
import { Route, Routes, HashRouter, useLocation } from "react-router-dom";
import Cv from "./sections/Cv";
import FeedbackFull from "./sections/FeedbackFull";

function RouteFocus() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    document.getElementById("page")?.focus({ preventScroll: true });
    document.title =
      pathname === "/feedback"
        ? "Colleague feedback — Diogo Moura"
        : "Diogo Moura — Engineering Leadership & Experience";
  }, [pathname]);
  return null;
}
export default function App() {
  return (
    <HashRouter>
      <Page>
        <RouteFocus />
        <Routes>
          <Route path="/feedback" element={<FeedbackFull />} />
          <Route path="*" element={<Cv />} />
        </Routes>
      </Page>
    </HashRouter>
  );
}
