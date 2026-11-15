import Header from "../modules/Header";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Education from "./Education";
import Awards from "./Awards";
import OpenSource from "./OpenSource";
import Hobbies from "./Hobbies";
import Feedback from "./Feedback";

function Cv() {
  return (
    <>
      <Header />
      <nav className="section-nav" aria-label="Résumé sections">
        {[
          "About",
          "Work",
          "Education",
          "Awards",
          "Open source",
          "Feedback",
          "Interests",
          "Skills",
        ].map((label) => (
          <button
            key={label}
            onClick={() =>
              document
                .getElementById(label.toLowerCase().replace(" ", "-"))
                ?.scrollIntoView({
                  behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)",
                  ).matches
                    ? "auto"
                    : "smooth",
                })
            }
          >
            {label === "Work" ? "Experience" : label}
          </button>
        ))}
      </nav>

      {/* About */}
      <About />

      {/* Skills */}

      {/* Work */}
      <Work />

      {/* Education */}
      <Education />

      {/* Awards */}
      <Awards />

      <OpenSource />

      {/* Interests */}
      <Feedback />

      {/* Interests */}
      <Hobbies />
      <Skills />
    </>
  );
}

export default Cv;
