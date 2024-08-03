import styles from "./Header.module.css";
import Logo from "../images/logo.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="logo" />

      <ul>
        <li>
          <a href="#">Handbags</a>
        </li>
        <li>
          <a href="#">Watches</a>
        </li>
        <li>
          <a href="#">Skincare</a>
        </li>
        <li>
          <a href="#">Jewellery</a>
        </li>
        <li>
          <a href="#">Appliances</a>
        </li>
      </ul>

      <div>
        <button>search</button>
        <input type="search" name="search" placeholder="search for products or brands" />
      </div>
    </header>
  );
}
