import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Outlet } from "react-router-dom";
import { useStores } from "../StoreContext";

export default function ProductsPage() {
  const { currentCategory, setCategoryProducts } = useStores();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function getCategoryItems() {
        setIsLoading(true);
        try {
          const res = await axios.get(
            `https://clothin-line.onrender.com/api/product?pageNumber=1&category=${currentCategory}`
          );

          const data = await res.data.data;

          console.log(data, typeof data);
          setCategoryProducts(data);
        } catch (error) {
          console.log("unexpected error", error);
        } finally {
          setIsLoading(false);
        }
      }
      getCategoryItems();
    },
    [currentCategory, setCategoryProducts]
  );
  return (
    <section>
      <Header />

      <h2 className="heading">{currentCategory} Category</h2>

      {isLoading ? <Spinner /> : <Outlet />}
      {/* <ProductList></ProductList> */}
    </section>
  );
}
