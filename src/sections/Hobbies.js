import "./Hobbies.scss";

function Hobbies() {
    return (
        <section id='interests'>

            <h2> Hobbies </h2>

            <ul className='hobbies-list'>
                <li>Boxing <a href="https://www.youtube.com/watch?v=cpmn3ZVs6DY" rel="noreferrer" target="_blank"><i class="fa fa-link" /></a></li>
                <li>Home Automation</li>
                <li>Photography</li>
                <li>3D Printing <a href="https://www.etsy.com/uk/listing/1004041167/quacks-of-quedlinburg-upgrades-set?ref=SellerDashboard" rel="noreferrer" target="_blank"><i className="fa fa-link"/></a></li>
                <li>Board Games</li>
                <li>Coding</li>
                <li>Traveling</li>
                <li>Video Creation</li>
                <li>Computer Hardware <a href="https://uk.pcpartpicker.com/b/Jj3tt6" rel="noreferrer" target="_blank"><i className="fa fa-link"/></a></li>
            </ul>

        </section>
    );
}

export default Hobbies;
