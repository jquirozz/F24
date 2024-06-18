import { NavLink } from "react-router-dom";

import "./NavBar.scss";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/standings">Standings</NavLink>
      <NavLink to="/history">History</NavLink>
      <NavLink to="/settings">Settings</NavLink>
    </nav>
  );
}

export default NavBar;
