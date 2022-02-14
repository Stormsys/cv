import "./Hobbies.scss";

function Hobbies() {
    return (
        <section id='interests'>

            <h2> Hobbies </h2>

            <ul className='hobbies-list'>
                <li>Boxing <a href="https://www.youtube.com/watch?v=cpmn3ZVs6DY"><i class="fa fa-link" /></a></li>
                <li>Home Automation</li>
                <li>Photography</li>
                <li>3D Printing</li>
                <li>Board Games</li>
                <li>Coding</li>
                <li>Traveling</li>
                <li>Video Creation</li>
                <li>Computer Hardware</li>
            </ul>

        </section>
    );
}

export default Hobbies;
