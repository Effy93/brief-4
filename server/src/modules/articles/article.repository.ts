import databaseClient from "../../database/db.config";
import type { Result, Rows } from "../../database/db.config";
import type { Category } from "../categories/ICategory";
import type { Article } from "./IArticle";
import { ArticleEntity } from "./IArticle";

class ArticleRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT article.*, category.label AS category_label, category.id AS category_id FROM article LEFT JOIN article_category ON article.id = article_category.article_id LEFT JOIN category ON article_category.category_id = category.id",
    );
    const articlesMap: { [key: number]: Article } = {};

    for (const row of rows) {
      const articleId = row.id;

      if (!articlesMap[articleId]) {
        articlesMap[articleId] = {
          id: row.id,
          notion: row.notion,
          content: row.content,
          categories: [],
        };
      }

      if (row.category_id) {
        articlesMap[articleId].categories?.push({
          id: row.category_id,
          label: row.category_label,
        });
      }
    }
    return Object.values(articlesMap);
  }
  async readRandomOne() {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM article ORDER BY RAND() LIMIT 1",
    );
    return rows[0] as Article;
  }
  async create(article: Omit<Article, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT into article (notion, content) VALUES (?, ?)",
      [article.notion, article.content],
    );
    const insertId = result.insertId;

    // 2. Si on a des catégories, on crée les liens dans la table pivot
    if (article.categories && article.categories.length > 0) {
      // On prépare une insertion multiple : INSERT INTO ... VALUES (id, cat1), (id, cat2)...
      const insertPromises = article.categories.map((category) => {
        return databaseClient.query(
          "INSERT INTO article_category (article_id, category_id) VALUES (?, ?)",
          [insertId, category.id],
        );
      });

      await Promise.all(insertPromises); // On attend que toutes les liaisons soient créées
    }

    return insertId; // On renvoie l'ID du nouvel article
  }

  async update(id: number, article: Article) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE article SET notion = ?, content = ? WHERE id =?",
      [article.notion, article.content, id],
    );
    return result.affectedRows > 0;
  }

  async remove(id: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM article WHERE id= ?",
      [id],
    );
    return result.affectedRows > 0;
  }
}

export default new ArticleRepository();
