import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductsPage from "./pages/ProductsPage";
import NotFound from "./pages/NotFound";
import { useStores } from "./StoreContext";
import ProductList from "./components/ProductList";

export default function App() {
  const { categoryItems, categoryProducts } = useStores();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="products" element={<ProductsPage />}>
          {categoryItems.map((item) => (
            <Route
              path={`${item.route}`}
              element={<ProductList datalist={categoryProducts} />}
              key={item._id}
            />
          ))}
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
