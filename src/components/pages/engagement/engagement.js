import React from 'react';
import './engagement.css';
import landing1 from '../../../assets/img/landing1.png';
import landing2 from '../../../assets/img/landing2.png';
import landing3 from '../../../assets/img/landing3.png';

function Engagement() {
    return (
        <section className="engagement">
            <h2 className="engagement__title">NOS ENGAGEMENTS</h2>
            <h3 className="engagement__subtitle">La mode seconde main, c'est notre passion</h3>

            <div className="engagement__cards">
                <div className="engagement__card">
                    <div className="engagement__content">
                        <h4>Dynamiser la mode seconde main à Angers</h4>
                        <p>Nous croyons en la force du lien local. Notre plateforme est conçue pour mettre en valeur la diversité des styles et des univers de chaque boutique, créant ainsi un réseau solidaire où chaque acteur trouve sa place.</p>
                    </div>
                    <img src={landing1} alt="Mode seconde main à Angers" className="engagement__image"/>
                </div>

                <div className="engagement__card">
                    <div className="engagement__content">
                        <h4>Une nouvelle expérience pour la seconde main</h4>
                        <p>Nous sommes convaincus que la mode seconde main mérite une expérience d'achat à la hauteur de vos attentes. C'est pourquoi nous nous engageons à offrir à nos clients une sélection rigoureuse de pièces, un emballage soigné et un service client personnalisé.</p>
                    </div>
                    <img src={landing2} alt="Nouvelle expérience seconde main" className="engagement__image"/>
                </div>

                <div className="engagement__card">
                    <div className="engagement__content">
                        <h4>Ensemble, faisons rayonner la mode seconde main</h4>
                        <p>Nous sommes convaincus que l'union fait la force. En regroupant les friperies angevines sur une seule plateforme, nous créons un écosystème dynamique où chacun peut bénéficier de l'expertise des autres.</p>
                    </div>
                    <img src={landing3} alt="Rayonnement mode seconde main" className="engagement__image"/>
                </div>
            </div>
        </section>
    );
}

export default Engagement;
