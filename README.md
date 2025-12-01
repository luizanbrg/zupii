# Zoopi ESP

- [Zoopi ESP](#zoopi-esp)
  - [Description](#description)
  - [Presentation](#presentation)
    - [Zoopi – Transformez les tâches ménagères en jeu](#zoopi--transformez-les-tâches-ménagères-en-jeu)
  - [Project structure documents (PBS \& WBS)](#project-structure-documents-pbs--wbs)
  - [À quoi s'attendre côté technique:](#à-quoi-sattendre-côté-technique)
    - [1. Analyse \& Spécifications](#1-analyse--spécifications)
    - [2. Backend – API Node.js](#2-backend--api-nodejs)
    - [3. Base de données](#3-base-de-données)
    - [4. Frontend – Application mobile React Native](#4-frontend--application-mobile-react-native)
    - [5. Gamification](#5-gamification)
    - [6. Infrastructure \& DevOps](#6-infrastructure--devops)
    - [7. Gestion de projet](#7-gestion-de-projet)
    - [8. Livrables finaux](#8-livrables-finaux)
- [À VENIR](#à-venir)
  - [1) Features avancées à gros potentiel technique](#1-features-avancées-à-gros-potentiel-technique)
    - [A. Système de Gamification avancé](#a-système-de-gamification-avancé)
    - [B. Notifications intelligentes (style Duolingo)](#b-notifications-intelligentes-style-duolingo)
    - [C. Partenariats \& Récompenses réelles](#c-partenariats--récompenses-réelles)
    - [. IA légère / ML](#-ia-légère--ml)
    - [Calendrier intelligent](#calendrier-intelligent)
    - [F. Dashboard avancé](#f-dashboard-avancé)
    - [G. Architecture solide (DevOps + Cloud)](#g-architecture-solide-devops--cloud)
  - [2) Idées de défis techniques](#2-idées-de-défis-techniques)
    - [1. Haut niveau de concurrence et synchronisation en temps réel](#1-haut-niveau-de-concurrence-et-synchronisation-en-temps-réel)
    - [2. Résilience réseau](#2-résilience-réseau)
    - [3. Multilingue complet avec localisation dynamique](#3-multilingue-complet-avec-localisation-dynamique)
    - [4. Automations internes](#4-automations-internes)
    - [5. Système de permissions avancé](#5-système-de-permissions-avancé)
  - [Ambition technique de Zoopi en 18 mois](#ambition-technique-de-zoopi-en-18-mois)

---

## Description

_Zoopi est une application mobile gamifiée destinée à simplifier la gestion des tâches ménagères en colocation ou en famille. Elle permet de répartir, suivre et valider les tâches facilement tout en encourageant la coopération grâce à un système de points, de défis et de récompenses, rendant l’organisation quotidienne plus ludique et efficace._

---

## Presentation

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

## Project structure documents (PBS & WBS)

Le projet Zoopi est structuré autour de deux documents de référence :

- **PBS – Product Breakdown Structure**
  → Décrit **ce que contient le produit Zoopi**, ses composants et sous-composants (app mobile, API, base de données, gamification, infrastructure, etc.).
  Fichier : [`PBS_Zoopi.md`](./PBS_Zoopi.md)

- **WBS – Work Breakdown Structure**
  → Décrit **le travail à réaliser** pour construire Zoopi (lots de travail, tâches, organisation).
  Fichier : [`WBS_Zoopi.md`](./WBS_Zoopi.md)

---

## À quoi s'attendre côté technique:

### 1. Analyse & Spécifications

Définir les besoins utilisateurs, structurer les fonctionnalités essentielles, modéliser les flux et établir la base fonctionnelle du projet. C’est l’étape garantissant que Zoopi répond aux attentes réelles d’un couple ou d'une collocation.

### 2. Backend – API Node.js

Développement de l’ensemble des services serveur : création des comptes, gestion des groupes (rooms), création et suivi des tâches, gamification, notifications et intégration BD. Fournit toutes les fonctionnalités consommées par l’application mobile.

### 3. Base de données

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

# À VENIR

## 1) Features avancées à gros potentiel technique

### A. Système de Gamification avancé

Déjà prévu : points, défis, badges, classement.
À ajouter pour plus de profondeur technique :

- Missions dynamiques
- Événements saisonniers
- Streaks intelligents

### B. Notifications intelligentes (style Duolingo)

- Nudges taquins
- Prédiction des moments d’inactivité
- Notifications contextuelles
- Notifications multi-device

### C. Partenariats & Récompenses réelles

- Marketplace interne
- Intégration d’APIs partenaires
- Gestion des coupons
- Analytics d’usage partenaires

### . IA légère / ML

- Suggestion automatique de tâches
- Détection d’inéquité de charge
- Recommandation de répartition optimale

### Calendrier intelligent

- Planification automatique selon disponibilité
- Tâches liées (enchaînements logiques)

### F. Dashboard avancé

- Suivi des performances
- Ratio de participation
- Historique & courbes
- Heatmaps d’activité

### G. Architecture solide (DevOps + Cloud)

- Docker + orchestrateur
- Monitoring
- API Gateway
- CI/CD complet
- Stockage cloud pour assets
- PostgreSQL managé ou conteneurisé

---

## 2) Idées de défis techniques

### 1. Haut niveau de concurrence et synchronisation en temps réel

- Live update des tâches (WebSockets, SSE)
- Modifications simultanées
- Indicateurs de présence

### 2. Résilience réseau

- Mode hors ligne
- Synchronisation offline → online
- Gestion des conflits

### 3. Multilingue complet avec localisation dynamique

- Changement de langue sans reboot
- Formats locaux (dates, montants…)

### 4. Automations internes

- Rappels automatiques
- Archivage
- Nettoyage des données
- Distribution périodique des missions

### 5. Système de permissions avancé

- Rôles, droits, invitations, expulsions
- Gestion fine des accès par foyer

---

## Ambition technique de Zoopi en 18 mois

Zoopi n’est pas juste une application de gestion des tâches : c’est un **écosystème complet**, mêlant gamification, intelligence contextuelle, architecture scalable et intégrations externes.

Nous prévoyons :

- un système de gamification avancée
- des notifications intelligentes et prédictives
- une marketplace de récompenses via intégration d’APIs partenaires
- un moteur de recommandation pour répartir intelligemment les tâches
- un mode hors-ligne avec synchronisation complexe
- un dashboard analytique complet
- une architecture Cloud containerisée, monitorée et scalable
- une expérience mobile fluide avec mises à jour en temps réel

Ce projet est calibré pour 18 mois d’évolution, avec une charge de travail répartie entre backend, mobile, IA légère, gamification, et DevOps.
