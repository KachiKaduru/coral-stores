import styles from "./Category.module.css";

export default function Category({ category, onClick }) {
  return (
    <button className={styles.category} onClick={onClick}>
      {category.text}
    </button>
  );
}
