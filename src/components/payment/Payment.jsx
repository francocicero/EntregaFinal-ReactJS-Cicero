import React, { useContext, useState } from "react";
import "./payment.css";
import { CartContext } from "../../context/cartContext";

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

import axios from "axios";

export const PaymentCard = () => {
  const { getTotal } = useContext(CartContext);

  // aca se inserta la credencial de prueba de mercadopago que es personal
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago("Agregar Public key MP");

  const createPreference = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/create_preference",
        {
          description: "Productos",
          price: getTotal(),
          quantity: 1,
          currency_id: "ARS",
        }
      );
      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  return (
    <>
      <div className="gral">
        <div class="shipping">
          <h1>Checkout - Envio</h1>
          <form class="shipping-form">
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
            <label for="name">Apellido:</label>
            <input type="text" id="name" name="name" required />

            <label for="address">Direccion:</label>
            <input type="text" id="address" name="address" required />

            <label for="city">Ciudad:</label>
            <input type="text" id="city" name="city" required />

            <label for="zip">Codigo Postal:</label>
            <input type="text" id="zip" name="zip" required />
          </form>
          <div id="payment">
            <div class="payment_center">
              <div class="payment_">
                <h1>Realiza tu pago</h1>
                <p>Total a pagar: {getTotal()} $ARS</p>
                <button class="btn cart px-auto pay" onClick={handleBuy}>
                  Pagar con MP
                </button>
                {preferenceId && <Wallet initialization={{ preferenceId }} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentCard;
