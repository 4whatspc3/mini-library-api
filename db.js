const arrBooks = [
  { "id": 1, "title": "Frankenstein", "author": "Mary Shelley" },
  { "id": 2, "title": "O Sol é para Todos", "author": "Harper Lee" },
  { "id": 3, "title": "O Hobbit", "author": "J.R.R. Tolkien" },
  { "id": 4, "title": "O Morro dos Ventos Uivantes", "author": "Emily Brontë" },
  { "id": 5, "title": "Neuromancer", "author": "William Gibson" },
  { "id": 6, "title": "1984", "author": "George Orwell" },
  { "id": 7, "title": "Admirável Mundo Novo", "author": "Aldous Huxley" },
  { "id": 8, "title": "O Grande Gatsby", "author": "F. Scott Fitzgerald" },
  { "id": 9, "title": "Moby Dick", "author": "Herman Melville" },
  { "id": 10, "title": "Orgulho e Preconceito", "author": "Jane Austen" },
  { "id": 11, "title": "O Apanhador no Campo de Centeio", "author": "J.D. Salinger" },
  { "id": 12, "title": "Crime e Castigo", "author": "Fiódor Dostoiévski" },
  { "id": 13, "title": "O Alquimista", "author": "Paulo Coelho" },
  { "id": 14, "title": "Duna", "author": "Frank Herbert" },
  { "id": 15, "title": "Fundação", "author": "Isaac Asimov" }
];

const getAllBooks = async () => {
    return arrBooks;
}

const getBookById = async (id) => {
    const book = arrBooks.find((el) => el.id === Number(id));

    return book;
}

export {getAllBooks, getBookById};