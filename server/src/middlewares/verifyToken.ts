// import type { NextFunction, Request, Response } from "express";
// import jwt from "jsonwebtoken";

// export interface AuthRequest extends Request {
//   user?: any;
// }

// export const verifyToken = (
//   req: AuthRequest,
//   res: Response,
//   next: NextFunction,
// ) => {
//   const token =
//     req.headers.authorization?.split(" ")[1] || req.cookies?.access_token;

//   if (!token) {
//     return res.status(401).json({ message: "Token manquant" });
//   }

//   try {
//     const decoded = jwt.verify(
//       token,
//       process.env.SECRET_KEY || "defaultsecret123!",
//     );
//     req.user = decoded;
//     next();
//   } catch (err) {
//     return res.status(403).json({ message: "Token invalide" });
//   }
// };
