import express from "express";
import articleController from "./modules/articles/article.controller";
import categoryController from "./modules/categories/category.controller";
import userController from "./modules/users/user.controller";
import authController from "./auth/authController";
const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
// CATEGORIES
router.get("/api/categories", categoryController.browse);
router.post("/api/categories", categoryController.add);
router.delete("/api/categories/:id", categoryController.remove);

// ARTICLES
router.get("articles", articleController.browse);
router.get("/api/randomArticle", articleController.readOne);
router.post("/api/articles", articleController.add);
router.patch("/api/articles/:id", articleController.modify);
router.delete("/api/articles/:id", articleController.remove);

// USERS
router.get("/api/users", userController.browse);
router.post("/api/users", userController.add);

// LOGIN
router.post("/api/login", authController.login);

// router.post('/login', authController.login);
// router.get('/me', verifyToken, userController.getOneUser)

// Define item-related routes
// import itemActions from "./modules/item/itemActions";

// router.get("/api/items", itemActions.browse);
// router.get("/api/items/:id", itemActions.read);
// router.post("/api/items", itemActions.add);

/* ************************************************************************* */

export default router;
