import type { NextFunction, Request, Response } from "express";

import categoryRepository from "./category.repository";
import articleRepository from "../articles/article.repository";

class CategoryController {
  async browse(req: Request, res: Response, next: NextFunction) {
    try {
      const categories = await categoryRepository.readAll();
      res.json(categories);
    } catch (error) {
      next(error);
    }
  }

}

export default new CategoryController();
