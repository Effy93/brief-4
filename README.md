# 📘 Projet -- Popularize

Ce projet est une application **full-stack** dont l'objectif est de
**vulgariser des concepts de développement** afin de permettre aux
apprenants de **s'entraîner chaque jour à définir et comprendre des
notions clés du développement web**.

Il s'agit du **brief 4** de notre formation, réalisé en groupe avec
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

## 🎯 Objectif pédagogique

L'application permet de : - gérer des concepts côté serveur (CRUD), -
filtrer et afficher ces concepts côté client.

## ⚙️ Prérequis

-   Node.js v25.4
-   MySQL installé localement
-   Visual Studio Code avec le plugin Biome

## 🚀 Installation

1.  Installer le plugin Biome dans VSCode.
2.  Cloner le dépôt.
3.  Installer les dépendances : npm install
4.  Créer les fichiers server/.env et client/.env depuis les
    .env.sample.

## 🗄️ Base de données MySQL

Créer la base de données localement puis configurer le fichier
server/.env.

Variables attendues :

```JS
APP_PORT, 
APP_SECRET, 
DB_HOST, 
DB_PORT, 
DB_USER, 
DB_PASSWORD, 
DB_NAME,
CLIENT_URL, 
PROJECT_NAME_SPECIFIC_NAME
```

Puis lancer : `npm run db:migrate`

## ▶️ Lancer le projet

npm run dev

Backend : http://localhost:3310 Frontend : port par défaut de Vite

## 📜 Commandes principales

`npm install` 
`npm run db:migrate` 
`npm run dev`
`npm run check`
`npm run test`

## 🧪 Tests

Jest

## 🧩 Fonctionnalités

CRUD côté serveur, filtres et affichage côté client.

## 🔐 Authentification

Aucune.

## 📦 Production

Aucune (usage local uniquement).

## 👥 Auteurs

Eva Alexandre
