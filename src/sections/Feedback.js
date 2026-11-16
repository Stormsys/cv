import Icon from "../components/Icon";
import SectionIcon from "../components/SectionIcon";
export default function Feedback() {
  return (
    <section id="feedback">
      <h2><SectionIcon name="feedback" />In others’ words</h2>
      <blockquote>
        “His leadership style, marked by clarity and a sense of enjoyment, has
        created a positive and collaborative work environment.”
        <cite>VP, Engineering · Checkout.com · 2023</cite>
      </blockquote>
      <a href="#/feedback">Read all feedback <Icon name="arrow-up-right" /></a>
    </section>
  );
}
