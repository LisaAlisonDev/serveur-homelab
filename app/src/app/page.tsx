import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.pageShell}>
      <section className={styles.homeContainer}>
        <header className={styles.homeHeader}>
          <div className={styles.brand}>Homelab</div>
          <nav className={styles.navActions} aria-label="Navigation principale">
            <Link href="/login" className={`${styles.navButton} ${styles.secondaryButton}`}>
              Connexion
            </Link>
            <Link href="/register" className={`${styles.navButton} ${styles.primaryButton}`}>
              Inscription
            </Link>
          </nav>
        </header>

        <div className={styles.homeContent}>
          <div className={styles.hero}>
            <h1>Votre espace maison, simple et centralisé.</h1>
            <p>
              Gérez votre serveur, vos services et vos accès depuis une interface
              moderne pensée pour un usage quotidien rapide et serein.
            </p>

            <div className={styles.heroActions}>
              <Link href="/register" className={styles.primaryButton}>
                Créer un compte
              </Link>
              <Link href="/login" className={styles.secondaryButton}>
                Se connecter
              </Link>
            </div>

            <ul className={styles.featureList}>
              <li>✅ Tableau d’accueil simple et lisible</li>
              <li>✅ Authentification sécurisée</li>
              <li>✅ Interface pensée pour le self-hosting</li>
            </ul>
          </div>

          <aside className={styles.infoPanel}>
            <h2>À propos</h2>
            <p>
              Cette plateforme sert de base pour votre environnement domestique,
              avec une première version claire et fonctionnelle pour l’accès et
              l’inscription des utilisateurs.
            </p>

            <div className={styles.userCard}>
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
