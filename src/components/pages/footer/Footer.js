import './Footer.css'
import {Link} from "react-router-dom";
import { InstagramIcon, FacebookIcon, PinterestIcon, TiktokIcon } from '../../../utils/Icons';
import { SOCIAL_FACEBOOK_URL, SOCIAL_INSTAGRAM_URL, SOCIAL_PINTEREST_URL, SOCIAL_TIKTOK_URL } from '../../../utils/Constants';

function Footer() {
    return (
        <footer>
            <section className="footer__sections">
                <div className="footer__left">
                    <h3>Demandez votre démonstration gratuite dès maintenant</h3>
                    <a href="#contact" className="footer__link"><button className="footer__button">Contactez-nous</button></a>
                    <div className="footer__social">
                        <Link to={SOCIAL_INSTAGRAM_URL} target="_blank"><InstagramIcon size={20}/></Link>
                        <Link to={SOCIAL_FACEBOOK_URL} target="_blank"><FacebookIcon size={20}/></Link>
                        <Link to={SOCIAL_PINTEREST_URL} target="_blank"><PinterestIcon size={20}/></Link>
                        <Link to={SOCIAL_TIKTOK_URL} target="_blank"><TiktokIcon size={20}/></Link>
                    </div>
                </div>
                <div className="footer__center">
                    <a href="#about" className="footer__link"><h4>À propos de nous</h4></a>
                    <ul>
                        <li><a href="/" className="footer__link">Notre mission</a></li>
                        <li><a href="/" className="footer__link">Durabilité</a></li>
                        <li><a href="/" className="footer__link">Le Blog RIFRAICH</a></li>
                    </ul>
                </div>
                <div className="footer__right">
                    <h4>Besoin d'aide ?</h4>
                    <ul>
                        <li><a href="/" className="footer__link">Vendre</a></li>
                        <li><a href="/" className="footer__link">Acheter</a></li>
                        <li><a href="/" className="footer__link">Retours</a></li>
                        <li><a href="/" className="footer__link">Conditions générales de vente (CGV)</a></li>
                        <li><a href="/" className="footer__link">Mentions légales et CGU</a></li>
                    </ul>
                </div>
            </section>
            <p className="footer__copyright">© 2025 RIFRAICH. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer;
