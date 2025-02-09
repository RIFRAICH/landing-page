import './HeaderV2.css'
import {useEffect} from "react";
import Logo from '../../../assets/img/logo.png';
import {
    UilApps, UilComment,
    UilTimes
} from "@iconscout/react-unicons";
import { UilClipboardNotes } from "@iconscout/react-unicons";
import { UilCompass } from "@iconscout/react-unicons";
import { UilUserCheck } from "@iconscout/react-unicons";

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

        return () => {
            if (navToggle) {
                navToggle.removeEventListener('click', showMenu);
            }
            if (navClose) {
                navClose.removeEventListener('click', hideMenu);
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
                        <li className="nav__item"><a href="#" className="nav__link">A propos de nous</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Nos engagements</a></li>
                    </ul>
                </div>

                <div className="nav__center">
                    <a className="nav__logo" href="#index">
                        <img className="header__logoimg" src={Logo} alt="Logo RIFRAICH"/>
                    </a>
                </div>

                <div className="nav__right">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#" className="nav__link">Pourquoi nous choisir</a></li>
                    </ul>
                    <button className="nav__contact">Contactez-nous</button>
                </div>

                <div className="nav__btns">
                    <div className="nav__toggle" id="nav-toggle">
                    <UilApps/>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default HeaderV2;
