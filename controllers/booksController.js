import { getAllBooks, getBookById } from "../db.js";
import NotFoundError from "../errors/notFoundError.js";

const booksController = async (req, res, next) => {
    try{
        const books = await getAllBooks();

        res.json(books);
    } catch (error) {
        next(error)
    }
};

const bookByIdController = async (req, res, next) => {
    try{
        const book = await getBookById(req.params.id);

        if (!book) {
            throw new NotFoundError('Book not found with the provided ID');
        }

        res.json(book);

    } catch (error) {
        next(error);
    }
}

export {booksController, bookByIdController};