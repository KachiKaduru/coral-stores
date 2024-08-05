import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import ProductList from "../components/ProductList";

export default function Homepage() {
  const [newArrivals, setNewArrivals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function getArrivals() {
      setIsLoading(true);
      try {
        const res = await axios.get("https://clothin-line.onrender.com/api/product/newArrivals");

        const data = await res.data.data;

        console.log(data, typeof data);
        setNewArrivals(data);
      } catch (error) {
        console.log("unexpected error", error);
      } finally {
        setIsLoading(false);
      }
    }
    getArrivals();
  }, []);

  return (
    <section>
      <Header />

      <h2>New Arrivals</h2>

      <div>{isLoading ? <Spinner /> : <ProductList datalist={newArrivals} />}</div>
    </section>
  );
}
