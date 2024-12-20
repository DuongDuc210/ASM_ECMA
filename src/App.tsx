import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./page/home/page";
import LayoutWebsite from "./page/layout";
import Product_Detail from "./page/product_detail/page";
import CartPage from "./page/cart/cart";
import CheckoutPage from "./page/checkout/checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutWebsite />}>
        <Route index element={<HomePage />} />
        <Route path="shop/product_detail" element={<Product_Detail />} />
        <Route path="shop/cart" element={<CartPage />} />
        <Route path="shop/cart/checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
