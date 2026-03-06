// import bcrypt from "bcrypt";
// import dotenv from "dotenv";
// import type { RequestHandler } from "express";
// import jwt from "jsonwebtoken";

// import userRepository from "../modules/users/userRepository";

// dotenv.config();

// const login: RequestHandler = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ message: "Identifiant requis" });
//     }

//     const users = await userRepository.readByEmail(email);
//     const user = users[0];

//     if (!user) {
//       return res.status(401).json({ message: "Credentials non valides" });
//     }

//     const isValidPassword = await bcrypt.compare(password, user.password);

//     if (!isValidPassword) {
//       return res.status(401).json({ message: "Credentials non valides" });
//     }

//     const token = jwt.sign(
//       { user_id: user.id, user_email: user.email, role: "user" },
//       process.env.SECRET_KEY || "defaultsecret123!",
//       { expiresIn: "30d" },
//     );

//     // Cookie optionnel si tu veux stocker côté client
//     res.cookie("access_token", token, {
//       httpOnly: true,
//       expires: new Date(Date.now() + 8 * 3600000), // 8h
//     });

//     return res.status(200).json({ message: "Connexion réussie", token });
//   } catch (err) {
//     console.error(err);
//     next(err);
//   }
// };

// export default { login };
