import Reveal from "../components/Reveal";

function Awards() {
  return (
    <section id="awards">
      <Reveal as="h2"> Awards & Certificates </Reveal>

      <ul>
        <li>
          <Reveal as="div" className="fade-in">
            <h3>People Leadership Programme — Multiverse</h3>
            <p>
              I completed a 15-month apprenticeship in people leadership and
              management while working, achieving a <b>Distinction</b>. The
              programme covered self-awareness, self-management, leading and
              managing people, relationships, communication, finance, project
              management and operational management.
            </p>
          </Reveal>
        </li>

        <li>
          <Reveal as="div" className="fade-in">
            <h3>
              School of Electronics and Computer Science Achievement Award
            </h3>
            <p>
              Recognised among the top 10% of students by performance on my
              course, receiving a certificate and cash prize from the School of
              Electronics and Computer Science.{" "}
            </p>
          </Reveal>
        </li>
      </ul>
    </section>
  );
}

export default Awards;
