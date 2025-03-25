import styles from '../../styles/components/MainMobile.module.scss';
import RoundedButton from "../pures/RoundedButton";
import womanHomeImg from "../../assets/img/womanHome.png";
import ScrollingBanner from "../pures/ScollingBanner";

const MainMobile = () => {
    const handleButtonClick = (sectionId) => {
        window.location.href = `#${sectionId}`;
    }

    return (
        <main className={styles.main}>
            <section className={styles.mainContent}>
                <h1 className={styles.mainTitle}>La seconde main prend un nouveau souffle</h1>
                <p className={styles.mainDescription}>Simplifiez la gestion de votre boutique en ligne et concentrez-vous sur ce que vous aimez : la mode.</p>
                <section className={styles.mainContentButtonContainer}>
                    <RoundedButton
                        className={styles.mainContentButton}
                        buttonColor="#1F2BA6"
                        textColor="#FFF"
                        text="Commencer maintenant"
                        action={() => handleButtonClick('about')}
                    />
                </section>
            </section>
            <section className={styles.overlayContainer}>
                <section className={styles.mainOverlay} />
                <section className={styles.overlayImgContainer}>
                    <img src={womanHomeImg} alt="HomePage background" className={styles.mainOverlayImg} />
                </section>
            </section>
            <ScrollingBanner />
        </main>
    );
}

export default MainMobile;