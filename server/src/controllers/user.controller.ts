import bcrypt from "bcrypt";
import type { RequestHandler } from "express";
import type { NextFunction, Request, Response } from "express";

import userRepository from "../models/userRepository";
import type { IUser } from "../types/IUser";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const users = await userRepository.readAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

const add = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({ message: "Missing fields" });
      return;
    }

    // vérifier email déjà utilisé
    const users = await userRepository.readByEmail(email);
    const user = users[0];

    if (user) {
      res.status(409).json({ message: "Email already used" });
      return;
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser: Omit<IUser, "id"> = {
      name,
      email,
      password: hashedPassword,
    };

    const insertId = await userRepository.create(newUser);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

export default { browse, add };
