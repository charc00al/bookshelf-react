import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState, useEffect} from "react";
import Home from "./pages/home";
import FindNewBook from "./pages/FindNewBook";
import AddNewBook from "./pages/AddNewBook";
import BookDetail from "./pages/BookDetail";
import axios from "axios";

// App
function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("/api/books")
      .then((res) => {
        setBooks(res.data);
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home books={books}/>} />
        <Route path="/find-new-book" element={<FindNewBook />} />
        <Route path="/add-new-book" element={<AddNewBook />} />
        <Route path="/book-detail/:id" element={<BookDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
