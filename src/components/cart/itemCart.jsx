import { CartContext } from "../../context/cartContext";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./itemCart.css";

export const CartItem = () => {
  const { cart, removeItem, getTotal, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  return (
    <>
      {cart.length > 0 ? (
        <div>
          {cart.map((element) => (
            <div className="carrito_products">
              <img src={element.img} width={200} height={150} />
              <div>
                <div>
                  <Link to={`/item/${element.id}`}>
                    <a className="title_cart">{element.title}</a>
                  </Link>
                  <div className="sum_stock">
                    <p>Talle: {element.talle}</p>
                  </div>
                  <div className="sum_stock">
                    <h2>Cantidad</h2>
                    <div className="aum_rest">
                      <button
                        class="btn cart px-auto"
                        onClick={() => decreaseQuantity(element.id)}
                      >
                        -
                      </button>
                      <span> {element.quantity} </span>
                      <button
                        class="btn cart px-auto"
                        onClick={() => increaseQuantity(element.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="prod_precie">
                    <span> Precio: {element.price * element.quantity} $</span>
                  </div>
                </div>
              </div>
              <button onClick={() => removeItem(element.id)}>
                <box-icon
                  name="trash-alt"
                  type="solid"
                  animation="tada"
                  color="#7749c7"
                ></box-icon>
              </button>
            </div>
          ))}
          <div className="fin_products">
            <h1>Precio Total: {getTotal()} $</h1>
            <Link to={`/payment?total=${getTotal()}`}>
              <button class="btn cart px-auto fin">Confirmar Compra</button>
            </Link>
            <Link to="/">
              <button class="btn cart px-auto fin">Seguir comprando</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="fin_products">
          <h1 class="title_cart">No hay productos</h1>
          <Link to="/">
            <button class="btn cart px-auto fin">Agregar productos</button>
          </Link>
        </div>
      )}
    </>
  );
};
