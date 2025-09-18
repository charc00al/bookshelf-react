import Header from "../components/Header";
import Bookshelf from "../components/Bookshelf";
import NewBookSearch from "../components/NewBookSearch";
import Sidebar from "../components/Sidebar";

function FindNewBook() {
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
          <Bookshelf />
        </div>
      </main>
    </div>
  );
}

export default FindNewBook;
