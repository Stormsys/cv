import SectionIcon from "../components/SectionIcon";
import Reveal from "../components/Reveal";

function OpenSource() {
  return (
    <section id="open-source">
      <Reveal as="h2"><SectionIcon name="code" /> Open Source </Reveal>

      <div className="side-by-side">
        <div className="projects">
          <Reveal as="h3">Projects</Reveal>

          <ul>
            <li>
              <Reveal as="div" className="fade-in">
                <h4>
                  <a
                    href="https://github.com/Stormsys/SimpleHal"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-github" aria-hidden="true" />{" "}
                    Stormsys/SimpleHal
                  </a>
                </h4>
                <p>A PHP library I built to make HAL APIs easier to consume.</p>
              </Reveal>
            </li>
          </ul>
        </div>

        <div className="contributions">
          <Reveal as="h3">Contributions</Reveal>

          <ul>
            <li>
              <Reveal as="div" className="fade-in">
                <h4>
                  <a
                    href="https://github.com/justeat/ZendeskApiClient"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-github" aria-hidden="true" />{" "}
                    justeat/ZendeskApiClient{" "}
                  </a>
                </h4>
                <p>
                  {" "}
                  Led a substantial refactor and modernisation of the client
                  used in Just Eat projects.{" "}
                </p>
              </Reveal>
            </li>

            <li>
              <Reveal as="div" className="fade-in">
                <h4>
                  <a
                    href="https://github.com/bbyars/mountebank"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-github" aria-hidden="true" />{" "}
                    bbyars/mountebank{" "}
                  </a>
                </h4>
                <p>
                  Added the proxyTransparent capability to mountebank for a use
                  case at Just Eat.
                </p>
              </Reveal>
            </li>

            <li>
              <Reveal as="div" className="fade-in">
                <h4>
                  <a href="https://github.com/robdodson/chart-elements">
                    <i className="fa fa-github" aria-hidden="true" />{" "}
                    robdodson/chart-elements
                  </a>
                </h4>
                <p>
                  Updated this Polymer component library to support Chart.js 2,
                  which it did not support at the time.
                </p>
              </Reveal>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default OpenSource;
