import SectionIcon from "../components/SectionIcon";
import Reveal from "../components/Reveal";
export default function About() {
  return (
    <section id="about">
      <Reveal as="h2"><SectionIcon name="profile" />Profile</Reveal>
      <Reveal as="p">
        I’m an engineer and leader with a long-standing drive to build and
        automate. My experience spans AI products, developer platforms and
        restaurant operations. I care about clear direction, thoughtful
        technical decisions and giving engineers the trust and support to grow.
        Outside work, I’ve always built software for the problems around me—from
        badminton to home automation. Today, AI is a natural part of how I work,
        helping me explore more ideas and turn them into useful software faster.
      </Reveal>
    </section>
  );
}
