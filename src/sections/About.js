import "./About.scss";
import Reveal from "../components/Reveal";

function About() {
    return (
        <section id='about'>
            <Reveal as="h2"> About </Reveal>
            <Reveal as="p" className="fade-in">
                Proven track record of spearheading highly scalable architecture, fostering innovation, and cultivating engineering growth. A passionate engineer at heart, I consistently embark on pet projects during my spare time, driven by a relentless curiosity for technology. Demonstrating a programming language-agnostic approach, I adeptly choose the right tools for optimal results. As a dedicated leader, I not only contribute to the growth of other emerging leaders but also exhibit a knack for identifying and elevating top talent within teams.
            </Reveal>
        </section>
    );
}

export default About;
