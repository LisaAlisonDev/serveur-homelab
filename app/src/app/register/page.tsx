"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setError("Veuillez remplir tous les champs.");
      setSuccess("");
      return;
    }

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Compte créé avec succès. Vous pouvez maintenant vous connecter.");

    setTimeout(() => {
      router.push("/login");
    }, 700);
  };

  return (
    <main className="pageShell">
      <section className="authCard">
        <div className="authHeader">
          <h1>Créer un compte</h1>
          <p>Rejoignez votre espace d’administration.</p>
        </div>

        <form className="formGrid" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Nom</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Votre nom"
            />
          </div>

          <div className="field">
            <label htmlFor="signup-email">Email</label>
            <input
              id="signup-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="vous@exemple.com"
            />
          </div>

          <div className="field">
            <label htmlFor="signup-password">Mot de passe</label>
            <input
              id="signup-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <div className="field">
            <label htmlFor="confirm-password">Confirmer le mot de passe</label>
            <input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          {error ? <p className="errorText">{error}</p> : null}
          {success ? <p className="successText">{success}</p> : null}

          <div className="formActions">
            <button type="submit" className="primaryButton">
              S’inscrire
            </button>
            <Link href="/login" className="inlineLink">
              J’ai déjà un compte
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}
