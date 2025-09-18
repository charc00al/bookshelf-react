import { BrowserRouter, Routes, Route } from "react-router-dom";

/* // components
import Header from "./components/Header";
import Bookshelf from "./components/Bookshelf";
import NewBookSearch from "./components/NewBookSearch";
import Sidebar from "./components/Sidebar"; */

import Home from "./pages/home";
import FindNewBook from "./pages/FindNewBook";

// App
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-new-book" element={<FindNewBook />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
