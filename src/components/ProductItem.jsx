import styles from "./ProductItem.module.css";

export default function ProductItem({ item, url }) {
  return (
    <div className={styles.productItem}>
      <div className={styles.imgContainer}>
        <img src={`${url}${item.image}`} alt="" />
      </div>

      <div className={styles.info}>
        <h2>{item.name}</h2>

        <p>{item.countInStock} pieces available</p>

        <p> ₦ {item.price}</p>
      </div>
    </div>
  );
}
