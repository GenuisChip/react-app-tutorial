// create stateless functional component
// const NavBar = (props) => {} // you can destructure props

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-ligh bg-ligh">
      <a className="navbar-brand" href="#">
        Navbar <span className="badge bg-secondary">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
