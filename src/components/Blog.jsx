import React from "react";

const Blog = () => {
  return (
    <>
      {/* <!-- ====================================== Section Blogs ===================================== --> */}
      <section className="blog-section" id="blog">
        <div className="heading-container">
          <h2 className="section-heading-text coding-skill-text fade_up">
            Big Projects
          </h2>
          <div className="line"></div>
        </div>
        <div className="blog-main zoom_in">
          <div className="blog-img-section">
            <p className="blog-date">
              2022<span></span>
            </p>
          </div>
          <div>
            <h3 className="post-date">WastAPP | APK Development</h3>
            <h4 className="steps">
              Développement d'une application mobile pour lutter contre la pollution
            </h4>
            <h5 className="est">
              Une application mobile actuellement en cours de développement sous Swift et MongoDB.
            </h5>
          </div>
        </div>
        <div className="blog-main zoom_in">
          <div className="blog-img-section blog-img-section2">
            <p className="blog-date">
              2023<span></span>
            </p>
          </div>
          <div>
            <h3 className="post-date">Développement Web</h3>
            <h4 className="steps">
              Création de sites web pour mes clients
            </h4>
            <h5 className="est">
              Plusieurs sites web développés avec différents langages en fonction des besoins spécifiques des clients.
            </h5>
          </div>
        </div>
        <div className="blog-main mb-0 zoom_in">
          <div className="blog-img-section blog-img-section3">
            <p className="blog-date">
              2024<span></span>
            </p>
          </div>
          <div>
            <h3 className="post-date">Développement de Plateformes</h3>
            <h4 className="steps">
              Création d'une plateforme de scraping pour la prospection
            </h4>
            <h5 className="est">
              Une plateforme combinant développement, data et scraping pour identifier des prospects grâce à Python et des techniques avancées de scraping.
            </h5>
          </div>
        </div>
      </section>
      {/* <!-- ====================================== Section Blogs End ===================================== --> */}
    </>
  );
};

export default Blog;
