// componente reutilizable...( se uso en NavBar y podra usarse en varias secciones)
import "./banner.css";

export const Banner = (img) => {

  return (
    <>
      <section class="banner">
        <a href="#">
          <img src={img.img} className="logo__banner" />
        </a>
      </section>

    </>
  );
};
