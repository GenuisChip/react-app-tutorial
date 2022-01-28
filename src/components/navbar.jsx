// create stateless functional component
// const NavBar = (props) => {} // you can destructure props

import { Link, Outlet } from "react-router-dom";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-ligh bg-ligh">
      <a className="navbar-brand" href="#">
        Navbar <span className="badge bg-secondary">{totalCounters}</span>
      </a>

      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </nav>
  );
};

export default NavBar;
