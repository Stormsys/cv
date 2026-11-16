import SectionIcon from "../components/SectionIcon";
import Reveal from "../components/Reveal";

function Education() {
  return (
    <section id="education">
      <Reveal as="h2"><SectionIcon name="education" /> Education </Reveal>
      <ul>
        <li>
          <Reveal as="section" className="job-entry fade-in">
            <h3>
              <span className="institution">University of Westminster</span>{" "}
              <span className="date">September 2009 - June 2013</span>
            </h3>

            <h4>
              BEng Software Engineering{" "}
              <span>
                -{" "}
                First-class honours
              </span>
            </h4>

            <p>
              Graduated with first-class honours, averaging <b>83%</b> across
              all four years of study.
            </p>

            <p>
              For my final year project I produced a <b>PHP MVC framework </b>
              featuring{" "}
              <i>
                Ajax partial-view rendering, Active Record for MySQL,
                autoloading, configuration, routing, templating and sessions
              </i>
              . To showcase the framework I developed a
              <b> web-based game server control panel</b>, which allowed users
              and administrators to manage and provision dedicated servers, and
              processes within these servers.
            </p>
            <p>
              The source code and documentation are available on{" "}
              <a
                href="https://github.com/Stormsys/gscpanel"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              .
            </p>
          </Reveal>
        </li>
      </ul>
    </section>
  );
}

export default Education;
