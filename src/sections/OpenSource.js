import "./OpenSource.scss";
import Reveal from "../components/Reveal";

function OpenSource() {
    return (
        <section id='open-source'>

            <Reveal as="h2"> Open Source </Reveal>

            <div className="side-by-side">

                <div className="projects">

                    <Reveal as="h3">Projects</Reveal>

                    <ul>
                        <li>
                            <Reveal as="div" className="fade-in">
                                <h4>
                                    <a href="https://github.com/Stormsys/SimpleHal" rel="noreferrer" target="_blank"><i className="fa fa-github"
                                                                                       aria-hidden="true"/> Stormsys/SimpleHal</a>
                                </h4>
                                <p>SimpleHal is an easy to use PHP library for consuming Hal API's</p>
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
                                    <a href="https://github.com/justeat/ZendeskApiClient" rel="noreferrer" target="_blank"><i className="fa fa-github"
                                                                                      aria-hidden="true"/> justeat/ZendeskApiClient </a>
                                </h4>
                                <p> Responsible for a large refactor and modernisation of the client, the client is used in internal Just Eat projects. </p>
                            </Reveal>
                        </li>

                        <li>
                            <Reveal as="div" className="fade-in">
                                <h4>
                                    <a href="https://github.com/bbyars/mountebank" rel="noreferrer" target="_blank"><i className="fa fa-github"
                                                                                             aria-hidden="true"/> bbyars/mountebank </a>
                                </h4>
                                <p>I was responsible for adding proxyTransparent concept to mountebanke for a use case we had at Just Eat</p>
                            </Reveal>
                        </li>


                        <li>
                            <Reveal as="div" className="fade-in">
                                <h4>
                                    <a href="https://github.com/robdodson/chart-elements"><i className="fa fa-github"
                                                                                             aria-hidden="true"/> robdodson/chart-elements</a>
                                </h4>
                                <p>Chart.js as Polymer Elements - I was responsible for updating this library to support Chart.js 2 which was not supported at the time</p>
                            </Reveal>
                        </li>

                    </ul>

                </div>

            </div>
        </section>
    );
}

export default OpenSource;
