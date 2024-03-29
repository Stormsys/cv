import './Header.scss';
import {useState} from "react";


function Email() {
    const email = 'dEBlQG5AXUB0QG9AZEBbQHNAeUBzQG1AckBvQHRAc0BdQHRAYUBbQG9AZ0BvQGlAZA==';

    const deobsficateMailAddress = function(mail) {
        return  atob(mail).split('@').reverse().join('').replace(/\[dot]/, '.').replace(/\[at]/, '@');
    }

    const deobsficatedEmail = deobsficateMailAddress(email);

    return (<a href={"mailto:" + deobsficatedEmail} >{deobsficatedEmail}</a>);
}

function Header() {
    const [seeEmail, setSeeEmail] = useState(false);


    return (
        <header>
            <div className="title">
                <h1> Diogo Moura </h1>
                <h2> Engineering Manager in London, UK </h2>
                <span className="small">view the source code for this cv <a className="source"
                                                                            href="https://github.com/Stormsys/cv">here</a>.</span>
            </div>

            <ul className="contact-info">
                <li><a className="github" href="https://github.com/Stormsys">Stormsys</a></li>
                <li><a className="linkedin" href="https://www.linkedin.com/in/diogomoura1">diogomoura1</a></li>
                <li id="om">
                    {process.env.REACT_APP_CONTACT_EMAIL && 
                        <span id="om-click">
                            <a href={"mailto:" + process.env.REACT_APP_CONTACT_EMAIL} >
                                {process.env.REACT_APP_CONTACT_EMAIL}
                            </a>
                        </span>
                    }
                    
                    {!process.env.REACT_APP_CONTACT_EMAIL && !seeEmail &&
                    <span id="om-click" onClick={() => setSeeEmail(true)}>Click to reveal</span>}
                    {!process.env.REACT_APP_CONTACT_EMAIL && seeEmail &&  <span id="om-click"><Email /></span>}
                </li>
                <li><span className="phone">{process.env.REACT_APP_CONTACT_NUMBER || 'Available on request'}</span></li>
            </ul>
        </header>
    );
}

export default Header;
