import styles from "../styles/pages/Home.module.scss";
import MainDesktop from "../components/main/MainDesktop";
import useIsTablet from "../hooks/useIsTablet";
import MainMobile from "../components/main/MainMobile";
import TitleSection from "../components/pures/TitleSection";
import AboutCard from "../components/pures/AboutCard";
import {ChartIcon, PackageIcon, PlugsIcon} from "../utils/Icons";
import CommitmentCard from "../components/pures/CommitmentCard";
import manJacketImg from "../assets/img/manJacket.png";
import womanStrawberryImg from "../assets/img/womanStrawberry.png";

function HomePage(){
    const isTablet = useIsTablet();

    return (
        <>
            {isTablet ? <MainMobile /> : <MainDesktop />}
            <section id="about" className={styles.aboutContainer}>
                <TitleSection title="A propos de nous" subtitle="Rifraich vous offre une solution clé en main pour développer votre activité" />
                <section className={styles.aboutCards}>
                    <AboutCard icon={<ChartIcon />} title="Augmentez la visibilité de votre boutique" description="Bénéficiez d'une vitrine en ligne qui vous permettra d'atteindre une clientèle plus large et de développer votre notoriété" />
                    <AboutCard icon={<PlugsIcon />} title="Gérez facilement votre stock" description="Simplifiez votre gestion de stock avec notre interface intuitive et suivez en temps réel vos ventes et vos stocks" />
                    <AboutCard icon={<PackageIcon />} title="Nous nous occupons de la livraison et du paiement*" description="Concentrez-vous sur votre activité. Nous prenons en charge la livraison et le paiement de vos commandes pour vous offrir une tranquillité d'esprit totale" />
                </section>
            </section>
            <section id="commitment" className={styles.commitmentContainer}>
                <TitleSection title="Nos engagements" subtitle="La seconde main, c'est notre passion" />
                <section className={styles.commitmentCards}>
                    <CommitmentCard title="Dynamiser la mode seconde main à Angers" description="Nous croyons en la force du lien local. Notre plateforme est conçue pour mettre en valeur la diversité des styles et des univers de chaque boutique, créant ainsi un réseau solidaire où chaque acteur trouve sa place." img={manJacketImg} />
                </section>
            </section>
        </>
    );
}

export default HomePage;
