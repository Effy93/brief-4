import express from "express";
import articleController from "./model/articles/article.controller";
import categoryController from "./model/categories/category.controller";
const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

router.get("/api/categories", categoryController.browse);
router.get("/api/articles", articleController.browse);
router.get("/api/randomArticle", articleController.readOne);

router.post("/api/articles", (req, res, next) =>
  articleController.add(req, res, next),
);

// router.delete("/api/articles:id", (req, res, next) =>
//     articleController.delete(req, res, next));
// Define item-related routes
// import itemActions from "./modules/item/itemActions";

// router.get("/api/items", itemActions.browse);
// router.get("/api/items/:id", itemActions.read);
// router.post("/api/items", itemActions.add);

/* ************************************************************************* */

export default router;
