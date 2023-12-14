import "./WorkEducation.scss";

function Work() {
    return (
        <section id='work'>

            <h2> Work Experience </h2>

            <ul>
                {/* Checkout.com */}
                <li>
                    <section class="job-entry">
                        <h3 className="job-header">
                            <span className="workplace">Checkout.com</span>
                            <span className="date">July 2022 - Present</span>
                        </h3>

                        <h4>Senior Engineering Manager - Developer Paltform</h4>
                        <p>
                            Checkout.com's engineering organisation consists of 860 people, operating over 800 microservices and maintainaining over 30 decentralised and unstandardised CD pipeline instances.
                        </p>
                        <p>
                            Developer Platform is responsible for boosting engineering excellence, optimising and standardising engineering practices through great tooling directly impacting the engineering organisation. It is an essential function that aims to transform engineering culture at Checkout.com.
                        </p>
                        <p>
                        As the Head of Developer Platform reporting into the VP of Engineering and working closely with a Product Manager and leading several Software Engineers across several teams. Over the last year we have had several success stories:
                        </p>
                        <ul>
                            <li><b>Redesigned and standardised Developer Portal</b>Led a team in the transformation of the Developer Portal, expanding the Backstage offering and Achieved a revamped user experience, ensuring consistency across entries in the portal. Over the last year this has seen a 500% increase in unqiue monthly users.</li>
                            <li><b>Enhanced Data Quality and Service Registration</b>Implemented a foundational strategy to improve the quality and consistency of data about services and Successfully increased high-quality services registration by over 800%, with centrliased and consistent data points.</li>
                            <li><b>Introduced Scoring and Maturity Framework</b>Developed and delivered a Scoring and Maturity framework for teams to report compliance and excellence and Demonstrated success through increased scores over time, such as enhanced SonarQube adoption per service.</li>
                            <li><b>Extended Compliance Checks</b>Expanded the Scoring and Maturity framework to include Compliance checks, facilitating PCI and SOC 2 adherence for teams.</li>
                            <li><b>Standardised DORA Metrics</b>Standardised and automated the capturing of DORA metrics, providing visibility for all teams in the portal.</li>
                            <li><b>Organizational Modeling and Ownership</b>Enabled accurate organizational modeling, showcasing different software team units and promoting strong ownership of services.</li>
                            <li><b>Centralised Deployment Tracking</b>Aggregated and presented all software deployments across Checkout.com, enhancing visibility for various use cases, including Incident Management.</li>
                        </ul>
                    </section>
                </li>

                {/* Just-Eat */}
                <li>

                    <section class="job-entry">
                        <h3 className="job-header">
                            <span className="workplace">Just Eat Takeaway.com</span>
                            <span className="date">September 2016 - July 2022</span>
                        </h3>

                        <h4>Technology Manager ( Engineering Manager )</h4>
                        <p>
                            Technology Manager for the Restaurant Operations product development team since February 2020, in this role I have tripled
                            the size of the team including reaching out to my personal network, created and presented an engineering vision and grown team members into leaders.
                        </p>
                        <p>
                        This team plays a part in a large span of domains across the organisation (cerca 14 domains), and are specialists in
                            Restaurant Core Data and Restaurant Availability. We are central to many other teams across multiple pillars,
                            one of my focuses in my time here was to decentralize ownership of components and reduce the bottleneck and reliance on our team for change.
                        </p>
                        <p>
                            On top of being plugged into the engineering vision and continuing to drive architecture I have successfully guided many of my engineers
                            through promotions and progressions, managed poor performance, created growth opportunities and worked with challenging stakeholders.
                        </p>
                        <p>
                            Our primary customer in Restaurant Ops space are the call centre agents, however this was in extension of our restaurant partners and their needs.
                        </p>
                        <p>&nbsp;</p>
                    </section>

                    <section class="job-entry">
                        <h4>Senior Engineer / Engineering Lead</h4>
                        <p>
                            Engineering Lead for the Restaurant Operations team which is responsible for managing
                            restaurant data, availability and operational tooling.
                            Responsibilities have included mentoring Engineers of varying levels, communicating with
                            stakeholders, and driving ideas.
                        </p>
                        <p>
                            As mentioned earlier I have delivered production code across many languages during my time here including Java, Node.JS, Python, C# and Various front-end frameworks. I was also one of the first engineers to break the barriers and introduce Lambdas as Api's and
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
                                <b>Food Hygiene</b>
                                Led and shaped the solution that enabled Just Eat to make decisions on FSA ratings enabling
                                several operational processes and automation within the business. This solution was designed
                                to scale to serve customers directly via the customer facing apps.
                            </li>

                            <li>
                                <b>Restaurant Self Signup</b>
                                Project lead on the self-signup project with a team of 6 engineers,
                                taking the restaurant signup experience to the next level by introducing an end-to-end
                                solution for collecting restaurant details, documents and supporting the ops processes
                                behind this.
                            </li>

                            <li>
                                <b>SkipTheDishes Integration & Driver Availability Times</b>
                                Project lead for a solution to enable Just Eat to enter the self-delivery space by
                                integrating SkipTheDishes technology into the Just-Eat platform. Particularly I ensured
                                that we were able to restrict restaurant times by driver availability and whilst delivering
                                this project, I ensured that we fed into reliability goals of decoupling from our monolithic
                                Core SQL.
                            </li>

                            <li>
                                <b>Order Management</b>
                                Scaled up a order management ui solution for call centre agents to manage Just Eat orders.
                                During my time on this project I moved it over to Angular2 (from angularJS) and implemented
                                a new in memory browser based testing backed by cypress.
                            </li>

                            <li>
                                <b>Fake Load</b>
                                Designed, delivered and architected a scheduling solution for distributed docker based
                                synthetic testing to monitor the health of the Just-Eat. The solution consisted of an
                                Angular2 application, with a serverless api and ECS based deployment of JMeter docker
                                containers.
                            </li>
                        </ul>
                    </section>
                </li>

                {/* Ericsson */}
                <li>
                    <section class="job-entry">
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
                                <b>Cloud Media Processing Platform Portal</b>
                                Leveraging the latest web technologies to deliver a cutting edge experience and customer facing front
                                end for <a href="http://www.ericsson.com/broadcastandmedia/what-we-do/media-management/"
                                        target="_blank"
                                        rel="noreferrer">CMPP</a> Ericsson's
                                next generation service delivery platform.
                            </li>

                            <li>
                                <b>S3 to S3 Copyworker</b>
                                Highly distributed &amp; multi-threaded file transfer poc with on the fly AES CTR encryption spanning
                                many low-cost machines to deliver increased transfer
                                speeds from S3 to S3 at no extra cost.
                            </li>

                            <li>
                                <b>S3 Copyworker</b>
                                Multi-threaded file transfer software with on the fly AES CTR encryption moving files from local
                                storage to S3 with speeds in excess of 1.6 Gbps.
                                Since its deployment it has moved thousands of files for archiving in AWS.
                            </li>

                            <li>
                                <b>JSTV-i</b> VOD web service, I was responsible for maintaining and implementing back end features
                                as well as face-lifting the admin web app bringing a huge smile to the
                                client.
                            </li>

                            <li>
                                <b>Development Wallboard</b>
                                A simple Polymer, Node.js and Web Sockets application running on a Raspberry Pi and proudly on display
                                in the office which was developed in my spare time.
                                It was a huge success, inspiring other teams in the office to do similar things and generating
                                interest in our team's work.
                            </li>

                            <li>
                                <b>Process Improvements</b>
                                Presented a business case to migrate my old team to git from svn, this included highligting the
                                benefits and documenting the process. I also introduced better processes such as code quality metrics
                                and workflow using SonarQube and Jenkins.
                            </li>
                        </ul>
                    </section>

                </li>

                {/* Red Bee Media */}
                <li>
                    <section class="job-entry">
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
                    </section>
                </li>

                {/* Skywire */}
                <li>
                    <section class="job-entry">
                        <h3><span className="workplace"> Skywire </span>
                            <div className="hr"/>
                            <span className="date">January 2012 - March 2012</span></h3>

                        <h4>Freelance Web Developer</h4>
                    </section>
                </li>

            </ul>

        </section>
    );
}

export default Work;
