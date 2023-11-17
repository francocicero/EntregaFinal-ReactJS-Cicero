import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../src/components/navbar/navbar";
import { Footer } from "../src/components/footer/footer";
import { ItemListContainer } from "./components/itemListContainer/itemListContainer";
import { ItemsDetailContainer } from "./components/itemsDetailContainer/itemsDetailContainer";
import { CartProvider } from "./context/cartContext";
import { CartItem } from "./components/cart/itemCart";
import { CartWindget } from "./components/cartWindget/cart";
import ContactForm from "./components/contact/contact";
import Payment from "./components/payment/payment";
import EndPayment from "./components/end/end";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemsDetailContainer />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/cart" element={<CartWindget />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/end" element={<EndPayment />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </CartProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
