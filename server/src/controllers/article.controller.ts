import type { NextFunction, Request, RequestHandler, Response } from "express";
import articleRepository from "../models/article.repository";

/**
 * Browse all articles
 *
 * @returns {Promise<void>} A promise that resolves or rejects with an error
 */
const browse: RequestHandler = async (req, res, next) => {
  try {
    const articles = await articleRepository.readAll();
    res.json(articles);
  } catch (err) {
    next(err);
  }
};
/**
 * Read a random article
 *
 * @returns {Promise<void>} A promise that resolves or rejects with an error
 */
const readOne: RequestHandler = async (req, res, next) => {
  try {
    const article = await articleRepository.readRandomOne();
    res.json(article);
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const newArticle = req.body;
    const insertId = await articleRepository.create(newArticle);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const modify: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    const idtoNumber = Number(id);
    const article = req.body;
    const modify = await articleRepository.update(idtoNumber, article);
    res.status(200).json({ modify });
  } catch (err) {
    next(err);
  }
};
const remove: RequestHandler = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (!id) {
      res.status(400).json({ message: "Id not found" });
    }
    const deleted = await articleRepository.remove(id);
    if (!deleted) {
      res.status(404).json({ message: "Article not found" });
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default { browse, readOne, remove, add, modify };
