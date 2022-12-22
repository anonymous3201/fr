import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <section>
      <div className="container">
        <h2>Verrification avec succes</h2>
        <p>Merci pour votre achat</p>
        <br />

        <button className="--btn --btn-primary">
          <Link to="/order-history">Afficher l'état de la commande</Link>
        </button>
      </div>
    </section>
  );
};

export default CheckoutSuccess;
