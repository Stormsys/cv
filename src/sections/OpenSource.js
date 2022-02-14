import "./OpenSource.scss";

function OpenSource() {
    return (
        <section id='open-source'>

            <h2> Open Source </h2>

            <div className="side-by-side">

                <div className="projects">

                    <h3>Projects</h3>

                    <ul>
                        <li>
                            <h4>
                                <a href="https://github.com/Stormsys/SimpleHal"><i className="fa fa-github"
                                                                                   aria-hidden="true"/> Stormsys/SimpleHal</a>
                            </h4>
                            <p>SimpleHal is an easy to use PHP library for consuming Hal API's</p>
                        </li>
                    </ul>

                </div>

                <div className="contributions">

                    <h3>Contributions</h3>

                    <ul>

                        <li>
                            <h4>
                                <a href="https://github.com/justeat/ZendeskApiClient"><i className="fa fa-github"
                                                                                  aria-hidden="true"/> justeat/ZendeskApiClient </a>
                            </h4>
                            <p> Responsible for a large refactor and modernisation of the client, the client is used in internal Just Eat projects. </p>
                        </li>

                        <li>
                            <h4>
                                <a href="https://github.com/bbyars/mountebank"><i className="fa fa-github"
                                                                                         aria-hidden="true"/> bbyars/mountebank </a>
                            </h4>
                            <p>I was responsible for adding proxyTransparent concept to mountebanke for a use case we had at Just Eat</p>
                        </li>


                        <li>
                            <h4>
                                <a href="https://github.com/robdodson/chart-elements"><i className="fa fa-github"
                                                                                         aria-hidden="true"/> robdodson/chart-elements</a>
                            </h4>
                            <p>Chart.js as Polymer Elements - I was responsible for updating this library to support Chart.js 2 which was not supported at the time</p>
                        </li>

                    </ul>

                </div>

            </div>
        </section>
    );
}

export default OpenSource;
