import './Header.css';
import Logo from '../../../assets/img/logo.png';
import BlueButton from "../../blue-button/BlueButton";

function Header(){
    return (
        <header>
            <a className="header__logo" href="#"><img className="header__logoimg" src={Logo} alt="Logo RIFRAICH" /></a>
            <nav>
                <ul>
                    <li><a className="header__link header__navlink" href="#concept">Notre concept</a></li>
                    <li><a className="header__link header__navlink" href="#">Comment ça marche ?</a></li>
                    <li><a className="header__link header__navlink" href="#">Pourquoi nous choisir</a></li>
                </ul>
                <BlueButton link="#" label="Contact" />
            </nav>
        </header>
    )
}

export default Header;