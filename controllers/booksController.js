const booksController = (req, res) => {
    res.send("Acessando books");
};

const bookByIdController = (req, res) => {
    res.send(`Acessando livro de ID ${req.params.id}`)
}

export {booksController, bookByIdController};