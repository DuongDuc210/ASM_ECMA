import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./page/home/page";
import LayoutWebsite from "./page/layout";
import Product_Detail from "./page/product_detail/page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutWebsite />}>
        <Route index element={<HomePage />} />
        <Route path="shop/product_detail" element={<Product_Detail />} />
      </Route>
    </Routes>
  );
}

export default App;
