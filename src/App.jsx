import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import FindNewBook from "./pages/FindNewBook";
import AddNewBook from "./pages/AddNewBook";

// App
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-new-book" element={<FindNewBook />} />
        <Route path="/add-new-book" element={<AddNewBook />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
