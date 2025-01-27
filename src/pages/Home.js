import styles from '../styles/pages/Home.module.scss';
import {Link} from "react-router-dom";
import {SOCIAL_FACEBOOK_URL, SOCIAL_INSTAGRAM_URL, SOCIAL_PINTEREST_URL, SOCIAL_TIKTOK_URL} from "../utils/Constants";
import {FacebookIcon, InstagramIcon, PinterestIcon, StarIcon, TiktokIcon} from "../utils/Icons";

function Home(){
    return (
        <main className={styles.main}>
            <p className={styles.mainText}>Encore un instant...<br />On règle les derniers détails<br />(et les ourlets) !</p>
            <section className={styles.socialsContainer}>
                <p className={styles.socialText}>En attendant, vous pouvez nous suivre sur les réseaux sociaux :</p>
                <section className={styles.socialLinksContainer}>
                    <Link to={SOCIAL_INSTAGRAM_URL} target="_blank"><InstagramIcon size={32}/></Link>
                    <Link to={SOCIAL_FACEBOOK_URL} target="_blank"><FacebookIcon size={32}/></Link>
                    <Link to={SOCIAL_PINTEREST_URL} target="_blank"><PinterestIcon size={32}/></Link>
                    <Link to={SOCIAL_TIKTOK_URL} target="_blank"><TiktokIcon size={32}/></Link>
                </section>
            </section>
        </main>
    );
}

export default Home;