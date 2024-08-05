import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductsPage from "./pages/ProductsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="products" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
