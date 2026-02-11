import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import type { Category } from "./category.entity";
import { CategoryEntity } from "./category.entity";

class CategoryRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("select * from category");
    return rows as Category[];
  }
}

export default new CategoryRepository();
