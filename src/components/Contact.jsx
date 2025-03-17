import React, { useEffect, useState } from "react";

const Contact = () => {
  const [inputState, setInputState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach((input) => {
      input.addEventListener("focus", () => {
        input.parentElement.classList.add("active");
      });

      input.addEventListener("focusout", () => {
        if (input.value === "") {
          input.parentElement.classList.remove("active");
        } else {
          input.parentElement.classList.add("active");
        }
      });
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", () => {});
        input.removeEventListener("focusout", () => {});
      });
    };
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <>
      {/* <!-- ====================================== Section Contact ===================================== --> */}
      <section className="contact-section" id="contact">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Contactez-moi.
          </h2>
          <div className="line"></div>
        </div>
        <p className="services-product-text fade_up">
          Discutons de vos projets et explorons les possibilités ensemble !
        </p>
        <div className="main-box-contact">
          <div className="contact-box-main zoom_in">
            <div className="mobile-icon-main">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M6 6H42C43.1046 6 44 6.89544 44 8V40C44 41.1046 43.1046 42 42 42H6C4.89544 42 4 41.1046 4 40V8C4 6.89544 4.89544 6 6 6ZM24.1212 23.3658L11.2944 12.4754L8.70556 15.5246L24.1462 28.6342L39.3088 15.5123L36.6912 12.4877L24.1212 23.3658Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <p className="contact-email-text">EMAIL</p>
              <p className="contact-email">
                <a href="mailto:cheikhabamba99@gmail.com">cheikhabamba99@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="contact-box-main zoom_in">
            <div className="mobile-icon-main">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M14 4H36C37.1046 4 38 4.89544 38 6V42C38 43.1046 37.1046 44 36 44H12C10.8954 44 10 43.1046 10 42V0H14V4ZM14 8V18H34V8H14Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <p className="contact-email-text">TÉLÉPHONE</p>
              <p className="contact-email">
                <a href="tel:+33624637237">(+33) 6 24 63 72 37</a>
              </p>
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form">
            <label htmlFor="name" className="form__label">
              NOM
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="Votre nom"
              id="name"
              required
              autoComplete="off"
              value={inputState.name}
              onChange={handleChange}
            />
          </div>
          <div className="form">
            <label htmlFor="email" className="form__label">
              EMAIL
            </label>
            <input
              type="email"
              className="form__input"
              placeholder="Votre email"
              id="email"
              required
              autoComplete="off"
              value={inputState.email}
              onChange={handleChange}
            />
          </div>
          <div className="form subject-input-main">
            <label htmlFor="subject" className="form__label">
              SUJET
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="Sujet de votre message"
              id="subject"
              required
              autoComplete="off"
              value={inputState.subject}
              onChange={handleChange}
            />
          </div>
          <div className="form">
            <label htmlFor="message" className="form__label">
              MESSAGE
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="Écrivez votre message..."
              id="message"
              required
              autoComplete="off"
              value={inputState.message}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="wrapper blog-btn">
          <button className="btn-hover" type="submit">
            Envoyer
          </button>
        </div>
        <iframe
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.605420927572!2d4.872258377052338!3d45.775388064569144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea5f267837c1%3A0x30d59839d06f2944!2s128%20Bd%20du%2011%20Novembre%201918%2C%2069100%20Villeurbanne%2C%20France!5e0!3m2!1sfr!2sfr!4v1704092010021!5m2!1sfr!2sfr"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="footer">
          © 2024 | Tous droits réservés par
          <span>
            <a href="https://www.linkedin.com/in/votreprofil" target="_blank" rel="noopener noreferrer">
              Bamba Niang
            </a>
          </span>
        </div>
      </section>
      {/* <!-- ====================================== Section Contact End ===================================== --> */}
    </>
  );
};

export default Contact;
