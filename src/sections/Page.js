export default function Page({ children }) {
  return (
    <>
      <a
        className="skip-link"
        href="#page"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("page").focus();
        }}
      >
        Skip to content
      </a>
      <nav className="cv-nav" aria-label="Main navigation">
        <a href="https://stormsys.net" className="wordmark">
          dm.
        </a>
        <div>
          <a href="https://stormsys.net">Portfolio ↗</a>
          <a href="#/">Résumé</a>
          <button onClick={() => window.print()}>Print / Save PDF ↓</button>
        </div>
      </nav>
      <main id="page" tabIndex="-1">
        {children}
      </main>
      <footer className="cv-footer">
        Diogo Moura · Engineering leader & builder
        <a href="https://github.com/Stormsys/cv">View source ↗</a>
      </footer>
    </>
  );
}
