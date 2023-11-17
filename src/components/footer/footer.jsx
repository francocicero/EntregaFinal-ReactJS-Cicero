import "./footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div class="container">
          <div class="container__menu">
            <h2 class="sub__title">Empresa</h2>
            <ul class="footer_ul">
              <li class="footer_li">
                <a class="footer_a" href="#">
                  Nosotros
                </a>
              </li>
              <li class="footer_li">
                <a class="footer_a" href="#">
                  Nuestro servicios
                </a>
              </li>
              <li class="footer_li">
                <a class="footer_a" href="#">
                  Politica y privacidad
                </a>
              </li>
              <li class="footer_li">
                <a class="footer_a" href="#">
                  Preguntas
                </a>
              </li>
            </ul>
          </div>

          <div class="container__menu">
            <h2 className="sub__title">Ayuda</h2>
            <ul class="footer_ul">
              <li class="footer_li">
                <a class="footer_a" href="#">
                  Envios
                </a>
              </li>
              <li class="footer_li">
                <a class="footer_a" href="#">
                  Devoluciones
                </a>
              </li>
              <li class="footer_li">
                <a class="footer_a" href="#">
                  Estado de orden
                </a>
              </li>
              <li class="footer_li">
                <a class="footer_a" href="#">
                  Opciones de pagos
                </a>
              </li>
            </ul>
          </div>

          <div class="container__menu">
            <h2 className="sub__title">Tienda</h2>
            <ul class="footer_ul">
              <li class="footer_li">
                <Link to="category/2023" class="footer_a" href="#">
                  Temporada 2023
                </Link>
              </li>
              <li  class="footer_li">
                <Link to="category/2024" class="footer_a" href="#">
                  Temporada 2024
                </Link>
              </li>
              <li class="footer_li">
                <Link to="/" class="footer_a" href="#">
                  Ingresos
                </Link>
              </li>
              <li class="footer_li">
                <a class="footer_a" href="#">
                  newsletter
                </a>
              </li>
            </ul>
          </div>

          <div class="container__menu">
            <h2 className="sub__title">Seguinos</h2>
            <div class="social-links">
              <a class="footer_a" href="https://www.facebook.com/" target="_blank">
                <box-icon name="meta" type="logo"></box-icon>
              </a>
              <a class="footer_a" href="https://twitter.com/?lang=es" target="_blank">
                <box-icon name="twitter" type="logo"></box-icon>
              </a>
              <a class="footer_a" href="https://instagram.com/" target="_blank">
                <box-icon name="instagram" type="logo"></box-icon>
              </a>
              <a class="footer_a" href="https://web.whatsapp.com/" target="_blank">
                <box-icon name="whatsapp" type="logo"></box-icon>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
