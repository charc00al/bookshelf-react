import Header from "../components/Homepage/Header";
import Bookshelf from "../components/Bookshelf/Bookshelf";
import NewBookSearch from "../components/Homepage/NewBookSearch";
import Sidebar from "../components/Homepage/Sidebar";

import { useNavigate } from "react-router-dom";

function Home({books}) {
  const navigate = useNavigate();

  function handleBookClick(id) {
    navigate(`/book-detail/${id}`); // template literal
  }

  // console.log(props.books);

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
          <Bookshelf onClick={handleBookClick} books={books}/>
        </div>
      </main>
    </div>
  );
}

export default Home;
