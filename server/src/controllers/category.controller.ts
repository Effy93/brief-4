import type { NextFunction, Request, RequestHandler, Response } from "express";

import articleRepository from "../models/article.repository";
import categoryRepository from "../models/category.repository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const categories = await categoryRepository.readAll();
    res.json(categories);
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const newCategory = req.body;
    const insertId = await categoryRepository.create(newCategory);
    res.status(201).json({ insertId });
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
    const deleted = await categoryRepository.remove(id);
    if (!deleted) {
      res.status(404).json({ message: "Category not found" });
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default { browse, add, remove };
