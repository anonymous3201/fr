import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectUserName } from "../../../redux/slice/authSlice";
import styles from "./Navbar.module.scss";
import { FaUserCircle } from "react-icons/fa";

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Navbar = () => {
  const userName = useSelector(selectUserName);

  return (
    <div className={styles.navbar}>
      <div className={styles.user}>
        <FaUserCircle size={40} color="#fff" />
        <h4>{userName}</h4>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/admin/home" className={activeLink}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/all-products" className={activeLink}>
              Tous les voitures
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/add-product/ADD" className={activeLink}>
              Ajouter Voitures
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/orders" className={activeLink}>
           Commandes
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;