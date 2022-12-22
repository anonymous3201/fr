import { useRef } from "react";
import Card from "../../components/card/Card";
import styles from "./Contact.module.scss";
import { FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs
      .sendForm(
       "senauto",
        "template_0fo4edt",
        form.current,
        "IGcYV_thY7JBaK0dv"
      )
      .then(
        (result) => {
          toast.success("Message envoye avec succes");
        },
        (error) => {
          toast.error(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section>
      <div className={`container ${styles.contact}`}>
        <h2>Nous contactez</h2>
        <div className={styles.section}>
          <form ref={form} onSubmit={sendEmail}>
            <Card cardClass={styles.card}>
              <label>Nom</label>
              <input
                type="text"
                name="user_name"
                placeholder="Votre nom complet"
                required
              />
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Votre email"
                required
              />
              <label>Sujet</label>
              <input
                type="text"
                name="subject"
                placeholder="Sujet"
                required
              />
              <label>Message</label>
              <textarea name="message" cols="30" rows="10"></textarea>
              <button className="--btn --btn-primary">Envoyez mzssage</button>
            </Card>
          </form>

          <div className={styles.details}>
            <Card cardClass={styles.card2}>
              <h3>Nos informations de contacts</h3>
              <p>Remplissez le formulaire ou contactez-nous via les autres canaux listés ci-dessous</p>
              <div className={styles.icons}>
                <span>
                  <FaPhoneAlt />
                  <p>+221 70 949 88 63</p>
                </span>
                <span>
                  <FaEnvelope />
                  <p>Support@senauto.com</p>
                </span>
                <span>
                  <GoLocation />
                  <p>Senegal, Dakar</p>
                </span>
                <span>
                  <FaTwitter />
                  <p>@senauto221</p>
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
