import databaseClient from "../database/db.config";
import type { Result, Rows } from "../database/db.config";
import type { IUser } from "../types/IUser";

class UserRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM user");
    return rows as IUser[];
  }

  async readByEmail(email: string) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM user WHERE email = ?",
      [email],
    );

    return rows as IUser[];
  }

  async create(user: IUser) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO user (name, email, password) VALUES (?,?,?)",
      [user.name, user.email, user.password],
    );

    return result;
  }
}

export default new UserRepository();
