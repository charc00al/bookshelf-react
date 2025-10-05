import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState, useEffect} from "react";
import Home from "./pages/home";
import FindNewBook from "./pages/FindNewBook";
import AddNewBook from "./pages/AddNewBook";
import BookDetail from "./pages/BookDetail";
import axios from "axios";

// App
function App() {

  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:3000/");
    setArray(response.data.fruits);
    console.log(response.data.fruits);
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-new-book" element={<FindNewBook />} />
        <Route path="/add-new-book" element={<AddNewBook />} />
        <Route path="/book-detail/:id" element={<BookDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
