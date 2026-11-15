import { useState } from "react";
export default function Header() {
  const contactEmail =
    process.env.REACT_APP_CONTACT_EMAIL || "diogo@stormsys.net";
  const [email, setEmail] = useState(process.env.REACT_APP_CONTACT_EMAIL || "");
  function revealEmail() {
    setEmail(contactEmail);
  }
  return (
    <header className="cv-header">
      <div className="eyebrow">ENGINEERING LEADERSHIP · LONDON, UK</div>
      <h1>
        Diogo Moura<span>.</span>
      </h1>
      <div className="header-bottom">
        <div>
          <h2>Engineering Manager</h2>
          <p>
            A builder’s drive. A leader’s care.
            <br />
            Helping people and ideas go further.
          </p>
        </div>
        <div className="contact-info">
          <a href="https://www.linkedin.com/in/diogomoura1">LinkedIn ↗</a>
          <a href="https://github.com/Stormsys">GitHub ↗</a>
          {email ? (
            <a className="contact-email-screen" href={"mailto:" + email}>
              {email}
            </a>
          ) : (
            <button className="contact-email-screen" onClick={revealEmail}>
              Reveal email ↗
            </button>
          )}
          <a className="contact-email-print" href={"mailto:" + contactEmail}>
            {contactEmail}
          </a>
          {process.env.REACT_APP_CONTACT_NUMBER && (
            <a href={"tel:" + process.env.REACT_APP_CONTACT_NUMBER}>
              {process.env.REACT_APP_CONTACT_NUMBER}
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
