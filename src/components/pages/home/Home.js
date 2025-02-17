import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="home__content">
        <div className="home__desktop">
          <div className="home__left">
            <div>
              <h1 className="home__title">La mode seconde main</h1>
            </div>
            <div>
              <p className="home__description">
                Simplifiez la gestion de votre boutique<br />
                en ligne et concentrez-vous sur ce que<br />
                vous aimez : la mode.
              </p>
              <button className="home__cta">Commencer maintenant</button>
            </div>
          </div>
          <div className="home__center">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/home_pro.png"}
              alt="Mode Seconde Main"
              className="home__image"
            />
          </div>
          <div className="home__right">
            <h2 className="home__right-text">prend un<br />nouveau souffle</h2>
          </div>
        </div>
        <div className="home__mobile">
          <h1 className="home__title-mobile">La mode seconde main prend un nouveau souffle</h1>
          <p className="home__description-mobile">
            Simplifiez la gestion de votre boutique
            en ligne et concentrez-vous sur ce que
            vous aimez : la mode.
          </p>
          <button className="home__cta-mobile">Commencer maintenant</button>
          <img
            src={process.env.PUBLIC_URL + "/assets/img/home_pro.png"}
            alt="Mode Seconde Main"
            className="home__image-mobile"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
