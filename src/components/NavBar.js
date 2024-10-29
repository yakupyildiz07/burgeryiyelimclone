import { NavLink } from "react-router-dom";
import BurgerLogo from "../img/burgerlogo.png"
import "../styles/navbar.css"
function NavBar() {
  return (
    <div className="navbar">
      <div className="main">
<img src={BurgerLogo} alt="" />
<div className="mainlink">
    <NavLink to="/burgeryiyelimclone" >Anasayfa</NavLink>
    <NavLink to="/menu" >Menü</NavLink>
    <NavLink to="/contact" >İletişim</NavLink>
    <NavLink to="/about" >Hakkımızda</NavLink>
</div>
      </div>
    </div>
  );
}
export default NavBar;
