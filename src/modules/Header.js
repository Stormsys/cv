import './Header.scss';

function Header() {
    return (
        <header>
            <div className="title">
                <h1> Diogo Moura </h1>
                <h2> Senior Engineer in London, UK </h2>
                <span className="small">view the source code for this cv <a className="source"
                                                                            href="https://github.com/Stormsys/cv">here</a>.</span>
            </div>

            <ul className="contact-info">
                <li><a className="github" href="https://github.com/Stormsys">Stormsys</a></li>
                <li><a className="linkedin" href="https://www.linkedin.com/in/diogomoura1">diogomoura1</a></li>
                <li id="om"><span id="om-click">Click to reveal</span></li>
                <li><span className="phone">Available on request</span></li>
            </ul>
        </header>
    );
}

export default Header;
