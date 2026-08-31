# Homelab - Docker, Next.js & Nginx

Un projet complet de **plateforme généraliste full-stack** utilisant **Next.js** (frontend + API routes) et **Nginx** comme reverse proxy.

---

## 🎯 Vue d'ensemble

Ce projet est une **plateforme web complète** permettant de :

✅ **Next.js full-stack** : Frontend + API routes dans un seul conteneur  
✅ **Reverse Proxy** : Nginx pour routing, SSL, cache et compression  
✅ **Production-ready** : Architecture scalable et maintenable  

---

## 🏗️ Architecture

| Composant | Technologie | Rôle |
|-----------|-------------|------|
| **Frontend + Backend** | Next.js 14+ | Interface utilisateur + API routes (SSR, API) |
| **Reverse Proxy** | Nginx | Load balancing, routing, SSL, cache |

### Diagramme

```
Client (Browser)
       │ HTTP/HTTPS
       ▼
  Nginx (Port 80, 443)
       │
       ▼
  Next.js (Port 3000)
  - Pages SSR
  - API routes (/api/*)
```

---

## 📋 Prérequis

- **Docker** : v20.10+
- **Docker Compose** : v2.0+
- **RAM** : 2 GB minimum
- **Disque** : 5 GB libre

---

## 🚀 Installation rapide

### 1. Cloner le repo

```bash
git clone https://github.com/yourusername/homelab.git
cd homelab
```

### 2. Démarrer les services

```bash
docker-compose up -d
```

### 3. Vérifier les services

```bash
docker-compose ps
```

---

## 💻 Accès

| Service | URL |
|---------|-----|
| **App** | http://localhost |
| **Next.js Dev** | http://localhost:3000 |

---

## 📁 Structure actuelle

```
homelab/
├── docker-compose.yml
├── nginx/
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── default.conf
│   └── ssl/
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── next.config.js
│   ├── pages/
│   ├── components/
│   ├── public/
│   └── .dockerignore
└── README.md
```

---

## 🔧 Commandes utiles

```bash
# Logs
docker-compose logs -f frontend
docker-compose logs -f nginx

# Shell
docker-compose exec frontend sh
docker-compose exec frontend npm run dev

# Rebuild
docker-compose build --no-cache
docker-compose up -d --build

# Arrêter
docker-compose down
```