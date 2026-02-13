import type { NextFunction, Request, Response } from "express";
import articleRepository from "./article.repository";

class ArticleController {
  async browse(req: Request, res: Response, next: NextFunction) {
    try {
      const articles = await articleRepository.readAll();
      res.json(articles);
    } catch (error) {
      next(error);
    }
  }

  // Read One
  async readOne(req: Request, res: Response, next: NextFunction) {
    try {
      const article = await articleRepository.readRandomOne();
      res.json(article);
    } catch (error) {
      next(error);
    }
  }

  // Create article
  async add(req: Request, res: Response, next: NextFunction) {
    try {
      const newArticle = req.body;
      const insertId = await articleRepository.create(newArticle);
      res.status(201).json({ insertId });
    } catch (error) {
      next(error);
    }
  }

  // Update article (patch)
  // async update(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const id = Number(req.params.id);

  //   } catch(error) {
  //     next(error)
  //   }
  // }

  // Delete article
  async delete(req: Request, res: Response, next: NextFunction) {
    try{
        const id = Number(req.params.id);
        if(!id) {
            return res.status(400).json({ message: "Id not found"})
        }
        const deleted = await articleRepository.remove(id)
        if(!deleted) {
            return res.status(404).json({ message: "Article not found"})
        }
        return res.sendStatus(204);
    } catch (error) { next(error) }
  }
}


export default new ArticleController();
