import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/characters">Character List</NavLink>
      </nav>
    </div>
  );
}
