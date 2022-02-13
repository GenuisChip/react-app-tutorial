// create stateless functional component
// const NavBar = (props) => {} // you can destructure props

import { Link, NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar <span className="badge bg-secondary">{counter}</span>
      </a>

      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/Registration">Registration</NavLink>
    </nav>
  );
};

export default NavBar;
