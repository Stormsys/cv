import './Page.scss';
import Header from "../modules/Header";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Education from "./Education";
import Awards from "./Awards";
import OpenSource from "./OpenSource";
import Hobbies from "./Hobbies";

function Page() {
    return (
        <section id="page">
            <Header />

            {/* About */}
            <About />

            {/* Skills */}
            <Skills />

            {/* Work */}
            <Work />

            {/* Education */}
            <Education />

            {/* Awards */}
            <Awards />

            <OpenSource />


            {/* Interests */}
            <Hobbies />
        </section>
    );
}

export default Page;
