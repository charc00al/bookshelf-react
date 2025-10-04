import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import FindNewBook from "./pages/FindNewBook";
import AddNewBook from "./pages/AddNewBook";
import BookDetail from "./pages/BookDetail";

// App
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-new-book" element={<FindNewBook />} />
        <Route path="/add-new-book" element={<AddNewBook />} />
        <Route path="/book-detail" element={<BookDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
