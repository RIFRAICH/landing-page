import './Header.css';
import Logo from '../../assets/img/logo.png';

function Header(){
    return (
        <header>
            <a href="#"><img className="header__logo" src={Logo} alt="Logo RIFRAICH" /></a>
            <nav>
                <ul>
                    <li><a className="header__link" href="#">Notre concept</a></li>
                    <li><a className="header__link" href="#">Comment ça marche ?</a></li>
                    <li><a className="header__link" href="#">Pourquoi nous choisir</a></li>
                </ul>
            </nav>
            <a class="header__link" href="#">Contact</a>
        </header>
    )
}

export default Header;