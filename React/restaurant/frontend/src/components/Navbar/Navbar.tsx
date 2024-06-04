import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const handleClick = (dest: string) => {
    navigate(`/${dest}`);
  };
  return (
    <div className="navbar">
      <span
        className="menu-nav"
        onClick={() => {
          handleClick("menu");
        }}
      >
        Menu
      </span>
      <span
        className="cart-nav"
        onClick={() => {
          handleClick("cart");
        }}
      >
        Cart
      </span>
      <span
        className="login-nav"
        onClick={() => {
          handleClick("login");
        }}
      >
        Login
      </span>
      <span
        className="signup-nav"
        onClick={() => {
          handleClick("signup");
        }}
      >
        Sign up
      </span>
    </div>
  );
}
