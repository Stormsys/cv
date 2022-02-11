import './Header.scss';
import {useState} from "react";


function Email() {
    const email = 'dEBlQG5AXUB0QG9AZEBbQHNAeUBzQG1AckBvQHRAc0BdQHRAYUBbQG9AZ0BvQGlAZA==';

    const obsficateMailAddress = function(mail) {
        return  btoa(mail.replace(/@/, '[at]').replace(/\./, '[dot]').split('').reverse().join('@'));
    }

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
                <h2> Technology Manager in London, UK </h2>
                <span className="small">view the source code for this cv <a className="source"
                                                                            href="https://github.com/Stormsys/cv">here</a>.</span>
            </div>

            <ul className="contact-info">
                <li><a className="github" href="https://github.com/Stormsys">Stormsys</a></li>
                <li><a className="linkedin" href="https://www.linkedin.com/in/diogomoura1">diogomoura1</a></li>
                <li id="om">
                    {!seeEmail &&
                    <span id="om-click" onClick={() => setSeeEmail(true)}>Click to reveal</span>}

                    {seeEmail &&  <span id="om-click"><Email /></span>}
                </li>
                <li><span className="phone">Available on request</span></li>
            </ul>
        </header>
    );
}

export default Header;
