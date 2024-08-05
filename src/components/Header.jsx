import Categories from "./Categories";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <input type="search" placeholder="search..." />

      <Categories />
    </header>
  );
}
