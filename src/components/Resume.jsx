import React, { useEffect, useRef } from "react";
import FigmaImg from "../assets/images/sncf.png";
import PhotoShopImg from "../assets/images/kpa6T.png";
import AdobeImg from "../assets/images/NIIT.png";
import SketchImg from "../assets/images/sktech-img.png";
import InvisionImg from "../assets/images/invision-img.png";
import WinnerAward from "../assets/images/football2.png";
import WinnerAward2 from "../assets/images/basketball.png";
import WinnerAward3 from "../assets/images/book.png";
import WinnerAward4 from "../assets/images/photo-camera-2.png";

const Resume = () => {
  const colors = [
    "#BCE70C",
    "#FF759C",
    "#00CC97",
    "#FFDB59",
    "#6F39FD",
    "#FF7D61",
  ];
  const progressRef = useRef(null);
  const hasAnimated = useRef(false); // Track if the animation has already run

  useEffect(() => {
    const progressSection = progressRef.current;
    const items = progressSection.querySelectorAll(".progress-item");
    const observerOptions = { threshold: 0.1 };

    function handleIntersection(entries, observer) {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        items.forEach((item, index) => {
          let num = parseInt(item.dataset.num);
          let count = 0;
          let color = colors[index % colors.length];
          let interval = setInterval(() => {
            if (count === num) {
              clearInterval(interval);
            } else {
              count++;
              item.style.background = `conic-gradient(${color} ${count}%, #80808047 0deg)`;
              item.setAttribute("data-value", `${count}%`);
              item.innerHTML = `${count}%`;
            }
          }, 15);
        });
        observer.unobserve(progressSection);
        hasAnimated.current = true; // Mark that the animation has run
      }
    }

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    observer.observe(progressSection);

    return () => observer.disconnect();
  }, [colors]);

  return (
    <>
       {/* Section Éducation & Expérience */}
       <section className="education-experience" id="resume">
        <div className="row">
          {/* Éducation */}
          <div className="col-lg-6">
            <div className="heading-container">
              <h2 className="section-heading-text about-me fade_up">
                Formation.
              </h2>
              <div className="line"></div>
            </div>

            <div className="education position-relative fade_up">
              <div className="small_yellow_border_main">
                <p className="bachelor">Master - Informatique Décisionnelle et Big Data</p>
                <p className="cursus university">EPSI Lyon / 2021 - 2025</p>
                <p className="cursus">
                  Spécialisation en Data Engineering, Business Intelligence et Cloud Computing. 
                  Compétences en gestion et visualisation de données, stratégie SI et informatique quantique.
                </p>
              </div>
            </div>

            <div className="education position-relative fade_up">
              <div className="small_yellow_border_main">
                <p className="bachelor">Bachelor - Informatique et Développement</p>
                <p className="cursus university">EPSI Lyon / 2021 - 2023</p>
                <p className="cursus">
                  Développement Web et Mobile, Gestion de bases de données, et conception de solutions logicielles.
                </p>
              </div>
            </div>

            <div className="education position-relative fade_up">
              <div className="small_yellow_border_main">
                <p className="bachelor">Diplôme en Génie Logiciel & Réseaux</p>
                <p className="cursus university">NIIT Informatique / 2018 - 2020</p>
                <p className="cursus">
                  Apprentissage approfondi en **programmation, réseaux et UX/UI Design**.  
                  Développement de logiciels et conception d’interfaces ergonomiques.
                </p>
              </div>
            </div>
          </div>

          {/* Expérience */}
          <div className="col-lg-6">
            <div className="heading-container">
              <h2 className="section-heading-text about-me fade_up">
                Expérience.
              </h2>
              <div className="line"></div>
            </div>

            <div className="education position-relative fade_up">
              <div className="small_yellow_border_main">
                <p className="bachelor">Data Analyst & Ingénieur BI</p>
                <p className="cursus university">SNCF / 2023 - 2025</p>
                <p className="cursus">
                  - Développement de solutions BI avec Power BI et SQL  
                  - Création de data lakes et automatisation des processus métier  
                  - Gestion des accès et reporting interactif  
                </p>
              </div>
            </div>

            <div className="education position-relative fade_up">
              <div className="small_yellow_border_main">
                <p className="bachelor">Développeur Web</p>
                <p className="cursus university">KPA6T / 2022 - 2023</p>
                <p className="cursus">
                  - Développement d’un CRM en Vue.js et Laravel  
                  - Automatisation des mises à jour avec GitLab CI/CD  
                  - Scraping et analyse de données avec Python  
                </p>
              </div>
            </div>

            <div className="education position-relative fade_up">
              <div className="small_yellow_border_main">
                <p className="bachelor">Développeur Mobile</p>
                <p className="cursus university">WastApp (Projet personnel) / 2021 - 2022</p>
                <p className="cursus">
                  - Création d'une application mobile de recyclage en SwiftUI  
                  - Intégration Firebase pour la gestion des utilisateurs et des données  
                  - UX/UI Design avec Figma et Miro  
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Education Experience End ===================================== --> */}
      {/* <!-- ====================================== Section Coding Skill ===================================== --> */}
      <section className="coding-skill-section">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Coding Skills.
          </h2>
          <div className="line"></div>
        </div>
        <div id="progress" ref={progressRef}>
          <div data-num="60" className="progress-item fade_up">
            sd
          </div>
          <div data-num="70" className="progress-item fade_up">
            sd
          </div>
          <div data-num="80" className="progress-item fade_up">
            sd
          </div>
          <div data-num="70" className="progress-item fade_up">
            sd
          </div>
          <div data-num="50" className="progress-item fade_up">
            ds
          </div>
          <div data-num="50" className="progress-item fade_up">
            ds
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Coding Skill End ================================= --> */}
      {/* <!-- ======================================   Section Design Skill   ================================= --> */}
      <section className="design-skill-section">
        <div className="heading-container">
          <h2 className="section-heading-text design-skill-text fade_up">
            Compagnies
          </h2>
          <div className="line"></div>
        </div>
        <div className="design-skill-sub-section">
          <div className="design-skills-img-main flip_up">
          <img src={PhotoShopImg} width={60} alt="photoshop-img" />
            <div className="skill-counter-main">
              <p>1Y</p>
              <p>Developer</p>
            </div>
          </div>
          <div className="design-skills-img-main photoshop flip_up">
          <img src={FigmaImg} width={60} alt="figma-img" />
            <div className="skill-counter-main photoshop-text">
              <p>2Y</p>
              <p>Data Science</p>
            </div>
          </div>
          <div className="design-skills-img-main adobe-xd flip_up">
            <img src={AdobeImg} width={60}alt="adobe-xd-img" />
            <div className="skill-counter-main adobe-xd-text">
              <p>1Y</p>
              <p>Developer</p>
            </div>
          </div>

          {/* <div className="design-skills-img-main sketch flip_up">
            <img src={SketchImg}width={60} alt="sktech-img" />
            <div className="skill-counter-main sketch-text">
              <p>85%</p>
              <p>SKETCH</p>
            </div>
          </div> */}
          {/* <div className="design-skills-img-main invision flip_up">
            <img src={InvisionImg} alt="invision-img" />
            <div className="skill-counter-main invision-text">
              <p>89%</p>
              <p>INVISION</p>
            </div>
          </div> */}
        </div>
      </section>
      {/* <!-- ====================================== Section Coding Skill End ===================================== --> */}
      {/* <!-- ====================================== Section Award ===================================== --> */}
      <section className="awards-section overflow-hidden">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Hobbies
          </h2>
          <div className="line"></div>
        </div>
        <div className="row awards-row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={WinnerAward} width={60} 
      
                        alt="winner-award4"
                      />
                      <p className="award-yer">en club</p>
                    </div>
                    <p className="award-interior">Footballe</p>
                    <p className="award-winner-text"></p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                    Passionné de football, j’apprécie la coordination et la persévérance, essentielles aussi en développement et data engineering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={WinnerAward2}
                        alt="winner-award2"
                        width={60}
                      />
                      <p className="award-yer">PlayGround</p>
                    </div>
                    <p className="award-interior">Basketball</p>
                    <p className="award-winner-text">entre potes</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                    J’aime l’esprit d’équipe et la stratégie qu’exige le basket, des qualités que j’applique aussi dans mes projets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={WinnerAward3}
                        alt="winner-award3"
                        width={60}
                      />
                      <p className="award-yer">lecture</p>
                    </div>
                    <p className="award-interior">lire pour voyager</p>
                    <p className="award-winner-text"></p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                    Curieux de nature, la lecture m’aide à approfondir mes connaissances et à nourrir ma réflexion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="box-item flip_up">
              <div className="flip-box">
                <div className="flip-box-front">
                  <div className="inner">
                    <div className="years-award-img">
                      <img
                        className="winner-award"
                        src={WinnerAward4}
                        alt="winner-award4"
                        width={60}
                      />
                      <p className="award-yer">Photgraphe pro</p>
                    </div>
                    <p className="award-interior">Pro</p>
                    <p className="award-winner-text">passion</p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div className="inner">
                    <p className="flip-back-text">
                    La photographie m’apprend à observer les détails et à capturer l’instant, une approche que j’applique aussi dans mon travail.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Award End ===================================== --> */}
    </>
  );
};
export default Resume;
