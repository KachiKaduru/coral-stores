import { useNavigate } from "react-router-dom";
import styles from "./Category.module.css";
import { useStores } from "../StoreContext";

export default function Category({ category }) {
  const { setCurrentCategory } = useStores();
  const navigate = useNavigate();

  function handleNavigation() {
    navigate(`${category.route}`);
    setCurrentCategory(category.text);
  }

  return (
    <button className={styles.category} onClick={handleNavigation}>
      {category.text}
    </button>
  );
}
