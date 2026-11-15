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
        <a href="/" className="wordmark" aria-label="Diogo Moura — portfolio">
          dm<span>.</span>
        </a>
        <div>
          <a href="/">Portfolio ↗</a>
          <a href="#/">Résumé</a>
          <button onClick={() => window.print()} aria-label="Print / Save PDF">
            <span className="print-label-full">Print / Save </span>PDF ↓
          </button>
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
