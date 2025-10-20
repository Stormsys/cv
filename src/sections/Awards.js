import "./Awards.scss";
import Reveal from "../components/Reveal";

function Awards() {
    return (
        <section id='awards'>

            <Reveal as="h2"> Awards & Certificates </Reveal>

            <ul>

                <li>
                    <Reveal as="div" className="fade-in">
                        <h3>People Leadership Programme - multiverse</h3>
                        <p> I under took a 15 month apprenticeship around people leadership and management skills modules
                            included Self Awareness, Management of Self, Leading People, Managing People,
                            Building Relationships, Communication, Finance, Project Management and Operational Management.
                            The course was undertaken during work, and I achieved a <b>Distinction</b>.
                        </p>
                    </Reveal>
                </li>

                <li>
                    <Reveal as="div" className="fade-in">
                        <h3>School of Electronics and Computer Science Achievement Award</h3>
                        <p>Each year, the School of Electronics and Computer Science awards a range of prizes to students who have
                            performed particularly well in their studies.
                            I was awarded a certificate and a cash prize for this achievement in recognition of being amongst the
                            top 10% of students by performance on my course. </p>
                    </Reveal>
                </li>

            </ul>

        </section>
    );
}

export default Awards;
