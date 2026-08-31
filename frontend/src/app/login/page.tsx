"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    setError("");
    router.push("/");
  };

  return (
    <main className="pageShell">
      <section className="authCard">
        <div className="authHeader">
          <h1>Connexion</h1>
          <p>Bienvenue dans votre espace Homelab.</p>
        </div>

        <form className="formGrid" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="vous@exemple.com"
            />
          </div>

          <div className="field">
            <label htmlFor="password">Mot de passe</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          {error ? <p className="errorText">{error}</p> : null}

          <div className="formActions">
            <button type="submit" className="primaryButton">
              Se connecter
            </button>
            <Link href="/register" className="inlineLink">
              Créer un compte
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}
