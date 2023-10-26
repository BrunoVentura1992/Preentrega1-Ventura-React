import { CartWidget } from "../CartWidget/CartWidget";
import styles from "./NavBar.module.css";
import logo from "/public/img/logo.png";

export const NavBar = () => {
  return (
    <nav className={`d-flex justify-content-between align-items-center p-4 ${styles.navBar}`}>
      <div className="d-flex align-items-center">
        <img src={logo} alt="Logo" className={`${styles.logo}`} />
        <div className="d-flex justify-content-between align-items-center mx-5">
          <button className={`${styles.navButton}`}>INICIO</button>
          <button className={`${styles.navButton}`}>CAMISETAS</button>
          <button className={`${styles.navButton}`}>TABLA DE TALLES</button>
          <button className={`${styles.navButton}`}>CONTACTO</button>
        </div>
      </div>
      <div className={`d-flex align-items-center ${styles.cartContainer}`}>
        <CartWidget />
      <p className={`${styles.cartNumber} mx-2`}>1</p>
      </div>
    </nav>
  );
};
