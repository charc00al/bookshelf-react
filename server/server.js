import express from "express";
import cors from "cors";
import books from "./books.json" with {type: "json"};

const app = express();
const port = 3000

app.use(cors({
    origin: ["http://localhost:5173"]}));
app.use(express.json());

app.get("/api/books", (req, res) => {
    res.json(books);
});

app.get("/api/books/:id", (req, res) => {
    const book = books.find(b => b.id == req.params.id);
    if (!book) return res.status(404).json({message: "Book not found"})
    res.json(book);
})

app.post("/api/books", (req, res) => {
    const { title, author } = req.body;
    const newBook = { id: Date.now(), title, author };
    books.push(newBook);
    res.json(newBook);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
})