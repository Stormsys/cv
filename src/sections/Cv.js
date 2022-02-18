import Header from "../modules/Header";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Education from "./Education";
import Awards from "./Awards";
import OpenSource from "./OpenSource";
import Hobbies from "./Hobbies";
import Feedback from "./Feedback";

function Cv() {
    return (
        <>
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
            <Feedback />

            {/* Interests */}
            <Hobbies />
        </>
    );
}

export default Cv;
