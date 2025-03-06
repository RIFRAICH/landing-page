import styles from '../../../styles/components/HeaderMobile.module.scss';
import { useState } from "react";
import {BurgerMenuIcon} from "../../../utils/Icons";
import rifraichLogoImg from "../../../assets/img/rifraich_logo.png";

const HeaderMobile = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={styles.container}>
            <img src={rifraichLogoImg} alt="Rifraich Logo" />
            <section>
                <BurgerMenuIcon size={32} />
            </section>
        </header>
    )
}

export default HeaderMobile;