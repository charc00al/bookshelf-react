import Header from "../components/Homepage/Header";
import Bookshelf from "../components/Bookshelf/Bookshelf";
import NewBookSearch from "../components/Homepage/NewBookSearch";
import Sidebar from "../components/Homepage/Sidebar";

function Home() {
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
          <Bookshelf />
        </div>
      </main>
    </div>
  );
}

export default Home;
