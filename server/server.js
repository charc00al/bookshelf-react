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
        res.status(500).json({error: "Database error"});
    }
})

app.post("/api/books", async (req, res) => {
    console.log(req.body)
    res.send("ok")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
})