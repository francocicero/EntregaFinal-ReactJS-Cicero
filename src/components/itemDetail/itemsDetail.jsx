import "./itemsDetail.css";
import { ItemsCount } from "../itemsCount/itemsCount";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

export const ItemsDetail = ({ id, title, img, price, stock, temporada }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);
  const [selectedTalle, setSelectedTalle] = useState(null);

  const addCart = (quantity) => {
    if (selectedTalle) {
      setQuantityAdded(quantity);
      const item = {
        id,
        title,
        price,
        stock,
        img,
        talle: selectedTalle,
      };

      addItem(item, quantity);
    } else {
      alert("Por favor, selecciona un talle antes de agregar al carrito.");
    }
  };

  const handleTalleSelection = (talle) => {
    setSelectedTalle(talle);
  };

  return (
    <>
      <section id="productos">
        <div>
          <div class="container-fluid">
            <div class="card mx-auto col-md-3  mt-5 details">
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

                  <div class="talles">
                    <button
                      class={`btn cart px-auto num ${
                        selectedTalle === "38" ? "active" : ""
                      }`}
                      onClick={() => handleTalleSelection("38")}
                    >
                      38
                    </button>
                    <button
                      class={`btn cart px-auto num ${
                        selectedTalle === "39" ? "active" : ""
                      }`}
                      onClick={() => handleTalleSelection("39")}
                    >
                      39
                    </button>
                    <button
                      class={`btn cart px-auto num ${
                        selectedTalle === "40" ? "active" : ""
                      }`}
                      onClick={() => handleTalleSelection("40")}
                    >
                      40
                    </button>
                    <button
                      class={`btn cart px-auto num ${
                        selectedTalle === "41" ? "active" : ""
                      }`}
                      onClick={() => handleTalleSelection("41")}
                    >
                      41
                    </button>
                  </div>
                  <div>
                    <p class="card-text letra">Stock Disponible: {stock}</p>
                    {quantityAdded > 0 ? (
                      <div>
                        <Link to="/cart">
                          <button className="btn cart px-auto">
                            Terminar Compra
                          </button>
                        </Link>
                        <Link to="/">
                          <button className="btn cart px-auto">
                            Seguir Comprando
                          </button>
                        </Link>
                      </div>
                    ) : (
                      <ItemsCount initial={1} stock={stock} onAdd={addCart} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
