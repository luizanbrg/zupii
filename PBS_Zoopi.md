# PBS – Zoopi (Product Breakdown Structure)

## 1. Produit Global – Application Zoopi

### 1.1 Application Mobile – Frontend (Expo / React Native)

#### 1.1.1 Navigation & Structure d’écrans

- 1.1.1.1 Stack d’onboarding
  - 1.1.1.1.1 Écran Start (choix Créer / Rejoindre / Connexion directe)
  - 1.1.1.1.2 Écran Register (création de compte)
  - 1.1.1.1.3 Écran Login (connexion)
  - 1.1.1.1.4 Écran CreateHousing (création du foyer et choix des pièces)
  - 1.1.1.1.5 Écran JoinHousing (saisie du code d’invitation)
  - 1.1.1.1.6 Écran HousingInvitation (affichage du code d’invitation créé)
  - 1.1.1.1.7 Écran ExistingUserPrompt (gestion d’utilisateur avec foyer existant)
- 1.1.1.2 Navigation principale (TabNavigator)
  - 1.1.1.2.1 HomeScreen (vue globale du foyer)
  - 1.1.1.2.2 Rooms / Tasks (liste des pièces et tâches associées)
  - 1.1.1.2.3 LeaderboardScreen (classement des membres)
  - 1.1.1.2.4 Profil / Paramètres utilisateur

#### 1.1.2 Contextes & State Management

- 1.1.2.1 `AuthContext`
  - 1.1.2.1.1 Gestion du token JWT et refreshToken
  - 1.1.2.1.2 Gestion de l’utilisateur courant (id, username, mail, homeId)
  - 1.1.2.1.3 Persistance SecureStore (authData, email, password)
  - 1.1.2.1.4 Indicateur `shouldShowHome` (redirection automatique vers Home)
- 1.1.2.2 `OnboardingContext`
  - 1.1.2.2.1 Données de création de foyer (nom, pièces sélectionnées)
  - 1.1.2.2.2 Données utilisateur pour l’inscription (username, mail, password)
  - 1.1.2.2.3 Mode (create / join / directLogin)

#### 1.1.3 Composants UI

- 1.1.3.1 Layouts
  - 1.1.3.1.1 `OnboardingLayout` (header, messages, back button)
- 1.1.3.2 Formulaires
  - 1.1.3.2.1 `LoginForm` (email + mot de passe)
  - 1.1.3.2.2 `RegisterForm` (username, email, mot de passe)
  - 1.1.3.2.3 `CreateHousingForm` (nom du foyer, sélection des pièces)
- 1.1.3.3 Boutons & Inputs
  - 1.1.3.3.1 `CustomButton` (variants startScreen, confirmation, etc.)
  - 1.1.3.3.2 `CopyField` (affichage / copie d’un code d’invitation)
- 1.1.3.4 Écrans de chargement
  - 1.1.3.4.1 Écran "Finalisation de votre inscription" (join avec invitation)
  - 1.1.3.4.2 États de loading pour fetch rooms / tasks / leaderboard

#### 1.1.4 Thème & Accessibilité

- 1.1.4.1 `ThemeContext`
  - 1.1.4.1.1 Palette de couleurs (fond, texte, boutons)
  - 1.1.4.1.2 Typographie (titres, textes, boutons)
- 1.1.4.2 Safe Areas & Responsive
  - 1.1.4.2.1 Hook `useSafeArea`
  - 1.1.4.2.2 Gestion iOS / Android (keyboard avoiding, status bar)

#### 1.1.5 Services Frontend (API client)

- 1.1.5.1 Authentification – `authService`
  - 1.1.5.1.1 Login (POST `/auth/login`)
  - 1.1.5.1.2 Register (POST `/auth/register`)
  - 1.1.5.1.3 Refresh token (POST `/auth/refresh`)
  - 1.1.5.1.4 Logout (POST `/auth/logout`)
  - 1.1.5.1.5 Check auth (GET `/auth/check`)
- 1.1.5.2 Utilisateurs – `usersService`
  - 1.1.5.2.1 Récupération des membres d’un foyer
  - 1.1.5.2.2 Gestion des points (total / weekly)
  - 1.1.5.2.3 Mise à jour du profil
