import { Outlet } from "react-router-dom";
import Menu from "./Menu";

function Header() {
  return (
    <div>
      <h2>Rick And Morty API</h2>
      <Menu />
      <Outlet />
    </div>
  );
}

export default Header;
