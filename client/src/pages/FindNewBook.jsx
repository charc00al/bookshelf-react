import Header from "../components/Homepage/Header";
import Bookshelf from "../components/Bookshelf/Bookshelf";
import NewBookSearch from "../components/Homepage/NewBookSearch";
import Sidebar from "../components/Homepage/Sidebar";
import { useNavigate } from "react-router-dom";

function FindNewBook() {
  const navigate = useNavigate();

  function handleBookClick() {
    navigate("/add-new-book");
  }

  return (
    <div>
      <Header />
      <main>
        <div className="newBookSearch">
          <NewBookSearch />
        </div>
        <div className="sidebar" style={{ visibility: "hidden" }}>
          <Sidebar />
        </div>
        <div className="bookshelf">
          <Bookshelf onClick={() => handleBookClick()} />
        </div>
      </main>
    </div>
  );
}

export default FindNewBook;
