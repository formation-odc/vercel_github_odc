import "./Features.css";

const Features = () => {
  return (
    <section className="features">

      <h2 className="features-title">
        Pourquoi apprendre Git et GitHub ?
      </h2>

      <div className="features-container">

        <div className="feature-card">
          <h3>Gestion des versions</h3>
          <p>
            Sauvegarde et suivi des modifications du projet.
          </p>
        </div>

        <div className="feature-card">
          <h3>Travail en équipe</h3>
          <p>
            Collabore efficacement avec plusieurs développeurs.
          </p>
        </div>

        <div className="feature-card">
          <h3>Branches Git</h3>
          <p>
            Travaille sans casser le projet principal.
          </p>
        </div>

        <div className="feature-card">
          <h3>Pull Requests</h3>
          <p>
            Vérifie les modifications avant fusion.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Features;