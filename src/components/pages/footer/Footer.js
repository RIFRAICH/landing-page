import './Footer.css'

function Footer() {
    return (
        <footer>
            <section className="footer__sections">
                <div className="footer__left">
                    <h3>Demandez votre démonstration gratuite dès maintenant</h3>
                    <button className="footer__button">Contactez-nous</button>
                    <div className="footer__social">
                        <a href="#" className="footer__social-link"><i className="uil uil-instagram"></i></a>
                        <a href="#" className="footer__social-link"><i className="uil uil-facebook-f"></i></a>
                        {/* Tiktok et pintereset ne sont pas dans la librairie */}
                    </div>
                </div>
                <div className="footer__center">
                    <h4>La compagnie</h4>
                    <ul>
                        <li><a href="#" className="footer__link">À propos de nous</a></li>
                        <li><a href="#" className="footer__link">Nos engagements</a></li>
                        <li><a href="#" className="footer__link">Pourquoi nous choisir ?</a></li>
                    </ul>
                </div>
                <div className="footer__right">
                    <h4>Besoin d'aide ?</h4>
                    <ul>
                        <li><a href="#" className="footer__link">Vendre</a></li>
                        <li><a href="#" className="footer__link">Conditions générales de vente (CGV)</a></li>
                        <li><a href="#" className="footer__link">Contactez-nous</a></li>
                    </ul>
                </div>
            </section>
            <p className="footer__copyright">© 2025 RIFRAICH. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer;
