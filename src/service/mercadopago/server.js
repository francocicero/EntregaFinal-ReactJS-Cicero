const express = require("express");

//inicializa express es un framework para node que facilita la escritura
const app = express();

//para asegurar que no haya algun error con nevagador
const cors = require("cors");

const mercadopago = require("mercadopago");

app.use(express.json());
app.use(cors());

// aca se inserta la credencial de prueba de mercadopago que es personal  
mercadopago.configure({
  access_token: "Inserta Credenciales de Prueba MercadoPago",
});

app.get("/", function (req, res) {
  res.send("el servidor de mercado pago funciona! 123 :) winner");
});

app.post("/create_preference", (req, res) => {
  let preference = {
    items: [
      {
        title: req.body.description,
        unit_price: Number(req.body.price),
        quantity: Number(req.body.quantity),
      },
    ],
    back_urls: {
      success: "http://localhost:5173",
      failure: "http://localhost:5173",
      pending: "",
    },
    auto_return: "approved",
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json({
        id: response.body.id,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(8080, () => {
  console.log("the server is now running on port 8080");
});
