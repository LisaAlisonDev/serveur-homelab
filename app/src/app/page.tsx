import Link from "next/link";

export default function HomePage() {
  return (
    <main className="pageShell">
      <section className="homeContainer">
        <header className="homeHeader">
          <div className="brand">Homelab</div>
          <nav className="navActions" aria-label="Navigation principale">
            <Link href="/login" className="navButton secondaryButton">
              Connexion
            </Link>
            <Link href="/register" className="navButton primaryButton">
              Inscription
            </Link>
          </nav>
        </header>

        <div className="homeContent">
          <div className="hero">
            <h1>Votre espace maison, simple et centralisé.</h1>
            <p>
              Gérez votre serveur, vos services et vos accès depuis une interface
              moderne pensée pour un usage quotidien rapide et serein.
            </p>

            <div className="heroActions">
              <Link href="/register" className="primaryButton">
                Créer un compte
              </Link>
              <Link href="/login" className="secondaryButton">
                Se connecter
              </Link>
            </div>

            <ul className="featureList">
              <li>✅ Tableau d’accueil simple et lisible</li>
              <li>✅ Authentification sécurisée</li>
              <li>✅ Interface pensée pour le self-hosting</li>
            </ul>
          </div>

          <aside className="infoPanel">
            <h2>À propos</h2>
            <p>
              Cette plateforme sert de base pour votre environnement domestique,
              avec une première version claire et fonctionnelle pour l’accès et
              l’inscription des utilisateurs.
            </p>

            <div className="userCard">
              <p>
                <strong>Statut :</strong> système prêt à recevoir vos services et
                utilisateurs.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