- 1.1.5.3 Foyer & Pièces – `homeService` / `homeRoomsService`
  - 1.1.5.3.1 Création de foyer (POST `/homes`)
  - 1.1.5.3.2 Association des pièces au foyer
  - 1.1.5.3.3 Acceptation d’une invitation (POST `/homes/invite`)
  - 1.1.5.3.4 Chargement complet des données de foyer (rooms, tasks, leaderboard)
- 1.1.5.4 Tâches – `taskUserService` & services associés
  - 1.1.5.4.1 Compléter / annuler une tâche
  - 1.1.5.4.2 Statut de cooldown
  - 1.1.5.4.3 Historique local par utilisateur (front)
- 1.1.5.5 Config & Constantes
  - 1.1.5.5.1 `constants.ts` (BASE_URL de l’API)
  - 1.1.5.5.2 Gestion des variables d’environnement avec `react-native-config`

---

## 2. Backend – API REST Node.js / Express

### 2.1 Architecture Générale

- 2.1.1 `src/index.ts` – Entrée serveur Express
- 2.1.2 Séparation par couches
  - 2.1.2.1 Routes (REST, Swagger)
  - 2.1.2.2 Controllers (validation & orchestration)
  - 2.1.2.3 Services (logique métier)
  - 2.1.2.4 Schemas (Drizzle ORM)
  - 2.1.2.5 Jobs (cron – reset hebdo des points)
  - 2.1.2.6 Middleware (auth, cooldown, etc.)

### 2.2 Modules Fonctionnels Backend

#### 2.2.1 Module Authentification

- 2.2.1.1 Routes `/auth`
  - 2.2.1.1.1 POST `/auth/register`
  - 2.2.1.1.2 POST `/auth/login`
  - 2.2.1.1.3 POST `/auth/refresh`
  - 2.2.1.1.4 POST `/auth/logout`
  - 2.2.1.1.5 GET `/auth/check`
- 2.2.1.2 Service `auth.service.ts`
  - 2.2.1.2.1 Hash mot de passe (bcrypt)
  - 2.2.1.2.2 Génération / validation JWT
  - 2.2.1.2.3 Verification du rôle (adulte / enfant futur)
- 2.2.1.3 Middleware `verifyToken`
  - 2.2.1.3.1 Décodage JWT
  - 2.2.1.3.2 Injection de `userId` dans `req.user`

#### 2.2.2 Module Foyer (Home)

- 2.2.2.1 Routes `/homes`
  - 2.2.2.1.1 POST `/homes` – Créer un foyer
  - 2.2.2.1.2 GET `/homes/:id` – Détails d’un foyer
  - 2.2.2.1.3 POST `/homes/invite` – Accepter une invitation
  - 2.2.2.1.4 POST `/homes/leave` – Quitter un foyer
- 2.2.2.2 Service `home.service.ts`
  - 2.2.2.2.1 Création de foyer + génération de `invite_token`
  - 2.2.2.2.2 Inviter un utilisateur via `inviteToken`
  - 2.2.2.2.3 Affectation de `home_id` à l’utilisateur

#### 2.2.3 Module Pièces (Rooms)

- 2.2.3.1 Routes `/rooms` et `/homeRooms`
  - 2.2.3.1.1 Liste des pièces disponibles globalement
  - 2.2.3.1.2 Association/dissociation d’une pièce à un foyer (`home_room`)
- 2.2.3.2 Services `room.service.ts`, `home_room.service.ts`
  - 2.2.3.2.1 Gestion du catalogue de pièces (nom, icône)
  - 2.2.3.2.2 Gestion de l’état `finished` d’une pièce

#### 2.2.4 Module Tâches

- 2.2.4.1 Routes `/tasks`, `/homeTasks`, `/roomTasks`, `/taskUser`
  - 2.2.4.1.1 Tâches globales (catalogue)
  - 2.2.4.1.2 Association tâches ↔ foyer (`home_task`)
  - 2.2.4.1.3 Association tâches ↔ pièces (`room_task`)
  - 2.2.4.1.4 Exécution de tâche par utilisateur (`task_user`)
- 2.2.4.2 Services `task.service.ts`, `home_task.service.ts`, `room_task.service.ts`, `task_user.service.ts`
  - 2.2.4.2.1 Création / édition / désactivation de tâches
  - 2.2.4.2.2 Gestion du cooldown par tâche
  - 2.2.4.2.3 Historique d’exécution (timestamps, dernier passage)

