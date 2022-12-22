import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles["not-found"]}>
      <div>
        <h2>404</h2>
        <p>Opppppsss, page introuvable.</p>
        <button className="--btn">
          <Link to="/">&larr; Retour a l'accueil</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
