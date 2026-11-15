import SectionIcon from "../components/SectionIcon";
import Reveal from "../components/Reveal";

function Work() {
  return (
    <section id="work">
      <Reveal as="h2"><SectionIcon name="work" />
        Experience
        <span className="feedback-callout">
          <a href="#/feedback">See feedback ↗</a>
        </span>
      </Reveal>
      <ul>
        <li>
          <Reveal as="section" className="job-entry">
            <h3 className="job-header">
              <span className="workplace">Meta</span>
              <span className="date">March 2024 - Present</span>
            </h3>
            <h4>Engineering Manager</h4>
            <p>Leading engineering teams working on Applied AI products.</p>
          </Reveal>
        </li>
        <li>
          <Reveal as="section" className="job-entry">
            <h3 className="job-header">
              <span className="workplace">Checkout.com</span>
              <span className="date">June 2022 - December 2023</span>
            </h3>
            <h4>Senior Engineering Manager - Developer Platform</h4>
            <p>
              As Head of Developer Platform, I reported to the VP of
              Engineering, partnered with a Product Manager and led software
              engineers across several teams. Our remit was to improve
              engineering practices through shared tools, consistent standards
              and better visibility.
            </p>
            <p>
              At the time, the engineering organisation consisted of 860 people,
              operating over 800 microservices and maintaining over 30
              decentralised, non-standardised CD pipeline instances. Key
              outcomes included:
            </p>
            <ul>
              <li>
                <b>Developer portal</b>Led the redesign of the Backstage-based
                developer portal, improving the user experience and consistency
                of its entries. Unique monthly users increased by 500% over a
                year.
              </li>
              <li>
                <b>Service registration and data quality</b>Established a
                strategy for consistent, centralised service data. High-quality
                service registrations increased by over 800%.
              </li>
              <li>
                <b>Scoring and maturity framework</b>Delivered a framework for
                teams to assess engineering practices and track progress. Scores
                improved over time, including increased SonarQube adoption per
                service.
              </li>
              <li>
                <b>Compliance checks</b>Extended the framework with checks to
                help teams meet PCI and SOC 2 requirements.
              </li>
              <li>
                <b>DORA metrics</b>Standardised and automated DORA metric
                collection, making the results visible to teams through the
                portal.
              </li>
              <li>
                <b>Organisational modelling and ownership</b>Mapped software
                teams and their services to make ownership clear across the
                organisation.
              </li>
              <li>
                <b>Deployment tracking</b>Centralised deployment information
                across Checkout.com, supporting incident management and other
                operational needs.
              </li>
            </ul>
          </Reveal>
        </li>
        <li>
          <Reveal as="section" className="job-entry">
            <h3 className="job-header">
              <span className="workplace">Just Eat Takeaway.com</span>
              <span className="date">September 2016 - June 2022</span>
            </h3>
            <h4>Technology Manager (Engineering Manager)</h4>
            <p>
              From February 2020, I managed the Restaurant Operations product
              development team. I tripled the team’s size, including hiring
              through my network, set out an engineering vision and helped team
              members grow into leaders.
            </p>
            <p>
              The team worked across around 14 domains, specialising in
              restaurant core data and availability. I focused on decentralising
              component ownership to reduce bottlenecks and other teams’
              dependence on us for change.
            </p>
            <p>
              Alongside technical direction and architecture, I supported
              promotions and career progression, addressed performance issues,
              created growth opportunities and worked through difficult
              stakeholder decisions. Our primary users were call centre agents
              supporting restaurant partners.
            </p>
          </Reveal>
          <Reveal as="section" className="job-entry">
            <h4>Senior Engineer / Engineering Lead</h4>
            <p>
              I led engineering for the Restaurant Operations team, covering
              restaurant data, availability and operational tooling. I mentored
              engineers at different levels, worked with stakeholders and shaped
              technical projects.
            </p>
            <p>
              I delivered production code in Java, Node.js, Python, C# and
              several front-end frameworks. I was among the first engineers
              there to introduce AWS Lambda APIs and static front ends hosted on
              Cloudflare and S3.
            </p>
            <ul>
              <li>
                <b>Food hygiene</b>Led the solution for using FSA ratings in
                operational decisions and automation. It was designed to scale
                to customer-facing applications.
              </li>
              <li>
                <b>Restaurant self-signup</b>Led a team of 6 engineers building
                an end-to-end signup experience for restaurant details,
                documents and the supporting operational processes.
              </li>
              <li>
                <b>SkipTheDishes integration and driver availability</b>Led work
                to integrate SkipTheDishes technology into Just Eat’s
                self-delivery offering. Restaurant availability was constrained
                by driver availability, while the solution supported reliability
                goals by decoupling from the monolithic Core SQL system.
              </li>
              <li>
                <b>Order management</b>Scaled the interface used by call centre
                agents to manage orders, migrated it from AngularJS to Angular 2
                and introduced in-memory browser-based testing with Cypress.
              </li>
              <li>
                <b>Fake Load</b>Designed and delivered a scheduler for
                distributed, Docker-based synthetic testing to monitor the
                health of Just Eat’s services. The system combined an Angular 2
                application, a serverless API and JMeter containers deployed
                through ECS.
              </li>
            </ul>
          </Reveal>
        </li>
        <li>
          <Reveal as="section" className="job-entry">
            <h3>
              <span className="workplace">Ericsson (CTO Group)</span>
              <span className="date">July 2013 - September 2016</span>
            </h3>
            <h4>Software Engineer</h4>
            <p>
              I was selected to join the CTO Group within Ericsson Broadcast and
              Media Services, defining and implementing new software solutions.
              Before that, I worked in the applications delivery team on
              client-facing projects.
            </p>
            <ul>
              <li>
                <b>Cloud Media Processing Platform Portal</b>Built the
                customer-facing front end for{" "}
                <a
                  href="http://www.ericsson.com/broadcastandmedia/what-we-do/media-management/"
                  target="_blank"
                  rel="noreferrer"
                >
                  CMPP
                </a>
                , Ericsson’s next-generation service delivery platform.
              </li>
              <li>
                <b>S3 to S3 Copyworker</b>Developed a distributed, multithreaded
                file-transfer proof of concept with on-the-fly AES-CTR
                encryption. It used multiple low-cost machines to increase
                S3-to-S3 transfer speeds at no extra cost.
              </li>
              <li>
                <b>S3 Copyworker</b>Built multithreaded file-transfer software
                with on-the-fly AES-CTR encryption, moving files from local
                storage to S3 at speeds exceeding 1.6 Gbps. It was used to
                archive thousands of files in AWS.
              </li>
              <li>
                <b>JSTV-i</b>Maintained and developed backend features for the
                video-on-demand service and refreshed its administration
                interface.
              </li>
              <li>
                <b>Development wallboard</b>Built a Polymer, Node.js and
                WebSocket application in my spare time, running on a Raspberry
                Pi in the office. It generated interest in the team’s work and
                inspired other teams to create similar displays.
              </li>
              <li>
                <b>Process improvements</b>Presented a business case and
                migration guidance for moving a previous team from SVN to Git.
                Introduced code-quality metrics and workflow improvements using
                SonarQube and Jenkins.
              </li>
            </ul>
          </Reveal>
        </li>
        <li>
          <Reveal as="section" className="job-entry">
            <h3>
              <span className="workplace">Red Bee Media (Ericsson)</span>
              <span className="date">July 2012 - February 2013</span>
            </h3>
            <h4>Software Engineer - Intern + Contractor</h4>
            <p>
              I joined as an intern and was invited to stay as a contractor.
              Working with the innovations team on the{" "}
              <a
                href="http://www.ericsson.com/broadcastandmedia/news/red-bee-media-launches-redplayer-the-next-generation-online-video-platform/"
                target="_blank"
                rel="noreferrer"
              >
                RedPlayer
              </a>{" "}
              video-on-demand solution, I developed apps for Xbox, Android
              tablets and connected TVs from Samsung, Sony and Panasonic.
            </p>
          </Reveal>
        </li>
        <li>
          <Reveal as="section" className="job-entry">
            <h3>
              <span className="workplace">Skywire</span>
              <span className="date">January 2012 - March 2012</span>
            </h3>
            <h4>Freelance Web Developer</h4>
          </Reveal>
        </li>
      </ul>
    </section>
  );
}
export default Work;
