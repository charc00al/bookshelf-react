import express from "express";
import cors from "cors";
import pg from "pg";

const app = express();
const port = 3000

app.use(cors({
    origin: ["http://localhost:5173"]}));
app.use(express.json());

const pool = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "bookshelf",
  password: "gandalf",
  port: 5432,
});

app.get("/api/books", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM books");
        res.json(result.rows)
    } catch (error) {
        console.error(err);
        res.status(500).json({error: "Database error"})
    }
});

app.get("/api/books/:id", async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const result = await pool.query("SELECT * FROM books WHERE id = $1", [id]);
        if (result.rows.length === 0) return res.status(404).json({error: "Book not found"});
        res.json(result.rows[0]);

    } catch (error) {
        console.error(err);
        res.status(500).json({error: "Database loading error"});
    }
})

app.post("/api/books", async (req, res) => {
    const b = req.body
    console.log(b)
    try {
        const result = await pool.query("INSERT INTO books (title, author, isbn, reason, status, stars, tags, cover_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)", [b.title, b.author, b.isbn, b.reason, b.status, b.stars, b.tags, b.bookCover])
        res.send("ok")
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Database upload error"})
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
})