import "./itemsCount.css";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
const notify = () => toast("Se agrego al Carrito");

export const ItemsCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="contador">
        <button class="btn cart px-auto num cont" onClick={decrement}>
          -
        </button>
        <h4 className="number">{quantity}</h4>
        <button class="btn cart px-auto num cont" onClick={increment}>
          +
        </button>
      </div>
      <div onClick={notify}>
        <button class="btn cart px-auto" onClick={() => onAdd(quantity)}>
          Agregar al Carrito
        </button>
        <Toaster />
      </div>
    </>
  );
};
