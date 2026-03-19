import { getAllBooks, getBookById } from "../db.js";

const booksController = async (req, res) => {
    const books = await getAllBooks();

    res.json(books);
};

const bookByIdController = async (req, res) => {
    const book = await getBookById(req.params.id);

    if (!book) {
        return res.status(404).send('Livro não encontrado');
    }

    res.json(book);
}

export {booksController, bookByIdController};