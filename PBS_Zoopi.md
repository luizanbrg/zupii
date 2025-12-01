# PBS

## 1. Produit Global – Application Zoopi

Structure générale du produit tel qu’il sera livré.

---

## 1.1 Application Mobile (React Native / Expo)

### 1.1.1 Onboarding & Authentification

- Création de compte
- Connexion
- Rejoindre un foyer via code d’invitation
- Création d’un foyer et choix des pièces

### 1.1.2 Navigation & Écrans principaux

- Tableau de bord du foyer
- Liste des pièces
- Liste des tâches par pièce
- Classement (leaderboard)
- Profil utilisateur & paramètres

### 1.1.3 UI / UX & Thème

- Composants visuels
- Formulaires
- Boutons / Inputs
- Gestion du responsive et du thème

### 1.1.4 Services Frontend (API Client)

- Authentification
- Gestion des utilisateurs
- Gestion du foyer
- Gestion des pièces
- Gestion des tâches
- Variables d’environnement & configuration

---

## 1.2 Backend – API REST (Node.js / Express)

### 1.2.1 Modules fonctionnels

- Authentification (JWT, refresh)
- Gestion du foyer (homes)
- Gestion des pièces
- Catalogue des tâches
- Tâches associées au foyer & aux pièces
- Exécution des tâches (task_user)
- Leaderboard hebdomadaire

### 1.2.2 Architecture technique

- Routes REST
- Controllers
- Services métier
- Middleware (auth, cooldown)
- Cron jobs (reset weekly points)

---

## 1.3 Base de données (PostgreSQL)

### 1.3.1 Entités principales

- Utilisateurs
- Rôles
- Foyers (homes)
- Pièces (rooms)
- Tâches (task catalogue)
- Tâches ↔ Foyer
- Tâches ↔ Pièce
- Tâches réalisées (task_user)

### 1.3.2 Contraintes & intégrité

- Relations par clés étrangères
- Points hebdomadaires vs total points
- Historique minimal des actions

---

## 1.4 Infrastructure & DevOps

### 1.4.1 Conteneurisation & Environnements

- Docker & docker-compose
- Services : Backend, PostgreSQL, Redis

### 1.4.2 CI/CD

- Tests & linting
- Build mobile & backend
- Migrations BD
- Déploiement Dev & Prod

### 1.4.3 Observabilité (future)

- Logs
- Monitoring
- Alerting

---

## 1.5 Gamification

### 1.5.1 Mécaniques de base (MVP)

- Points
- Classement hebdomadaire
- Badges simples
- Cooldowns

### 1.5.2 Évolutions potentielles

- Missions & streaks
- Challenges saisonniers
- Système de progression

---

## 1.6 Documentation & Gestion de projet

### 1.6.1 Documents

- PBS
- WBS
- Diagrammes (MCD, sequence, flow)
- Readme technique & utilisateur

### 1.6.2 Pilotage

- Suivi des features
- Roadmap
- Sprint planning
- Feedback utilisateurs

---
