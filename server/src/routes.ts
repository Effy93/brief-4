import express from "express";
import articleController from "./controllers/article.controller";
import authController from "./controllers/authController";
import categoryController from "./controllers/category.controller";
import userController from "./controllers/user.controller";
import { verifyToken } from "./middlewares/verifyToken";
const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
// CATEGORIES
router.get("/api/categories", categoryController.browse);
router.post("/api/categories", categoryController.add);
router.delete("/api/categories/:id", categoryController.remove);

// ARTICLES
router.get("/api/articles", articleController.browse);
router.get("/api/randomArticle", articleController.readOne);
router.post("/api/articles", articleController.add);
router.patch("/api/articles/:id", articleController.modify);
router.delete("/api/articles/:id", articleController.remove);

// USERS
router.get("/api/users", userController.browse);
router.post("/api/users", userController.add);

// LOGIN
router.post("/api/login", authController.login);

// PROFILE
router.get("/api/me", verifyToken, authController.me);

// router.post('/login', authController.login);
// router.get('/me', verifyToken, userController.getOneUser)

// Define item-related routes
// import itemActions from "./modules/item/itemActions";

// router.get("/api/items", itemActions.browse);
// router.get("/api/items/:id", itemActions.read);
// router.post("/api/items", itemActions.add);

/* ************************************************************************* */

export default router;
