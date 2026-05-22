import "./LearningPath.css";

const LearningPath = () => {
  return (
    <section className="learning">
      <h2 className="learning-title">
        Parcours d'apprentissage
      </h2>

      <p className="learning-subtitle">
        Apprenez Git et GitHub étape par étape.
      </p>
      <div className="learning-container">

        <div className="learning-card">
          <span className="learning-number">01</span>
          <h3>Introduction à Git</h3>
          <p>
            Comprendre le système de gestion de versions Git.
          </p>
        </div>

        <div className="learning-card">
          <span className="learning-number">02</span>
          <h3>Installation de Git</h3>
          <p>
            Installer Git sur Windows et configurer votre environnement.
          </p>
        </div>

        <div className="learning-card">
          <span className="learning-number">03</span>
          <h3>Git Init</h3>
          <p>
            Créer un nouveau dépôt Git local.
          </p>
          <code>git init</code>
        </div>
        
        <div className="learning-card">
          <span className="learning-number">04</span>
          <h3>Git Add & Commit</h3>
          <p>
            Sauvegarder les modifications du projet.
          </p>
          <code>git add .</code>
          <code>git commit -m "message"</code>
        </div>

        <div className="learning-card">
          <span className="learning-number">05</span>
          <h3>Branches Git</h3>
          <p>
            Travailler sur des fonctionnalités séparées.
          </p>
          <code>git checkout -b feature/header</code>
        </div>
        
        <div className="learning-card">
          <span className="learning-number">06</span>
          <h3>Push sur GitHub</h3>
          <p>
            Envoyer votre projet vers GitHub.
          </p>
          <code>git push origin main</code>
        </div>
      
      </div>
    </section>
  );
};

export default LearningPath;