import React from "react";
import "./Home.css";
import BlueButton from "../../blue-button/BlueButton";

const Home = () => {
  return (
    <section className="home">
      {/* Bloc gauche */}
      <div className="home__left">
        <div className="home__title-container">
          <h1 className="home__title">La mode seconde main</h1>
        </div>
        <p className="home__description">
          Simplifiez la gestion de votre boutique en ligne et concentrez-vous
          sur ce que vous aimez : <span className="highlight">la mode</span>.
        </p>
        <BlueButton label="Commencer maintenant" link="/start" />
      </div>

      {/* Image au centre */}
      <div className="home__image-container">
        <div className="home__greeting">BONJOUR</div>
        <img
          src={process.env.PUBLIC_URL + "/assets/img/home_pro.png"}
          alt="Mode Seconde Main"
          className="home__image"
        />
      </div>

      {/* Bloc droit */}
      <div className="home__right">
        <div className="home__title-container">
          <h1 className="home__title home__title--blue">
            prend un <br /> nouveau souffle
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
