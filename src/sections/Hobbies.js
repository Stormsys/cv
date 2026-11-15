import SectionIcon from "../components/SectionIcon";
import Reveal from "../components/Reveal";

function Hobbies() {
  return (
    <section id="interests">
      <Reveal as="h2"><SectionIcon name="interests" /> Hobbies </Reveal>

      <ul className="hobbies-list">
        <Reveal as="li" className="fade-in">
          Badminton
        </Reveal>
        <Reveal as="li" className="fade-in">
          Boxing{" "}
          <a
            aria-label="Watch boxing video"
            href="https://www.youtube.com/watch?v=LaCmm7mCqWs"
            rel="noreferrer"
            target="_blank"
          >
            <span aria-hidden="true">↗</span>
          </a>
        </Reveal>
        <Reveal as="li" className="fade-in">
          Home automation
        </Reveal>
        <Reveal as="li" className="fade-in">
          Photography
        </Reveal>
        <Reveal as="li" className="fade-in">
          3D printing{" "}
          <a
            aria-label="View 3D printed board game pieces"
            href="https://www.etsy.com/uk/listing/1004041167/quacks-of-quedlinburg-upgrades-set?ref=SellerDashboard"
            rel="noreferrer"
            target="_blank"
          >
            <span aria-hidden="true">↗</span>
          </a>
        </Reveal>
        <Reveal as="li" className="fade-in">
          Board games
        </Reveal>
        <Reveal as="li" className="fade-in">
          Coding
        </Reveal>
        <Reveal as="li" className="fade-in">
          Travel
        </Reveal>
        <Reveal as="li" className="fade-in">
          Video creation
        </Reveal>
        <Reveal as="li" className="fade-in">
          Computer hardware{" "}
          <a
            aria-label="View computer build"
            href="https://uk.pcpartpicker.com/b/Jj3tt6"
            rel="noreferrer"
            target="_blank"
          >
            <span aria-hidden="true">↗</span>
          </a>
        </Reveal>
      </ul>
    </section>
  );
}

export default Hobbies;
