import "./Hobbies.scss";
import Reveal from "../components/Reveal";

function Hobbies() {
    return (
        <section id='interests'>

            <Reveal as="h2"> Hobbies </Reveal>

            <ul className='hobbies-list'>
                <Reveal as="li" className="fade-in">Boxing <a href="https://www.youtube.com/watch?v=LaCmm7mCqWs" rel="noreferrer" target="_blank"><i className="fa fa-link" /></a></Reveal>
                <Reveal as="li" className="fade-in">Home Automation</Reveal>
                <Reveal as="li" className="fade-in">Photography</Reveal>
                <Reveal as="li" className="fade-in">3D Printing <a href="https://www.etsy.com/uk/listing/1004041167/quacks-of-quedlinburg-upgrades-set?ref=SellerDashboard" rel="noreferrer" target="_blank"><i className="fa fa-link"/></a></Reveal>
                <Reveal as="li" className="fade-in">Board Games</Reveal>
                <Reveal as="li" className="fade-in">Coding</Reveal>
                <Reveal as="li" className="fade-in">Traveling</Reveal>
                <Reveal as="li" className="fade-in">Video Creation</Reveal>
                <Reveal as="li" className="fade-in">Computer Hardware <a href="https://uk.pcpartpicker.com/b/Jj3tt6" rel="noreferrer" target="_blank"><i className="fa fa-link"/></a></Reveal>
            </ul>

        </section>
    );
}

export default Hobbies;
