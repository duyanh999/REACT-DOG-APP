import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
    return (
        <>
        <nav className="navbar">
                <Link to ="/"> Trang chủ </Link>
                <Link to ="/dogs"> Mua chó </Link>
                <Link to ="/cart"> Giỏ hàng </Link>
        </nav>
        </>
      );
}
 
export default NavBar;
