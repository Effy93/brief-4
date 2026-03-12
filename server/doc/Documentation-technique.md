Ce projet est une application **full-stack** dont l'objectif est de
**vulgariser des concepts de développement** afin de permettre aux
apprenants de **s'entraîner chaque jour à définir et comprendre des
notions clés du développement web**.

Il s'agit du **brief 4** de notre formation CDA chez simplon.co, réalisé en binôme par
**Eva** et **Alexandre**.

## 🧱 Stack technique

-   Frontend : React (Vite)
-   Backend : Express
-   Langage : TypeScript
-   Base de données : MySQL
-   Monorepo : npm workspaces
-   Tests : Jest
-   Lint / format : Biome

## 📁 Structure du projet

. ├─ client/ ├─ server/ ├─ package.json

## Architecture du backend
```
server
└─ src
   ├─ controllers
   │  ├─ authController.ts
   │  ├─ articleController.ts
   │  ├─ categoryController.ts
   │  └─ userController.ts
   │
   ├─ database
   │  ├─ ds.sql
   │  └─ db.config.ts
   │
   ├─ middlewares
   │  └─ verifyToken.ts
   │
   ├─ models
   │  ├─ articleRepository.ts
   │  ├─ categoryRepository.ts
   │  └─ userRepository.ts
   │
   ├─ types
   │  ├─ IArticle.ts
   │  ├─ ICategory.ts
   │  └─ IUser.ts
   │
   └─ doc
      ├─ documentation_technique.md
      ├─ MCD.png
      ├─ MLD.png
      ├─ MPD.png
      ├─ routes1.md
      ├─ routes2.md
      └─ D-useCase.drawio.png
      └─ D-Classe.drawio.png
      └─ D-Composant.drawio.png
      └─ D-Sequence.drawio.png
```

## 🎯 Objectif pédagogique

L'application permet de : 
- gérer des concepts côté serveur (CRUD), 
- filtrer et afficher ces concepts côté client.

## ⚙️ Prérequis

-   Node.js v25.4
-   MySQL installé localement
-   Visual Studio Code avec le plugin Biome

## 🚀 Installation

1.  Installer le plugin Biome dans VSCode.
2.  Cloner le dépôt.
3.  Installer les dépendances : `npm install` et `npm install react-icons`
4.  Créer les fichiers server/.env et client/.env depuis les
    .env.sample ⚠️ ne pas les supprimer.

## 🗄️ Base de données MySQL

Créer la base de données localement puis configurer le fichier
server/.env.

Variables attendues : voir le .env.sample

Puis lancer : `npm run db:migrate`

## ▶️ Lancer le projet

`npm run dev`

Backend : http://localhost:3310 Frontend : port par défaut de Vite (3000)

## 📜 Commandes principales

`npm install` 
`npm run db:migrate` 
`npm run dev`
`npm run check`
`npm run test`

## 🧪 Tests

Jest

## 🧩 Fonctionnalités

Authentification utilisateur
Hashage des mots de passe
Génération de JWT
Routes protégées
CRUD de concepts côté API
Consommation de l'API côté React (manque panneau ADMIN et formulaire d'inscription qui est reservé aux admin)
Filtrage et affichage des concepts

## 🔐 Authentification


L'application inclut une authentification côté serveur pour les administrateurs :
Hashage des mots de passe avec bcrypt pour sécuriser les mots de passe stockés dans la base.
JSON Web Token (JWT) généré à la connexion (login) et envoyé dans un cookie HTTP.
Routes protégées : certaines routes (ex : /me) ne sont accessibles que si le token JWT est valide.
Testable via Postman uniquement, car le front admin n’est pas encore implémenté.

⚠️ Le registre des utilisateurs (register) et le panneau admin côté front seront ajoutés ultérieurement.
En cours de développement sur le projet : https://github.com/Effy93/AstraLumen

## 📦 Production

Aucune (usage local uniquement).
