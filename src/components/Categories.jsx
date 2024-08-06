import { useStores } from "../StoreContext";
import styles from "./Categories.module.css";

import Category from "./Category";

export default function Categories() {
  const { categoryItems } = useStores();

  return (
    <div className={styles.categories}>
      {categoryItems.map((category) => (
        <Category category={category} key={category._id} />
      ))}
    </div>
  );
}
