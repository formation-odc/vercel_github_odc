import "./TerminalDemo.css";

const TerminalDemo = () => {
  return (
    <section className="terminal">

      <h2 className="terminal-title">
        Essayez Git en ligne de commande
      </h2>

      <p className="terminal-subtitle">
        Découvrez les commandes essentielles de Git.
      </p>

      <div className="terminal-box">

        <div className="terminal-header">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
        </div>

        <div className="terminal-content">

          <p>
            <span>$</span> git init
          </p>

          <p>
            <span>$</span> git add .
          </p>

          <p>
            <span>$</span> git commit -m "Initial commit"
          </p>

          <p>
            <span>$</span> git push origin main
          </p>

        </div>

      </div>

    </section>
  );
};

export default TerminalDemo;