import styles from '../styles/pages/Home.module.scss';
import RoundedButton from "../components/pures/RoundedButton";
import womanHomeImg from '../assets/img/womanHome.png';

function HomePage(){
    return (
        <>
            <main className={styles.main}>
                <section className={styles.mainWhiteSection} />
                <section className={styles.mainBlueSection} />
                <section className={styles.mainOverlay}>
                    <section className={styles.mainOverlayContent}>
                        <h1 className={styles.mainTitle}>
                            <span className={styles.mainTitleBlack}>RIFR</span>
                            <span className={styles.mainTitleWhite}>AICH</span>
                        </h1>
                        <section className={styles.mainContent}>
                            <h2 className={styles.mainContentTitle}>Ton dressing unique, à deux pas de chez toi</h2>
                            <p className={styles.mainContentDescription}>Simplifiez la gestion de votre boutique en ligne et concentrez-vous sur ce que vous aimez : la mode.</p>
                            <section className={styles.mainContentButtonContainer}>
                                <RoundedButton
                                    className={styles.mainContentButton}
                                    buttonColor="#1F2BA6"
                                    textColor="#FFF"
                                    text="Commencer maintenant"
                                />
                            </section>
                        </section>
                    </section>
                    <section className={styles.mainOverlayImgContainer}>
                        <img src={womanHomeImg} alt="HomePage background" className={styles.mainOverlayImg}/>
                    </section>
                </section>
            </main>
        </>
    );
}

export default HomePage;
