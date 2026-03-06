CREATE DATABASE popularize_dev;
use popularize_dev;

CREATE TABLE category (
  id int primary key auto_increment not null,
  label VARCHAR (255) UNIQUE NOT NULL
);


CREATE TABLE article (
  id INT  PRIMARY KEY AUTO_INCREMENT NOT NULL,
  notion VARCHAR(255) NOT NULL,
  content TEXT NOT NULL
);

CREATE TABLE article_category (
  article_id INT NOT NULL,
  category_id INT NOT NULL,
  PRIMARY KEY (article_id, category_id),
  CONSTRAINT fk_article FOREIGN KEY (article_id) REFERENCES article(id) ON DELETE CASCADE,
  CONSTRAINT fk_category_link FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE CASCADE
);

CREATE TABLE user (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(55) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL
);


INSERT INTO category (label) VALUES 
('Backend'), 
('Frontend'), 
('SGBD'), 
('Architecture'), 
('Sécurité'), 
('JavaScript');

INSERT INTO article (notion, content) VALUES 
('Le SQL', 'Le SQL est le langage qui permet de parler aux bases de données. Imaginez que vous donnez des ordres précis à un archiviste : "Donne-moi tous les livres de cette étagère écrits après 1990". C est un standard universel qui permet de manipuler des milliers d informations de manière structurée et logique.'),
('Le JSON', 'Le JSON est le format d échange de données le plus populaire. C est comme une liste de courses organisée : chaque objet a un nom et une valeur. C est léger, facile à lire pour un humain et encore plus facile à comprendre pour un ordinateur. C est le langage commun entre le frontend et le backend.'),
('Le Hachage (Hashing)', 'Le hachage transforme n importe quelle donnée en une empreinte digitale unique. C est comme passer un ingrédient au mixeur : vous obtenez une purée unique, mais il est impossible de reconstruire l ingrédient d origine à partir de cette purée. C est essentiel pour stocker les mots de passe en toute sécurité.'),
('L Architecture Microservices', 'Au lieu d avoir un énorme château (monolithe) où tout s écroule si une pierre tombe, on construit un village de petites maisons indépendantes. Chaque maison (microservice) a sa propre tâche. Si la boulangerie brûle, le reste du village continue de fonctionner normalement.'),
('L Asynchrone', 'Imaginez un restaurant : le serveur prend votre commande et va la donner en cuisine. Au lieu d attendre devant les fourneaux sans rien faire (synchrone), il retourne voir les autres clients pendant que le plat cuit (asynchrone). Cela permet au site web de rester fluide pendant que les données chargent.');

INSERT INTO article_category (article_id, category_id) VALUES 
-- Le SQL (Article 1) : Backend (1) et SGBD (3)
(1, 1), (1, 3),
-- Le JSON (Article 2) : Backend (1), Frontend (2) et JavaScript (6)
(2, 1), (2, 2), (2, 6),
-- Le Hachage (Article 3) : Backend (1) et Sécurité (5)
(3, 1), (3, 5),
-- Microservices (Article 4) : Backend (1) et Architecture (4)
(4, 1), (4, 4),
-- L Asynchrone (Article 5) : Frontend (2) et JavaScript (6)
(5, 2), (5, 6);

