import { Router } from "express";
import { booksController, bookByIdController } from "../controllers/booksController.js";

const bookRouter = Router();

bookRouter.get("/", booksController);

bookRouter.get("/:id", bookByIdController);

export default bookRouter;