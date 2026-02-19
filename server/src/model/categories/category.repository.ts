import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import type { Category } from "./category.entity";
import { CategoryEntity } from "./category.entity";

class CategoryRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from category");
    return rows as Category[];
  }
  async create(category: Omit<Category, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO category(label) VALUES (?)",
      [category.label],
    );
    const insertId = result.insertId;

    return insertId;
  }

  async remove(id: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM category WHERE id=?",
      [id],
    );
    return result.affectedRows > 0;
  }
}

export default new CategoryRepository();
