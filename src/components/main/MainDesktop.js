import styles from "../../styles/components/MainDesktop.module.scss";
import RoundedButton from "../pures/RoundedButton";
import womanHomeImg from "../../assets/img/womanHome.png";
import ScrollingBanner from "../pures/ScollingBanner";

const MainDesktop = () => {
    return (
        <main className={styles.main}>
            <section className={styles.mainWhiteSection} />
            <section className={styles.mainBlueSection} />
            <section className={styles.mainOverlay}>
                <section className={styles.mainOverlayContent}>
                    <h1 className={styles.mainTitle}>
                        <span className={styles.mainTitleBlack}>La seconde main</span>
                        <span className={styles.mainTitleWhite}>prend un nouveau souffle</span>
                    </h1>
                    <section className={styles.mainContent}>
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
            <ScrollingBanner />
        </main>
    )
}

export default MainDesktop;