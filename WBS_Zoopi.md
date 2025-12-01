# **1. Analyse & Conception**

## **1.1 Étude utilisateur**

- Préparer guide d’entretien (questions, scénarios d’usage).
- Contacter 3–5 personnes (colocs, couples, familles).
- Réaliser entretiens / sondages.
- Identifier frustrations récurrentes (répartition des tâches, injustices, oublis).
- Synthétiser les résultats dans un document.
- Extraire 2–3 personas.

## **1.2 Définition du scope fonctionnel**

- Lister tous les use cases (Rooms, Tasks, Leaderboard, Profil).
- Écrire règles métier principales (cooldown, completion, points).
- Définir exigences non-fonctionnelles (perf, sécurité minimale).
- Définir limite MVP (features nécessaires / bonus).
- Valider le scope avec l’équipe.

## **1.3 Spécifications fonctionnelles**

- Rédiger spécifications pour : Auth, Rooms, Tasks, Leaderboard.
- Définir flux utilisateur pour onboarding (create / join / login).
- Définir validations et retours erreur.
- Documenter comportement des écrans (loading, erreur, empty state).
- Organiser les specs dans un dossier partagé.

## **1.4 Modélisation des données**

- Lister entités du MVP.
- Définir attributs et types.
- Définir relations (1–N, N–N).
- Choisir règles de suppression (CASCADE ou non).
- Créer diagramme ER (DBML / DrawSQL).

## **1.5 Architecture technique**

- Définir architecture globale (mobile → API → DB).
- Découper modules backend (auth, rooms, tasks, scores).
- Choisir gestion d’état mobile (Zustand / Context).
- Définir règles de navigation globale.
- Créer schéma d’architecture avec flèches (flux données).

---

# **2. Backend – API Node.js / TypeScript**

## **2.1 Setup du projet**

- Initialiser projet TS (ts-node, tsconfig).
- Ajouter ESLint + Prettier + Husky (optionnel).
- Structurer dossier : routes / controllers / services / db / middleware.
- Configurer variables d’environnement.
- Ajouter middleware d’erreur global.

## **2.2 Authentification**

- Implémenter POST /auth/register.
- Implémenter POST /auth/login.
- Générer token + refresh.
- Ajouter middleware JWT.
- Implémenter GET /auth/check.
- Implémenter PUT /users/:id (profil).

## **2.3 Rooms (foyers)**

- Implémenter POST /homes (création).
- Générer un inviteToken.
- Implémenter POST /homes/invite (rejoindre).
- Implémenter GET /homes/:id (vue foyer).
- Implémenter POST /homes/leave.
- Ajouter rôle simple (admin / membre).

## **2.4 Tasks (tâches)**

- Implémenter CRUD pour les tâches globales (catalogue).
- Implémenter association Task ↔ Home (home_task).
- Implémenter association Task ↔ Room (room_task).
- Implémenter POST /taskUser/complete.
- Enregistrer dans TaskHistory.

## **2.5 Gamification serveur**

- Créer fonction calculateScore(task, user).
- Ajouter règles : retard, cooldown, difficulté.
- Implémenter GET /leaderboard/home/:id.
- Ajouter job hebdo : reset points + consolidation.
- Stocker total_points & weekly_points.

## **2.6 Notifications (MVP simulé)**

- Créer table Reminder (V2).
- Implémenter service CRON simulé (console.log).
- Préparer structure future pour Expo push.

## **2.7 Documentation API**

- Configurer Swagger/Redoc.
- Ajouter typage DTO pour chaque route.
- Écrire exemples de réponses.
- Générer documentation PDF pour soutenance.

---

# **3. Base de Données – PostgreSQL**

## **3.1 Installation & config**

- Ajouter service Postgres au docker-compose.
- Créer utilisateur et base dev.
- Configurer Drizzle ORM.
- Activer logs SQL si besoin.

## **3.2 Schéma**

- Créer tables : user, home, role, room, task, home_room, home_task, room_task, task_user.
- Définir contraintes (NOT NULL, UNIQUE).
- Ajouter index (emails, home_id, task_id).
- Définir triggers simples si nécessaire.

## **3.3 Migrations & seed**

