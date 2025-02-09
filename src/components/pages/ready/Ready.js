import React from 'react';
import './Ready.css';

function Ready() {
    return (
        <section className="ready">
            <div className="ready__content">
                <h2>Prêt à révolutionner votre manière<br />de vendre des vêtements<br />d'occasion ?</h2>
                <p>Rejoignez une communauté de fripiers passionnés et dynamiques.</p>
                <div className="ready__buttons">
                    <button className="ready__button ready__button--dark">Lancez-vous</button>
                    <button className="ready__button ready__button--light">En savoir plus</button>
                </div>
            </div>
        </section>
    );
}

export default Ready;
