import React, { useEffect } from "react";

const AboutSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(
      ".fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down"
    );
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <>
      {/* <!-- ====================================== Section About ===================================== --> */}
      <section className="About-section jos" id="about">
        <div className="heading-container">
          <h2 className="section-heading-text about-me fade_up">About Me.</h2>
          <div className="line"></div>
        </div>
        <p className="section-sub-text about-sub-text zoom_in">
        Bonjour, je suis <span>Bamba Niang</span>, Développeur et Data Engineer passionné par l'optimisation 
          des systèmes et l'analyse des données. Fort de plusieurs années d'expérience en développement web et mobile, 
          en gestion des données et en Business Intelligence, j'ai contribué à divers projets en entreprise et en freelance.  
          Mon expertise couvre des technologies comme Python, SQL, Power BI, MongoDB, Swift, et Vue.js.  
          J'aime concevoir des solutions innovantes, automatiser les processus et transformer les données en insights stratégiques.
        </p>
        <div className="about-detail-main">
          <p className="about-detail">Name</p>
          <p className="about-detail-info">Bamba Niang</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Nationality</p>
          <p className="about-detail-info">Sénégalais</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Phone</p>
          <p
            className="about-detail-info email"
            onClick="location.href='tel:(+33)0624637237'"
          >
            (+33) 06 24 63 72 37
          </p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Email</p>
          <p
            className="about-detail-info email"
            onClick="location.href='mailto:Cheikhabamba99@gmail.com'"
          >
            Cheikhabamba99@gmail.com
          </p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Experience</p>
          <p className="about-detail-info">3+ years</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Développeur</p>
          <p className="about-detail-info">Disponible en Octobre</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Linkdin</p>
          <p className="about-detail-info">bamba niang</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Language</p>
          <p className="about-detail-info">English & French</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Address</p>
          <p className="about-detail-info">Villeurbanne, France</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">loisirs</p>
          <p className="about-detail-info">Football</p>
        </div>
      </section>
      {/* <!-- ====================================== Section About End ===================================== --> */}
    </>
  );
};
export default AboutSection;
