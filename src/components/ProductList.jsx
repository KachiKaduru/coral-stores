import styles from "./ProductList.module.css";
import ProductItem from "../components/ProductItem";

const URL = "https://bintusstore.vercel.app";

export default function ProductList({ datalist }) {
  return (
    <div className={styles.list}>
      {datalist.map((item) => (
        <ProductItem url={URL} item={item} key={item._id} />
      ))}
    </div>
  );
}
