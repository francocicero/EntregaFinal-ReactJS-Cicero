# EntregaFinal-Cicero-React

## # Ecommerce React curso

Este proyecto es un ecommerce orientado al comercio de zapatillas. 
Por lo que la estética de la pagina es sencilla y minimalista, es dinamica y facil de usar.
Se puede interactuar con la vista de categorias, individual de cada productos y a su ves la eleccion del producto por talle y cantidad del producto.
Al finalizar en carrito podes simular una compra con mercado pago usando una api de simulacion (en forma local)

## Tech

Dillinger uses a number of open source projects to work properly:

- [React] - Librería de Javascript
- [Node.js] - Entorno de ejecución para JavaScript
- [FireBase] - es una solución que permite guardar nuestros productos en forma sencilla dinamica y costo de bajo recursos.
- [Express] - Librería de Node utilizada en la construccion de la API
- [Axios] - utilizada para facilitar una acción en particular en el código JavaScript: hacer llamadas a URL o líneas HTTP
- [Cors] - Nos ayuda a que no nos de algun error en la seguridad entre navegadores
- [MercadoPago] - para integrar la api de prueba de mercadoPago para poder simular una compra usando CheckOut Pro. "ejemplo que use para integrar https://www.mercadopago.com.ar/developers/es/docs/checkout-pro/integrate-checkout-pro#editor_20"


And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

## Instalacion 

Si desea correr este proyecto, simplemente clone este repositorio y ejecute npm install luego usas o creas tu credenciales de prueba
de mercadoPago Devolpers (las credenciales son privadas).
Si no tiene cuenta crea una cuenta aqui: https://www.mercadopago.com.ar/developers/es
Despues creada la cuenta acceda al menu tus integraciones para crear tu aplicación para las crendenciales...

instalar las dependencias

```sh
npm i
npm i axios // capaz que te la pida o no
```
crea o usas tu credenciales de prueba
de mercadoPago Devolpers (las credenciales son privadas).
Si no tiene cuenta crea una cuenta aqui: https://www.mercadopago.com.ar/developers/es
Despues creada la cuenta acceda al menu tus integraciones para crear tu crendenciales...

Aqui un ejemplo donde tiene que insertar las crendenciales de tu mercado pago:

```sh
En carpeta Payment en payment.jsx hay que insertar tu plubic key... 

  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago("Agregar Public key MP");
```
```sh
Y en la carpeta service entrar mercadopago y en el archivo server agregar la credencial de prueba de mercadopago...

    mercadopago.configure({
      access_token: "Inserta token de Prueba MercadoPago",
    });
```

```sh
Antes de inicar la app con npm run dev
Hay que posicionarse en el archivo server.js abrir la terminal desde esa direccion y poner node server.js asi levanta el puerto 8080
para mercado pago
y por ultimo desloguearte de la cuenta de mercado pago porque no puedes hacerte pago a vos mismo.
```

```sh
Usa tarjetas de prueba de métodos de pago locales y simula diferentes transacciones, sin necesidad de usar una tarjeta real.

Mastercard
5031 7557 3453 0604
123
11/25

Visa
4509 9535 6623 3704
123
11/25

American Express
3711 803032 57522
1234
11/25

```










