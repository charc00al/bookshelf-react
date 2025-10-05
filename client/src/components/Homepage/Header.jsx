import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <h1 style={{ margin: 0 }}>bookshelf</h1>
    </Link>
  );
}

export default Header;
