import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="home__content">
        <div className="home__left">
          <h1 className="home__title">La mode seconde</h1>
          <h2 className="home__subtitle">main</h2>
          <p className="home__description">
            Simplifiez la gestion de votre boutique<br />
            en ligne et concentrez-vous sur ce que<br />
            vous aimez : la mode.
          </p>
          <button className="home__cta">Commencer maintenant</button>
        </div>
        <div className="home__right">
          <img
            src={process.env.PUBLIC_URL + "/assets/img/home_pro.png"}
            alt="Mode Seconde Main"
            className="home__image"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
