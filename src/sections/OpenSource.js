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
                                <a href="https://github.com/robdodson/chart-elements"><i className="fa fa-github"
                                                                                         aria-hidden="true"/> robdodson/chart-elements</a>
                            </h4>
                            <p>Chart.js as Polymer Elements</p>
                        </li>
                    </ul>

                </div>

            </div>
        </section>
    );
}

export default OpenSource;
