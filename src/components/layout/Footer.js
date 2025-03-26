import styles from '../../styles/components/Footer.module.scss';
import RoundedButton from "../pures/RoundedButton";
import {FacebookIcon, InstagramIcon, PinterestIcon, TiktokIcon} from "../../utils/Icons";
import {Link} from "react-router-dom";
import {showToast} from "../../utils/Toast";
import {
    BLOG_URL,
    SOCIAL_FACEBOOK_URL,
    SOCIAL_INSTAGRAM_URL,
    SOCIAL_PINTEREST_URL,
    SOCIAL_TIKTOK_URL,
    STATUS_URL
} from "../../utils/Constants";
import {registerToNewsletter} from "../../services/publicService";

const Footer = () => {
    const handleLinkClick = (nav) => {
        window.location.href = `${nav}`;
    }

    const handleRegisterNewsletter = (event) => {
        event.preventDefault();
        const email = document.getElementById('newsletter-email').value;
        registerToNewsletter(email).then(r => {
            showToast("Inscription réussie ! Merci de rejoindre notre newsletter.");
        }).catch(e => {
            showToast("Une erreur est survenue, merci de réessayer plus tard.", "error");
        });
        document.getElementById('newsletter-email').value = '';
    }

    return (
        <footer className={styles.footer}>
            <section className={styles.footerSections}>
                <section className={styles.newsletterSection}>
                    <h2 className={styles.newsletterTitle}>Inscrits-toi à notre newsletter</h2>
                    <p className={styles.newsletterDescription}>
                        Tu adores chiner des trésors cachés ? Notre newsletter est
                        faite pour toi ! On te dévoile nos coups de cœur, les nouveaux arrivages et des actualités
                        friperie
                    </p>
                    <form className={styles.newsletterForm} id="newsletter-form" onSubmit={handleRegisterNewsletter}>
                        <input className={styles.newsletterInput} type="email" id="newsletter-email"
                               placeholder="Ton adresse email" required/>
                        <RoundedButton text="S'inscrire" textColor="#FFF" buttonColor="#1F2BA6" type="submit"/>
                    </form>
                    <section className={styles.newsletterSocials}>
                        <Link to={SOCIAL_INSTAGRAM_URL} target="_blank"><InstagramIcon/></Link>
                        <Link to={SOCIAL_FACEBOOK_URL} target="_blank"><FacebookIcon/></Link>
                        <Link to={SOCIAL_PINTEREST_URL} target="_blank"><PinterestIcon/></Link>
                        <Link to={SOCIAL_TIKTOK_URL} target="_blank"><TiktokIcon/></Link>
                    </section>
                </section>
                <section>
                    <h2 className={styles.footerSectionTitle}>A propos de nous</h2>
                    <section className={styles.footerSectionLinks}>
                        <Link className={styles.footerLink} onClick={() => handleLinkClick("#about")}>Notre mission</Link>
                        <Link className={styles.footerLink} onClick={() => handleLinkClick("#commitment")}>Engagements</Link>
                        <Link className={styles.footerLink} to={BLOG_URL} target="_blank">Le Blog RIFRAICH</Link>
                    </section>
                </section>
                <section>
                    <h2 className={styles.footerSectionTitle}>Besoin d'aide ?</h2>
                    <section className={styles.footerSectionLinks}>
                        <Link className={styles.footerLink} to={STATUS_URL} target="_blank">État des services</Link>
                        <Link className={styles.footerLink} onClick={() => handleLinkClick("mentions-legales")}>Mentions légales</Link>
                        <Link className={styles.footerLink} onClick={() => handleLinkClick("#contact")}>Nous contacter</Link>
                    </section>
                </section>
            </section>
            <p className={styles.copyright}>© 2025 RIFRAICH. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;