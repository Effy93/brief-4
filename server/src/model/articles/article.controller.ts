import type { NextFunction, Request, Response } from "express";
import articleRepository from "./article.repository";


class ArticleController {
    async browse(req: Request, res: Response, next: NextFunction) {
        try {
        const articles = await articleRepository.readAll();
        res.json(articles);
        } catch(error) {
            next(error);
        }
    };

    // Read One
    async readOne(req: Request, res: Response, next: NextFunction) {
        try {
            const article = await articleRepository.readRandomOne();
            res.json(article);
        } catch(error) {
            next(error);
        }
    }
    // Create article

  async add(req: Request, res: Response, next: NextFunction) {
    try {
      const newArticle = req.body
      const insertId =  await articleRepository.create(newArticle);
      res.status(201).json({insertId});
      
    } catch(error) {
      next(error);
    }
  }
    // Update article (patch)
    // Delete article
}

export default new ArticleController();