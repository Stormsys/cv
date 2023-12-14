import "./WorkEducation.scss";

function Education() {
    return (
        <section id='education'>

            <h2> Education </h2>

            <ul>

                <li>
                    <h3>
                        <span className="institution">University of Westminster</span>
                        <span className="date">September 2009 - June 2013</span>
                    </h3>

                    <h4>BEng Software Engineering <span>- <b><i className="fa fa-trophy" aria-hidden="true"/></b> First-class honours</span>
                    </h4>

                    <p>
                        Achieved a First-class honours, averaging <b>83%</b> across all four years of study.
                    </p>

                    <p>For my final year project I produced a <b>PHP MVC Framework</b>
                        featuring <i>Ajax Partial View Renders, Active Record MySQL, Auto Loading, Configuration, Routing,
                            Templating and Sessions</i>. To showcase the framework I developed a
                         <b> Web-Based Game Server Control Panel</b>, which allowed users and administrators to manage and
                        provision dedicated servers, and processes within these servers.
                    </p>
                    <p>
                        The source code and documentation is available on <a href="https://github.com/Stormsys/gscpanel"
                                                                             target="_blank"
                                                                             rel="noreferrer">Github</a>.
                    </p>

                </li>

            </ul>

        </section>
    );
}

export default Education;
