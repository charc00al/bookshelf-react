import express from "express";
import cors from "cors";

const app = express();
const port = 3000
const corsOptions = {
    origin: ["http://localhost:5173"]
}

app.use(cors(corsOptions))

app.get("/", (req, res) => {
    res.json({fruits: ["a", "b"]})
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
})