import './HeaderV2.css'
import {useEffect} from "react";
import Logo from '../../../assets/img/logo.png';
import {
    UilApps, UilComment,
    UilTimes
} from "@iconscout/react-unicons";
import UilClipboardNotes from "@iconscout/react-unicons/icons/uil-clipboard-notes";
import UilCompass from "@iconscout/react-unicons/icons/uil-compass";
import UilUserCheck from "@iconscout/react-unicons/icons/uil-user-check";

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
                <div className="nav__maininfos">
                    <a className="nav__logo" href="#index"><img className="header__logoimg" src={Logo}
                                                                   alt="Logo RIFRAICH"/></a>
                </div>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list grid">
                    <li className="nav__item"><a className="nav__link header__link header__navlink" href="#concept">
                            <UilClipboardNotes className="nav__icon"/>
                            Notre concept</a></li>
                        <li className="nav__item"><a className="nav__link header__link header__navlink"
                                                     href="#howtowork">
                            <UilCompass className="nav__icon"/>
                            Comment ça marche ?</a></li>
                        <li className="nav__item"><a className="nav__link header__link header__navlink" href="#why">
                            <UilUserCheck className="nav__icon"/>
                            Pourquoi nous choisir</a></li>
                        <li className="nav__item"><a className="nav__link header__link header__navlink" href="#contact">
                            <UilComment className="nav__icon"/>
                            Contact</a></li>
                    </ul>
                    <UilTimes className="nav__close" id="nav-close"/>
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