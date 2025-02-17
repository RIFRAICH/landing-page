import React from 'react';
import './About.css';
import { ChartIcon, PackageIcon, PlugsIcon } from '../../../utils/Icons';

const About = () => {
    return (
        <section className="about">
            <h2 className="about__title">À PROPOS DE NOUS</h2>
            <h3 className="about__subtitle">
                Rifraich vous offre une solution clé en main<br />
                pour développer votre activité
            </h3>
            <div className="about__cards">
                <div className="about__card">
                    <div className="about__card-icon">
                        <ChartIcon size={48}/>
                    </div>
                    <h4 className="about__card-title">
                        Augmentez la visibilité de votre boutique
                    </h4>
                    <p className="about__card-description">
                        Bénéficiez d'une vitrine en ligne qui vous permettra d'atteindre une clientèle plus large et de développer votre notoriété
                    </p>
                </div>
                <div className="about__card">
                    <div className="about__card-icon">
                        <PlugsIcon size={48}/>
                    </div>
                    <h4 className="about__card-title">
                        Gérez facilement votre stock
                    </h4>
                    <p className="about__card-description">
                        Simplifiez votre gestion de stock avec notre interface intuitive et suivez en temps réel vos ventes et vos stocks
                    </p>
                </div>
                <div className="about__card">
                    <div className="about__card-icon">
                        <PackageIcon size={48}/>
                    </div>
                    <h4 className="about__card-title">
                        Nous nous occupons de la livraison et du paiement
                    </h4>
                    <p className="about__card-description">
                        Concentrez-vous sur votre activité. Nous prenons en charge la livraison et le paiement de vos commandes pour vous offrir une tranquillité d'esprit totale
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
