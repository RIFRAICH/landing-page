import './Footer.css'
import logoWhite from '../../../assets/img/logo-white.png'

function Footer() {
    return (
        <footer>
            <section className="footer__sections">
                <img src={logoWhite} alt="Logo RIFRAICH" className="footer__logo"/>
                <ul>
                    <li className="footer__text"><a className="footer__link" href="#concept">Notre concept</a></li>
                    <li className="footer__text"><a className="footer__link" href="#index">Comment ça marche ?</a></li>
                    <li className="footer__text"><a className="footer__link" href="#why">Pourquoi nous choisir</a></li>
                </ul>
                <ul>
                    <li className="footer__text"><a className="footer__link" href="https://blog.rifraich.fr"
                                                    target="_blank">Blog</a>
                    </li>
                    <li className="footer__text"><a className="footer__link" href="https://status.rifraich.fr"
                                                    target="_blank">État des
                        services</a>
                    </li>
                </ul>
            </section>
            <hr className="footer__spacer"/>
            <a href="#index" className="footer__text footer__link">Mentions légales</a>
            <p className="footer__text">©2024 RIFRAICH - Angers, France</p>
        </footer>
    )
}

export default Footer;