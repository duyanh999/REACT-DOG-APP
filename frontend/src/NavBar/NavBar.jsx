import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
    return (
        <>
        <nav className="navbar">
                <Link to ="/"> Trang chủ </Link>
                <Link to ='/login'>login</Link>
        </nav>
        </>
      );
}
 
export default NavBar;
