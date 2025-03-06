import styles from '../../../styles/components/HeaderDesktop.module.scss';
import {Link} from "react-router-dom";
import RoundedButton from "../../pures/RoundedButton";
import rifraichLogoImg from "../../../assets/img/rifraich_logo.png";

const HeaderDesktop = () => {
    return (
        <header className={styles.container}>
            <Link className={styles.link} to="#">A propos de nous</Link>
            <Link className={styles.link} to="#">Nos engagements</Link>
            <img src={rifraichLogoImg} alt="Rifraich Logo" />
            <Link className={styles.link} to="#">Pourquoi nous choisir</Link>
            <RoundedButton text="Contactez-nous" buttonColor="#b8beff" textColor="#262D6A" />
        </header>
    )
}

export default HeaderDesktop;