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
  const hasAnimated = useRef(false); // Suivi de l'animation déjà effectuée

  useEffect(() => {
    const progressSection = progressRef.current;
    if (!progressSection) return;

    const items = progressSection.querySelectorAll(".progress-item");
    console.log("Nombre d'éléments progress trouvés :", items.length);
    
    const observerOptions = { threshold: 0.1 };

    function handleIntersection(entries, observer) {
      entries.forEach(entry => {
        console.log("Intersection Observer entry:", entry.isIntersecting);
        if (entry.isIntersecting && !hasAnimated.current) {
          items.forEach((item, index) => {
            let num = parseInt(item.dataset.num);
            let count = 0;
            let color = colors[index % colors.length];
            let skill = item.getAttribute("data-skill") || "";
            let interval = setInterval(() => {
              if (count === num) {
                clearInterval(interval);
              } else {
                count++;
                item.style.background = `conic-gradient(${color} ${count}%, #80808047 0deg)`;
                item.setAttribute("data-value", `${count}%`);
                item.innerHTML = `${skill} - ${count}%`;
              }
            }, 15);
          });
          observer.unobserve(progressSection);
          hasAnimated.current = true; // Marque que l'animation est passée
        }
      });
    }

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    observer.observe(progressSection);

    // Pour tester, force l'animation si l'élément est déjà visible :
    if (progressSection.getBoundingClientRect().top < window.innerHeight) {
      console.log("Progress section déjà visible au chargement, forçage de l'animation.");
      handleIntersection([{ isIntersecting: true }], observer);
    }

    return () => observer.disconnect();
  }, [colors]);

  return (
    <>
      {/* ... autres sections du CV ... */}

      {/* Section Coding Skill */}
      <section className="coding-skill-section">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Coding Skills.
          </h2>
          <div className="line"></div>
        </div>
        <div id="progress" ref={progressRef}>
          <div data-num="60" data-skill="PHP" className="progress-item fade_up"></div>
          <div data-num="70" data-skill="JavaScript" className="progress-item fade_up"></div>
          <div data-num="80" data-skill="Python" className="progress-item fade_up"></div>
          <div data-num="70" data-skill="React.js" className="progress-item fade_up"></div>
          <div data-num="50" data-skill="SQL" className="progress-item fade_up"></div>
          <div data-num="50" data-skill="Talend" className="progress-item fade_up"></div>
        </div>
      </section>

      {/* Section Design Skill */}
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
            <img src={AdobeImg} width={60} alt="adobe-xd-img" />
            <div className="skill-counter-main adobe-xd-text">
              <p>1Y</p>
              <p>Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Award */}
      <section className="awards-section overflow-hidden">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Loisirs
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
                      <img className="winner-award" src={WinnerAward} width={60} alt="winner-award4" />
                      <p className="award-yer">en club</p>
                    </div>
                    <p className="award-interior">Football</p>
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
                      <img className="winner-award" src={WinnerAward2} alt="winner-award2" width={60} />
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
                      <img className="winner-award" src={WinnerAward3} alt="winner-award3" width={60} />
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
                      <img className="winner-award" src={WinnerAward4} alt="winner-award4" width={60} />
                      <p className="award-yer">Photographe pro</p>
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
    </>
  );
};

export default Resume;