import "./Feedback.scss";
import Reveal from "../components/Reveal";

function Feedback() {
    return (
        <section id='feedback'>

            <Reveal as="h2"> Feedback </Reveal>

            <Reveal as="p" className="fade-in">Please locate feedback that i am proud of <a href={"https://stormsys.net/cv#/feedback"}>here</a>.</Reveal>

        </section>
    );
}

export default Feedback;
