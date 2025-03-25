import styles from '../../../styles/components/HeaderDesktop.module.scss';
import {Link} from "react-router-dom";
import RoundedButton from "../../pures/RoundedButton";
import rifraichLogoImg from "../../../assets/img/rifraich_logo.png";

const HeaderDesktop = () => {
    const handleLinkClick = (sectionId) => {
        window.location.href = `#${sectionId}`;
    }

    return (
        <header className={styles.container}>
            <Link className={styles.link} onClick={() => handleLinkClick("about")}>A propos de nous</Link>
            <Link className={styles.link} onClick={() => handleLinkClick("commitment")}>Nos engagements</Link>
            <img src={rifraichLogoImg} alt="Rifraich Logo" />
            <Link className={styles.link} onClick={() => handleLinkClick("commitment")}>Pourquoi nous choisir</Link>
            <RoundedButton text="Contactez-nous" buttonColor="#b8beff" textColor="#262D6A" action={() => handleLinkClick("contact")} />
        </header>
    )
}

export default HeaderDesktop;