#### 2.2.5 Module Utilisateurs & Leaderboard

- 2.2.5.1 Routes `/users`
  - 2.2.5.1.1 GET `/users/home/:homeId` – membres d’un foyer
  - 2.2.5.1.2 GET `/users/:id/points` – points détaillés utilisateur
  - 2.2.5.1.3 PATCH `/users/:id` – mise à jour profil
- 2.2.5.2 Route `/leaderboard`
  - 2.2.5.2.1 Classement hebdomadaire par foyer
- 2.2.5.3 Jobs `resetWeeklyPoints.ts`
  - 2.2.5.3.1 Consolidation des points hebdo → totalPoints
  - 2.2.5.3.2 Remise à zéro de `weekly_points` tous les dimanches

#### 2.2.6 Middleware & Utilitaires

- 2.2.6.1 `cooldown.middleware.ts`
  - 2.2.6.1.1 Protection contre le spam de complétion de tâches
- 2.2.6.2 Gestion des erreurs & logs
  - 2.2.6.2.1 Logs structurés pour les endpoints critiques (auth, invite)

---

## 3. Base de Données – PostgreSQL

### 3.1 Schéma principal (MVP Zoopi)

#### 3.1.1 Table `user`

- Id: `id` (bigserial, PK)
- Identité:
  - `mail` (varchar, unique)
  - `password` (hashé)
  - `username` (varchar)
- Rôle & foyer:
  - `role_id` (FK → `role.id`)
  - `home_id` (FK → `home.id`)
- Scores:
  - `total_points` (int)
  - `weekly_points` (int)
- Métadonnées:
  - `created_at`, `updated_at`

#### 3.1.2 Table `role`

- `id` (bigserial, PK)
- `label` (varchar) – ex: `ADULT`, `CHILD` (en V2)

#### 3.1.3 Table `home`

- `id` (bigserial, PK)
- `name` (varchar)
- `invite_token` (varchar)
- `created_at` (timestamp)

#### 3.1.4 Table `room`

- `id` (bigserial, PK)
- `name` (varchar)
- `icon_path` (varchar)

#### 3.1.5 Table `home_room`

- `id` (bigserial, PK)
- `home_id` (FK → `home.id`)
- `room_id` (FK → `room.id`)
- `finished` (bool) – état de complétion de la pièce

#### 3.1.6 Table `task`

- `id` (bigserial, PK)
- `name` (varchar)
- `points` (bigint)
- `cooldown` (double precision, en heures / secondes)

#### 3.1.7 Table `home_task`

- `id` (bigserial, PK)
- `home_id` (FK → `home.id`)
- `task_id` (FK → `task.id`)
- `is_disabled_on_home` (bool) – tâche désactivée pour ce foyer

#### 3.1.8 Table `room_task`

- `id` (bigserial, PK)
- `task_id` (FK → `task.id`)
- `room_id` (FK → `room.id`)

#### 3.1.9 Table `task_user`

- `id` (bigserial, PK)
- `user_id` (FK → `user.id`)
- `task_id` (FK → `task.id`)
- `user_has_done` (bool)
- `last_done_at` (timestamp)
- `created_at` (timestamp)

---

## 4. Infrastructure & DevOps

### 4.1 Conteneurisation & Orchestration

- 4.1.1 `docker-compose.yml`
  - 4.1.1.1 Service `postgres`
  - 4.1.1.2 Service `redis`
  - 4.1.1.3 Service `backend`
  - 4.1.1.4 Service `frontend` (Expo dans Docker, optionnel)

### 4.2 Scripts & Migrations

- 4.2.1 Drizzle migrations (`migrations/0000_first_virginia_dare.sql`)
- 4.2.2 Scripts NPM backend
  - 4.2.2.1 `db:migrate`
  - 4.2.2.2 `db:seed`
  - 4.2.2.3 `db:testReset-seed`
  - 4.2.2.4 `dev` (démarrage serveur)

---

## 5. Évolutions Futures (Roadmap hors MVP)

- 5.1 Rôle Enfant (permissions limitées)
- 5.2 Notifications & Rappels
  - 5.2.1 Rappels de tâches (push / in-app)
  - 5.2.2 Table `reminder` (à ajouter en V2)
- 5.3 Tournois entre foyers
- 5.4 Module Premium (plus de pièces, custom points, pubs off)

---
