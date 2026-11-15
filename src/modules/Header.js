import { useState } from "react";
export default function Header() {
  const [email, setEmail] = useState(process.env.REACT_APP_CONTACT_EMAIL || "");
  function revealEmail() {
    setEmail(
      atob(
        "dEBlQG5AXUB0QG9AZEBbQHNAeUBzQG1AckBvQHRAc0BdQHRAYUBbQG9AZ0BvQGlAZA==",
      )
        .split("@")
        .reverse()
        .join("")
        .replace(/\[dot]/, ".")
        .replace(/\[at]/, "@"),
    );
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
            <a href={"mailto:" + email}>{email}</a>
          ) : (
            <button onClick={revealEmail}>Reveal email ↗</button>
          )}
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
