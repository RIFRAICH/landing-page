import styles from '../../styles/components/MainMobile.module.scss';
import RoundedButton from "../pures/RoundedButton";

const MainMobile = () => {
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
                    />
                </section>
            </section>
        </main>
    );
}

export default MainMobile;