import "./navbar.css";
import logo from "../../assets/logo.png";
import { CartWindget } from "../cartWindget/cart";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <header className="header">
        <nav className="container_nav">
          <a>
            <img src={logo} className="logo" />
          </a>
          <ul className="nav">
            <li>
              <Link class="a" to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link class="a" to="/">
                Productos
              </Link>
              <ul className="nav__sub">
                <li>
                  <Link to="category/2023">Temporada 2023</Link>
                </li>
                <li>
                  <Link to="category/2024">Temporada 2024</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link class="a" to="contact">
                Contactos
              </Link>
            </li>
          </ul>
          <CartWindget />
        </nav>
      </header>
    </>
  );
};
