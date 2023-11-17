import "./productos.css";
import { Link } from "react-router-dom";

export const Item = ({ id, title, img, price, stock, temporada }) => {
  return (
    <>
      <section id="productos">
        <div class="container-fluid">
          <div class="card mx-auto col-md-3 col-10 mt-5 prod">
            <img
              class="mx-auto img-thumbnail img"
              src={img}
              alt={title}
              width="auto"
              height="auto"
            />
            <div class="card-body text-center mx-auto">
              <div class="cvp">
                <h5 class="card-title font-weight-bold letra">{title}</h5>
                <p class="card-text letra">{price} $</p>
                <button class="btn details px-auto">
                  <Link to={`/item/${id}`}>
                    <div className="p">Ver Producto</div>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