- Créer scripts Drizzle migration init.
- Ajouter migration pour tables.
- Créer seed :

  - 2 homes
  - 5 rooms
  - 10 tâches globales

- Ajouter script `npm run db:migrate`.

---

# **4. Mobile – React Native / Expo**

## **4.1 Setup initial**

- Créer projet Expo.
- Installer libs : React Navigation, Axios, Zustand ou Context.
- Configurer thème global.
- Configurer gestion token via SecureStore.

## **4.2 Auth & Onboarding**

- Implémenter écran Start (choix login/create/join).
- Implémenter Register.
- Implémenter Login.
- Implémenter CreateHousing (nom + pièces).
- Implémenter JoinHousing (code).
- Rediriger vers AppTabs après succès.

## **4.3 Dashboard**

- Afficher tâches du jour (par user).
- Groupes par état : à faire / en retard / terminées.
- Ajouter actions rapides : complete, voir détails.
- Appels API + loading states.

## **4.4 Gestion des tâches**

- Écran CreateTask.
- Écran EditTask.
- Écran voir détails.
- Validation formulaire.
- Action complete task.

## **4.5 Vue Room**

- Afficher liste des pièces du foyer.
- Afficher tâches associées.
- Ajouter/retirer pièce si admin.
- Afficher état finished de la pièce.

## **4.6 Profil**

- Afficher username + email.
- Points total + hebdo.
- Bouton déconnexion.
- Afficher badges (MVP simple).

## **4.7 UI gamifiée**

- Couleurs gamifiées.
- Animation +points.
- Transitions fluides.
- Icônes cohérentes.

---

# **5. Gamification – Règles & UX**

## **5.1 Système de points**

- Définir barème fixe par tâche.
- Ajouter bonus retard.
- Ajouter bonus difficulté.
- Documenter logique.

## **5.2 Badges & niveaux**

- Définir règles d’obtention badges.
- Créer 3 badges MVP.
- Ajouter affichage côté profil.

## **5.3 Classement & feedback**

- Calcul classement hebdo.
- Affichage classement sur mobile.
- Ajouter petits messages motivants.

---

# **6. Infrastructure & DevOps**

## **6.1 Containerisation**

- Écrire Dockerfile backend.
- Écrire docker-compose global.
- Configurer ports API/DB.
- Documenter démarrage : `docker compose up`.

## **6.2 CI – GitHub Actions**

- Lint sur push.
- Tests backend.
- Build API.
- Build Expo preview.

## **6.3 Démo**

- Déployer backend (Railway/Render/VPS).
- Générer QR code Expo.
- Documenter accès.

## **6.4 Logs & monitoring**

- Configurer logger.
- Ajouter table Errors.
- Créer mini dashboard (console / Logtail).

---

# **7. Qualité & Tests**

## **7.1 Stratégie**

- Définir tests critiques (auth, tasks).
- Rédiger scénario utilisateur complet.
- Créer checklist mobile.

## **7.2 Tests backend**

- Tests unitaires : auth, calculateScore, createTask.
- Tests intégration sur routes principales.
- Vérifier erreurs 400/401/403.

## **7.3 E2E**

- Scénario : account → join home → create task → complete → leaderboard.
- Vérifier progression.
- Documenter résultats.

---

# **8. Gestion de Projet**

## **8.1 Roadmap**

- Répartir MVP sur 2–3 sprints.
- Fixer jalons (MVP → Stabilisation → Démo).
- Ajouter buffer tasks.

## **8.2 Organisation**

- Créer Trello/Notion.
- Importer WBS détaillé.
- Définir règles internes de PR/review.

## **8.3 Suivi**

- Réunion hebdo.
- Mise à jour backlog.
- Ajustements.

## **8.4 Documentation**

- Rédiger README global.
- Ajouter guide installations.
- Ajouter doc architecture.
- Préparer manuel utilisateur.

---

# **9. Livrables**

## **9.1 Démo**

- Préparer données propres.
- Tester scénario complet.
- Vérifier animations.

## **9.2 Présentation**

- Écrire storytelling.
- Intégrer captures.
- Répéter la démo.

## **9.3 Poster**

- Créer visuels.
- Ajouter QR code.

## **9.4 Landing Page**

- Rédiger contenu.
- Ajouter screenshots.
- Publier.

---
