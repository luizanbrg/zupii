# Zoopi ESP

- [Zoopi ESP](#zoopi-esp)
- [1) Brief description (~50 words)](#1-brief-description-50-words)
- [2) Work Breakdown Structure (WBS)](#2-work-breakdown-structure-wbs)
- [3) High-level description of the functions defined in the WBS](#3-high-level-description-of-the-functions-defined-in-the-wbs)
  - [1. Analyse \& Spécifications](#1-analyse--spécifications)
  - [2. Backend – API Node.js](#2-backend--api-nodejs)
  - [\*. Base de données](#-base-de-données)
  - [4. Frontend – Application mobile React Native](#4-frontend--application-mobile-react-native)
  - [5. Gamification](#5-gamification)
  - [6. Infrastructure \& DevOps](#6-infrastructure--devops)
  - [7. Gestion de projet](#7-gestion-de-projet)
  - [8. Livrables finaux](#8-livrables-finaux)
- [4) Promoting presentation](#4-promoting-presentation)
  - [Zoopi – Transformez les tâches ménagères en jeu](#zoopi--transformez-les-tâches-ménagères-en-jeu)
- [À VENIR](#à-venir)
  - [1) Features avancées à gros potentiel technique](#1-features-avancées-à-gros-potentiel-technique)
  - [A. Système de Gamification avancé](#a-système-de-gamification-avancé)
  - [B. Notifications intelligentes (style Duolingo)](#b-notifications-intelligentes-style-duolingo)
  - [C. Partenariats \& Récompenses réelles](#c-partenariats--récompenses-réelles)
  - [. IA légère / ML](#-ia-légère--ml)
  - [Calendrier intelligent](#calendrier-intelligent)
  - [F. Dashboard avancé](#f-dashboard-avancé)
  - [G. Architecture solide (DevOps + Cloud)](#g-architecture-solide-devops--cloud)
- [2) Idées de **défis techniques**](#2-idées-de-défis-techniques)
  - [**1. Haut niveau de concurrence et synchronisation en temps réel**](#1-haut-niveau-de-concurrence-et-synchronisation-en-temps-réel)
  - [2. Résilience réseau](#2-résilience-réseau)
  - [3. Multilingue complet avec localisation dynamique](#3-multilingue-complet-avec-localisation-dynamique)
  - [4. Automations internes](#4-automations-internes)
  - [5. Système de permissions avancé](#5-système-de-permissions-avancé)
  - [Ambition technique de Zoopi en 18 mois](#ambition-technique-de-zoopi-en-18-mois)

# 1) Brief description (~50 words)

_Zoopi est une application mobile gamifiée destinée à simplifier la gestion des tâches ménagères en colocation ou en famille. Elle permet de répartir, suivre et valider les tâches facilement tout en encourageant la coopération grâce à un système de points, de défis et de récompenses, rendant l’organisation quotidienne plus ludique et efficace._

---

# 2) Work Breakdown Structure (WBS)

```
1. Zoopi – Ecosystème Mobile Gamifié de Gestion des Tâches
   1.1 Analyse & Conception
       1.1.1 Étude utilisateur & persona
       1.1.2 Définition des besoins fonctionnels & non-fonctionnels
       1.1.3 Spécifications des core features
       1.1.4 Spécifications des features additionnelles
       1.1.5 Modèle de données avancé
       1.1.6 Architecture logicielle & technique globale

   1.2 Backend – API Node.js / TypeScript
       1.2.1 Authentification & gestion des utilisateurs
       1.2.2 Rooms : création, gestion, rôles & permissions
       1.2.3 Gestion avancée des tâches
             1.2.3.1 CRUD
             1.2.3.2 Récurrence intelligente
             1.2.3.3 Dépendances & tâches liées
       1.2.4 Gamification server-side
             1.2.4.1 Points & niveaux
             1.2.4.2 Défis dynamiques
             1.2.4.3 Streaks & boosts
             1.2.4.4 Événements saisonniers
       1.2.5 Système de notifications intelligentes
             1.2.5.1 Nudges “taquins” personnalisés
             1.2.5.2 Analyse des moments inactifs
             1.2.5.3 Notifications contextuelles
       1.2.6 Algorithmes avancés
             1.2.6.1 Suggestions automatiques de tâches (IA)
             1.2.6.2 Détection d’injustice / surcharge
             1.2.6.3 Répartition optimale de charge
             1.2.6.4 Score de propreté du foyer
       1.2.7 Système de récompenses & API partenaires
             1.2.7.1 Marketplace interne
             1.2.7.2 Intégration APIs de marques
             1.2.7.3 Coupons dynamiques
             1.2.7.4 Tracking & analytics partenaires
       1.2.8 Gestion temps réel
             1.2.8.1 WebSockets / SSE
             1.2.8.2 Synchronisation en direct de l’état des tâches
       1.2.9 Système de résilience réseau
             1.2.9.1 Mode hors ligne (offline-first)
             1.2.9.2 Synchronisation offline → online
             1.2.9.3 Gestion conflits & fusion

   1.3 Base de Données
       1.3.1 Modèles utilisateurs
       1.3.2 Modèles rooms & permissions
       1.3.3 Modèles tâches & historique
       1.3.4 Modèles scoring, badges & défis
       1.3.5 Modèles analytics & logs
       1.3.6 Optimisation & indexation

   1.4 Mobile – App React Native
       1.4.1 Onboarding & Login
       1.4.2 Home dashboard (tâches du jour)
       1.4.3 Création / édition de tâches complexes
       1.4.4 Vue room (membres, scores, justice)
       1.4.5 Vue profil & progression (badges, niveaux)
       1.4.6 Classement global & points
       1.4.7 Défis dynamiques & missions
       1.4.8 Notifications in-app & push
       1.4.9 UI gamifiée & animations
       1.4.10 Mode hors ligne complet
       1.4.11 Multilingue & localisation dynamique

   1.5 Gamification – Moteur Avancé
       1.5.1 Points & niveaux progressifs
       1.5.2 Badges (basés sur stats réelles)
       1.5.3 Missions quotidiennes / hebdo
       1.5.4 Streaks sensibles au contexte
       1.5.5 Événements saisonniers
       1.5.6 Économie interne (pouvoirs, boosts)
       1.5.7 Système anti-triche

   1.6 Marketplace & Partenariats
       1.6.1 Réseau de partenaires (API simulées puis réelles)
       1.6.2 Intégration marques : coupons & réductions
       1.6.3 Gestion inventaire coupons
       1.6.4 Portefeuille utilisateur
       1.6.5 Dashboard partenaire (B2B)
       1.6.6 Système de paiement futur (optionnel)

   1.7 Analytics & Insights
       1.7.1 Tracking détaillé (usage, tâches, stats)
       1.7.2 Heatmaps activité du foyer
       1.7.3 Graphiques d’équité & répartition
       1.7.4 Score de propreté
       1.7.5 Prévisions (usage, charge)
       1.7.6 Outils pour les partenaires

   1.8 Infrastructure & DevOps
       1.8.1 Conteneurisation (Docker)
       1.8.2 Orchestration (Kubernetes / K3s)
       1.8.3 Monitoring (Prometheus + Grafana)
       1.8.4 Logging centralisé
       1.8.5 API Gateway / Reverse Proxy (NGINX)
       1.8.6 CI/CD complet (lint, tests, build, déploiement)
       1.8.7 Stockage cloud (S3) pour médias
       1.8.8 Sécurité & gestion des secrets
       1.8.9 Tests de charge & scalabilité

   1.9 Qualité & Sécurité
       1.9.1 Tests unitaires backend
       1.9.2 Tests E2E mobile
       1.9.3 Analyse statique code
       1.9.4 Pentesting & audit
       1.9.5 Protection contre spam/triche

   1.10 Gestion de Projet
       1.10.1 Roadmap 18 mois
       1.10.2 Sprints & milestones
       1.10.3 Documentation complète
       1.10.4 Feedback utilisateurs réels
       1.10.5 Recrutement équipe
       1.10.6 Préparation soutenance finale

   1.11 Livrables finaux
       1.11.1 Démo fonctionnelle
       1.11.2 Présentation finale
       1.11.3 Poster & visuels
       1.11.4 Site web de présentation
```

---

# 3) High-level description of the functions defined in the WBS

### 1. Analyse & Spécifications

Définir les besoins utilisateurs, structurer les fonctionnalités essentielles, modéliser les flux et établir la base fonctionnelle du projet. C’est l’étape garantissant que Zoopi répond aux attentes réelles d’une colocation ou d'une famille.

### 2. Backend – API Node.js

Développement de l’ensemble des services serveur : création des comptes, gestion des groupes (rooms), création et suivi des tâches, gamification, notifications et intégration BD. Fournit toutes les fonctionnalités consommées par l’application mobile.

### \*. Base de données

Conception et mise en place du modèle relationnel incluant utilisateurs, tâches, rooms, historique et scoring. Garantit la cohérence, stabilité et bonne performance du système.

### 4. Frontend – Application mobile React Native

Développement de l’interface utilisateur : navigation, écrans principaux, interactions avec les tâches, profil, room, classement et gestion du cycle de vie utilisateur. Interface fluide, moderne et intuitive.

### 5. Gamification

Mise en place du système motivant : points, classements, badges, missions hebdomadaires. Transforme la gestion des tâches en activité ludique et engageante.

### 6. Infrastructure & DevOps

Mise en place des environnements de dev/test/prod via Docker, plus CI/CD (tests, build, analyse, déploiement). Garantit qualité, continuité et stabilité du projet.

### 7. Gestion de projet

Organisation du travail, planification, suivi, révision des choix techniques, gestion de la documentation et retours utilisateurs. Pilote l’évolution du projet.

### 8. Livrables finaux

Préparer la démo, la présentation et les assets visuels marketing pour donner une image professionnelle et convaincante de Zoopi.

---

# 4) Promoting presentation

---

### Zoopi – Transformez les tâches ménagères en jeu

Zoopi est une application mobile moderne et gamifiée conçue pour faciliter la gestion des tâches au sein d’un foyer—colocation ou famille. Au lieu de conflits, oublis ou injustice dans la répartition des tâches, Zoopi propose une approche ludique :
→ suivi intelligent et transparent des tâches
→ système de points, badges, défis et classement
→ notifications et rappels automatiques

Zoopi simplifie l’organisation, renforce la coopération et rend le quotidien plus agréable.
Nous disposons déjà d’un MVP fonctionnel, réalisé lors de la première phase du projet, qui prouve la faisabilité de l’idée et montre un engagement réel de notre duo.
Pour ce projet de fin d’études, notre objectif est de réarchitecturer et faire évoluer ce MVP pour en faire une application scalable, robuste et riche en fonctionnalités avancées, tout en conservant l’esprit ludique et motivant qui fait l’identité de Zoopi.
Nous voulons transformer ce prototype initial en un produit complet, professionnel, fluide et démontrable, construit sur une architecture moderne (React Native, Node.js, PostgreSQL, Docker, CI/CD) et propulsé par des fonctionnalités ambitieuses telles que : gamification avancée, notifications intelligentes, IA légère, offline-first, intégration de partenaires et mise à jour en temps réel.
Grâce à une équipe déjà expérimentée et cohérente, nous sommes prêts à porter Zoopi à un niveau supérieur et en faire un projet abouti à forte valeur technique.

---

# À VENIR

## 1) Features avancées à gros potentiel technique

## A. Système de Gamification avancé

Déjà prévu : points, défis, badges, classement.
À ajouter pour plus de profondeur technique :

- **Missions dynamiques** (appel API à intervalle pour générer des challenges quotidiens)
  → ex : “24h pour nettoyer la cuisine et gagner +10 XP”.

- **Événements saisonniers** (Noël, été, back-to-school)
  → items spéciaux, badges, mini-compétitions.

- **Streaks intelligents**
  → on calcule des séries de jours actifs, pénalités, boost après longue pause.

---

## B. Notifications intelligentes (style Duolingo)

- **Nudges** taquins
  → “Ta salle de bain te manque ? Elle sent que tu ne t’es pas occupé d’elle.”
- **Modèle de prédiction des moments d’inactivité**
  → utiliser l’historique pour détecter _quand_ il faut envoyer une notification.
- **Notifications contextuelles**
  → si une tâche doit être faite le matin → notifications uniquement le matin
- **Notifications multi-device** (mobile, smartwatch éventuellement)

---

## C. Partenariats & Récompenses réelles

Gros avantage pour le futur : **dimension business + technique**.

- **Marketplace interne**
  → échange des points contre des réductions (API partenaire)
- **Intégration API avec marques (Fnac, Dyson, Leclerc...)**
  → même simulées au début
- **Gestion des coupons dynamiques**
  → génération, validation, tracking d’usage
- **Analytics d’usage pour les partenaires**
  → Dashboard B2B

---

## . IA légère / ML

- **Suggestion automatique de tâches** en fonction des habitudes du foyer
- **Détection de charge de travail inéquitable**
  → avertir si une personne fait trop par rapport aux autres
- **Recommander une répartition optimale**
  → “Réorganisez vos tâches : Zoopi recommande que Ana fasse X et Max fasse Y.”

Avec un petit modèle maison ou du scoring heuristique suffit — pas besoin d’un vrai ML lourd

---

## Calendrier intelligent

Tâches récurrentes MAIS AMÉLIORÉES :

- planification automatique selon disponibilité
- tâches liées (ex : “vider lave-vaisselle” → “remplir lave-vaisselle”)

---

## F. Dashboard avancé

Pour chaque foyer :

- suivi des performances
- ratio de participation
- historique des tâches faites
- courbes hebdomadaires
- heatmaps (qui fait quoi et quand)

---

## G. Architecture solide (DevOps + Cloud)

- Docker + orchestrateur (Kubernetes/K3s)
- monitoring (Prometheus + Grafana)
- API Gateway (Nginx)
- CI/CD complet (GitHub Actions + tests + builds + déploiement auto)
- stockage cloud (S3) pour images utilisateurs
- base PostgreSQL conteneurisée

---

# 2) Idées de **défis techniques**

### **1. Haut niveau de concurrence et synchronisation en temps réel**

🔹 Live update des tâches (WebSockets, SSE)
🔹 Modification simultanée par plusieurs utilisateurs
🔹 Indicateurs de présence (“X est en train de nettoyer la cuisine”)

### 2. Résilience réseau

Pour une app mobile :

- mode hors ligne
- synchronisation offline → online
- gestion des conflits

### 3. Multilingue complet avec localisation dynamique

Technique : changement de langue sans reboot, gestion des dates, formats.

### 4. Automations internes

Ex :

- rappels automatiques
- archivage des tâches anciennes
- nettoyage des données
- distribution quotidienne/hebdomadaire des missions

### 5. Système de permissions avancé

Créer un groupe / inviter / expulser / rôles / droits.
Comme Slack miniature, très technique.

---

### Ambition technique de Zoopi en 18 mois

à mettre sur le forum d'Epitech potentiellement

Zoopi n’est pas juste une application de gestion des tâches : c’est un **écosystème complet**, mêlant gamification, intelligence contextuelle, architecture scalable et intégrations externes.

Nous prévoyons :

- un **système de gamification avancée** (défis dynamiques, streaks, événements saisonniers)
- des **notifications intelligentes**, prédictives et “taquines”, inspirées de Duolingo
- une **marketplace de récompenses** via intégration d’APIs partenaires (coupons, réductions)
- un **moteur de recommandation** pour répartir intelligemment les tâches
- un **mode hors-ligne** avec synchronisation complexe
- un **dashboard analytique complet** (heatmaps, courbes, statistiques du foyer)
- une **architecture Cloud** containerisée, monitorée et scalable
- une **expérience mobile fluide** avec mises à jour en temps réel

Ce projet est calibré pour 18 mois d’évolution, avec une charge de travail répartie entre backend, mobile, IA légère, gamification, et DevOps.

---
