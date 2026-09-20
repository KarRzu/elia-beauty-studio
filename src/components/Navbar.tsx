import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="navbar">
        <Link to="/">
          <img src="/src/assets/logo.png" alt="logo" className="logo" />
        </Link>

        <nav className="nav-links">
          <Link to="/o-nas">O nas</Link>

          <Link to="/zabiegi">Zabiegi</Link>

          <Link to="/cennik">Cennik</Link>

          <Link to="/promocje">Promocje</Link>

          <Link to="/blog">Blog</Link>

          <Link to="/kontakt">Kontakt</Link>
        </nav>

        <button className="appointment-button">Umów wizytę</button>
      </header>
    </>
  );
}

export default Navbar;
