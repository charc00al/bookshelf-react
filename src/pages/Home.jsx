import Header from "../components/Homepage/Header";
import Bookshelf from "../components/Bookshelf/Bookshelf";
import NewBookSearch from "../components/Homepage/NewBookSearch";
import Sidebar from "../components/Homepage/Sidebar";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleBookClick() {
    navigate("/book-detail");
  }

  return (
    <div>
      <Header />
      <main>
        <div className="newBookSearch">
          <NewBookSearch />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="bookshelf">
          <Bookshelf onClick={() => handleBookClick()} />
        </div>
      </main>
    </div>
  );
}

export default Home;
