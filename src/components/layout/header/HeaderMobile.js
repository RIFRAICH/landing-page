import styles from '../../../styles/components/HeaderMobile.module.scss';
import { useEffect, useState } from "react";
import {ArrowRightMinimizedIcon, BurgerMenuIcon, CrossIcon} from "../../../utils/Icons";
import rifraichLogoImg from "../../../assets/img/rifraich_logo.png";
import RoundedButton from "../../pures/RoundedButton";

const HeaderMobile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = (sectionId) => {
        setIsMenuOpen(false);
        window.location.href = `#${sectionId}`;
    }

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [isMenuOpen]);

    return (
        <>
            <header className={styles.container}>
                <img src={rifraichLogoImg} alt="Rifraich Logo" />
                <section className={styles.burgerMenuContainer} onClick={handleMenuClick}>
                    <BurgerMenuIcon size={32} />
                </section>
            </header>
            <nav className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
                <section className={styles.navTopBar}>
                    <img src={rifraichLogoImg} alt="Rifraich Logo" />
                    <section className={styles.burgerMenuContainer} onClick={handleMenuClick}>
                        <CrossIcon size={20} stroke="#1F2BA6" />
                    </section>
                </section>
                <section className={styles.navContent}>
                    <section onClick={() => handleLinkClick("about")} className={styles.navLinkContainer}>
                        <p className={styles.navLinkText}>A propos de nous</p>
                        <ArrowRightMinimizedIcon />
                    </section>
                    <section onClick={() => handleLinkClick("commitment")} className={styles.navLinkContainer}>
                        <p className={styles.navLinkText}>Nos engagements</p>
                        <ArrowRightMinimizedIcon />
                    </section>
                    <section onClick={() => handleLinkClick("commitment")} className={styles.navLinkContainer}>
                        <p className={styles.navLinkText}>Nos engagements</p>
                        <ArrowRightMinimizedIcon />
                    </section>
                    <section onClick={() => handleLinkClick("contact")} className={styles.navLinkContainer}>
                        <RoundedButton text="Contactez-nous" buttonColor="#b8beff" textColor="#262D6A" />
                    </section>
                </section>
            </nav>
        </>
    )
}

export default HeaderMobile;