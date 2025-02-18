import './HeaderV2.css'
import {useEffect} from "react";

import {
    UilBars, UilTimes
} from "@iconscout/react-unicons";

function HeaderV2(){
    useEffect(() => {
        const navToggle = document.getElementById('nav-toggle');
        const navClose = document.getElementById('nav-close');
        const navMenu = document.getElementById('nav-menu');

        function showMenu() {
            navMenu.classList.add('show-menu');
        }

        function hideMenu() {
            navMenu.classList.remove('show-menu');
        }

        if (navToggle) {
            navToggle.addEventListener('click', showMenu);
        }

        if (navClose) {
            navClose.addEventListener('click', hideMenu);
        }

        const navLinks = document.querySelectorAll('.nav__link');
        function handleLinkClick() {
            hideMenu();
        }

        navLinks.forEach(link => {
            link.addEventListener('click', handleLinkClick);
        });

        // Fermer le menu lors d'un clic sur l'overlay
        const overlay = document.getElementById('nav-overlay');
        if (overlay) {
            overlay.addEventListener('click', hideMenu);
        }

        return () => {
            if (navToggle) {
                navToggle.removeEventListener('click', showMenu);
            }
            if (navClose) {
                navClose.removeEventListener('click', hideMenu);
            }
            if (overlay) {
                overlay.removeEventListener('click', hideMenu);
            }
            navLinks.forEach(link => {
                link.removeEventListener('click', handleLinkClick);
            });
        };
    }, []);

    return(
        <header className="header" id="header">
            <nav className="nav container">
                <div className="nav__left">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#about" className="nav__link">A propos de nous</a></li>
                        <li className="nav__item"><a href="#engagement" className="nav__link">Nos engagements</a></li>
                    </ul>
                </div>

                <div className="nav__center">
                    <a className="nav__logo" href="#">
                        <span className="header__logotext">R I F R A I C H</span>
                    </a>
                </div>

                <div className="nav__right">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#ready" className="nav__link">Pourquoi nous choisir</a></li>
                    </ul>
                    <a href="#contact" className="nav__link"><button className="nav__contact">Contactez-nous</button></a>
                </div>

                <div className="nav__btns">
                    <div className="nav__toggle" id="nav-toggle">
                        <UilBars size="24"/>
                    </div>
                </div>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#about" className="nav__link">A propos de nous</a></li>
                        <li className="nav__item"><a href="#engagement" className="nav__link">Nos engagements</a></li>
                        <li className="nav__item"><a href="#ready" className="nav__link">Pourquoi nous choisir</a></li>
                        <li className="nav__item"><a href="#contact"><button className="nav__contact">Contactez-nous</button></a></li>
                    </ul>
                    <UilTimes className="nav__close" id="nav-close"/>
                </div>
                <div className="nav__overlay" id="nav-overlay"></div>
            </nav>
        </header>
    )
}

export default HeaderV2;
