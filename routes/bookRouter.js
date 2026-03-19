import { Router } from "express";

const bookRouter = Router();

bookRouter.get("/", (req, res) => {
    res.send("Acessando books")
});

bookRouter.get("/:id", (req, res) => {
    res.send(`Acessando livro de ID ${req.params.id}`)
});

export default bookRouter;