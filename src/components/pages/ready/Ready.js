import React from 'react';
import './Ready.css';
import { ArrowIcon } from '../../../utils/Icons';

function Ready() {
    return (
        <section className="ready" id="ready">
            <div className="ready__content">
                <h2>Prêt à révolutionner votre manière<br />de vendre des vêtements<br />d'occasion ?</h2>
                <div className="ready__flex-container">
                    <p>Rejoignez une communauté de fripiers passionnés et dynamiques.</p>
                    <div className="ready__buttons">
                        <button className="ready__button ready__button--dark">Lancez-vous</button>
                        <button className="ready__button ready__button--light">
                            En savoir plus
                            <ArrowIcon size={24}/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Ready;
