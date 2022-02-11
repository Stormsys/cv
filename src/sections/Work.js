import "./WorkEducation.scss";

function Work() {
    return (
        <section id='work'>

            <h2> Work Experience </h2>

            <ul>
                {/* Just-Eat */}
                <li>
                    <h3 class="job-header">
                        <span className="workplace">Just-Eat</span>
                        <span className="date">September 2016 - Present</span>
                    </h3>

                    <h4>Technology Manager</h4>
                    <p>
                        Technology Manager for the Restaurant Operations team since 2019, in this role i have more then
                        doubled the team size including reaching out to my personal network,
                        laid out an engineering vision and grown many members of the team into leaders.
                    </p>
                    <p>
                       This team is responsible for a large span of domains across the organisation (cerca 14 domains), and are specialists in
                        Restaurant core Data and Restaurant Availability. We are highly central to many teams,
                        one of my focuses in my time here was to decentralize ownership of components and reduce the bottleneck and reliance on our team for change.
                    </p>
                    <p>
                        On top of being plugged into the engineering vision and continuing to drive architecture i have successfully guided many of my engineers
                        through promotions and progressions, managed poor performance, created growth opportunities and worked with challenging stakeholders.
                    </p>
                    <p>
                        Our primary customer in Restaurant Ops space are the call centre agents, however this was in extension of our restaurant partners and their needs.
                    </p>
                    <p>&nbsp;</p>


                    <h4>Senior Engineer / Engineering Lead</h4>

                    <p>
                        Engineering Lead for the Restaurant Operations team which is responsible for managing
                        restaurant data, availability and operational tooling.
                        Responsibilities have included mentoring Engineers of varying levels, communicating with
                        stakeholders, and driving ideas.
                    </p>
                    <p>
                        As mentioned earlier i have delivered production code across many languages during my time here including Java, Node.JS, Python, C# and Various front-end frameworks. I was also one of the first engineers to break the barriers and introduce Lambdas as Api's and
                        static front end applications hosted on cloudflare and S3.
                    </p>
                    <p>
                        I have a solid track record of leading and shaping several technical projects.
                    </p>
                    <p>
                        Some noteworthy projects include:
                    </p>
                    <ul>
                        <li>
                            <h5>Food Hygiene</h5>
                            Led and shaped the solution that enabled Just Eat to make decisions on FSA ratings enabling
                            several operational processes and automation within the business. This solution was designed
                            to scale to serve customers directly via the customer facing apps.
                        </li>

                        <li>
                            <h5>Restaurant Self Signup</h5>
                            Project lead on the self-signup project with a team of 6 engineers,
                            taking the restaurant signup experience to the next level by introducing an end-to-end
                            solution for collecting restaurant details, documents and supporting the ops processes
                            behind this.
                        </li>

                        <li>
                            <h5>SkipTheDishes Integration & Driver Availability Times</h5>
                            Project lead for a solution to enable Just Eat to enter the self-delivery space by
                            integrating SkipTheDishes technology into the Just-Eat platform. Particularly i ensured
                            that we were able to restrict restaurant times by driver availability and whilst delivering
                            this project, I ensured that we fed into reliability goals of decoupling from our monolithic
                            Core SQL.
                        </li>

                        <li>
                            <h5>Order Management</h5>
                            Scaled up a order management ui solution for call centre agents to manage Just Eat orders.
                            During my time on this project i moved it over to Angular2 (from angularJS) and implemented
                            a new in memory browser based testing backed by cypress.
                        </li>

                        <li>
                            <h5>Fake Load</h5>
                            Designed, delivered and architected a scheduling solution for distributed docker based
                            synthetic testing to monitor the health of the Just-Eat. The solution consisted of an
                            Angular2 application, with a serverless api and ECS based deployment of JMeter docker
                            containers.
                        </li>
                    </ul>
                </li>

                {/* Ericsson */}
                <li>
                    <h3><span className="workplace">Ericsson (CTO Group)</span>
                        <div className="hr"/>
                        <span className="date">July 2013 - September 2016</span></h3>

                    <h4>Software Engineer</h4>

                    <p>
                        Hand picked to work as part of the CTO Group within Ericsson Broadcast and Media Services, defining and
                        implementing the next generation of software solutions. Also previously spent time in the applications
                        delivery team on many client facing projects.
                    </p>

                    <p>
                        Some noteworthy projects include:

                    </p>

                    <ul>

                        <li>
                            <h5>Cloud Media Processing Platform Portal</h5>
                            Leveraging the latest web technologies to deliver a cutting edge experience and customer facing front
                            end for <a href="http://www.ericsson.com/broadcastandmedia/what-we-do/media-management/"
                                       target="_blank"
                                       rel="noreferrer">CMPP</a> Ericsson's
                            next generation service delivery platform.
                        </li>

                        <li>
                            <h5>S3 to S3 Copyworker</h5>
                            Highly distributed &amp; multi-threaded file transfer poc with on the fly AES CTR encryption spanning
                            many low-cost machines to deliver increased transfer
                            speeds from S3 to S3 at no extra cost.
                        </li>

                        <li>
                            <h5>S3 Copyworker</h5>
                            Multi-threaded file transfer software with on the fly AES CTR encryption moving files from local
                            storage to S3 with speeds in excess of 1.6 Gbps.
                            Since its deployment it has moved thousands of files for archiving in AWS.
                        </li>

                        <li>
                            <h5>JSTV-i</h5> VOD web service, I was responsible for maintaining and implementing back end features
                            as well as face-lifting the admin web app bringing a huge smile to the
                            client.
                        </li>

                        <li>
                            <h5>Development Wallboard</h5>
                            A simple Polymer, Node.js and Web Sockets application running on a Raspberry Pi and proudly on display
                            in the office which was developed in my spare time.
                            It was a huge success, inspiring other teams in the office to do similar things and generating
                            interest in our team's work.
                        </li>

                        <li>
                            <h5>Process Improvements</h5>
                            Presented a business case to migrate my old team to git from svn, this included highligting the
                            benefits and documenting the process. I also introduced better processes such as code quality metrics
                            and workflow using SonarQube and Jenkins.
                        </li>
                    </ul>

                </li>

                {/* Red Bee Media */}
                <li>

                    <h3><span className="workplace"> Red Bee Media (Ericsson)</span>
                        <div className="hr"/>
                        <span className="date">July 2012 - February 2013</span></h3>

                    <h4>Software Engineer - Intern + Contractor</h4>

                    <p>
                        I began as an intern and invited to stay on as a contractor. Working under the innovations team on the
                        <a href="http://www.ericsson.com/broadcastandmedia/news/red-bee-media-launches-redplayer-the-next-generation-online-video-platform/"
                           target="_blank"
                           rel="noreferrer"> RedPlayer</a> VOD Solution.
                        I developed apps for XBox, Android Tablet &amp; Connected TV's from Samsung, Sony and Panasonic.
                    </p>

                </li>

                {/* Skywire */}
                <li>

                    <h3><span className="workplace"> Skywire </span>
                        <div className="hr"/>
                        <span className="date">January 2012 - March 2012</span></h3>

                    <h4>Freelance Web Developer</h4>

                </li>

            </ul>

        </section>
    );
}

export default Work;
