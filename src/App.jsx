import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GiftDetails from "./pages/GiftDetails";
import Home from "./pages/Home";
import Gifts from "./pages/Gifts";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Account from "./pages/Account";
import Orders from "./pages/Orders";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/gifts/:id" element={<GiftDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/account" element={<Account />} />
        <Route path="/orders" element={<Orders />} />


      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
