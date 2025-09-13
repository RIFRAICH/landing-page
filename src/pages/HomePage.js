import styles from "../styles/pages/Home.module.scss";
import MainDesktop from "../components/main/MainDesktop";
import useIsTablet from "../hooks/useIsTablet";
import MainMobile from "../components/main/MainMobile";
import TitleSection from "../components/pures/TitleSection";
import AboutCard from "../components/pures/AboutCard";
import {
  ArrowUpRightIcon,
  ChartIcon,
  PackageIcon,
  PlugsIcon,
} from "../utils/Icons";
import CommitmentCard from "../components/pures/CommitmentCard";
import manJacketImg from "../assets/img/manJacket.png";
import womanStrawberryImg from "../assets/img/womanStrawberry.png";
import manWomanJacketJeansImg from "../assets/img/manWomanJacketJeans.png";
import RoundedButton from "../components/pures/RoundedButton";
import InputLabel from "../components/pures/InputLabel";
import { showToast } from "../utils/Toast";

function HomePage() {
  const isTablet = useIsTablet();

  const handleContactForm = async (event) => {
    event.preventDefault();
    const formData = {
      lastname: document.getElementById("lastname").value,
      firstname: document.getElementById("firstname").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    try {
      const response = await fetch("mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        showToast("Votre message a été envoyé !");

        document.getElementById("lastname").value = "";
        document.getElementById("firstname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
      } else {
        showToast("Une erreur est survenue", "error");
      }
    } catch (error) {
      showToast("Une erreur est survenue", "error");
    }
  };

  return (
    <>
      {isTablet ? <MainMobile /> : <MainDesktop />}
      <section id="about" className={styles.aboutContainer}>
        <TitleSection
          title="A propos de nous"
          subtitle="Rifraich vous offre une solution clé en main pour développer votre activité"
        />
        <section className={styles.aboutCards}>
          <AboutCard
            icon={<ChartIcon />}
            title="Augmentez la visibilité de votre boutique"
            description="Bénéficiez d'une vitrine en ligne qui vous permettra d'atteindre une clientèle plus large et de développer votre notoriété"
          />
          <AboutCard
            icon={<PlugsIcon />}
            title="Gérez facilement votre stock"
            description="Simplifiez votre gestion de stock avec notre interface intuitive et suivez en temps réel vos ventes et vos stocks"
          />
          <AboutCard
            icon={<PackageIcon />}
            title="Nous nous occupons de la livraison et du paiement*"
            description="Concentrez-vous sur votre activité. Nous prenons en charge la livraison et le paiement de vos commandes pour vous offrir une tranquillité d'esprit totale"
          />
        </section>
      </section>
      <section id="commitment" className={styles.commitmentContainer}>
        <TitleSection
          title="Nos engagements"
          subtitle="La seconde main, c'est notre passion"
        />
        <section className={styles.commitmentCards}>
          <CommitmentCard
            title="Dynamiser la mode seconde main à Angers"
            description="Nous croyons en la force du lien local. Notre plateforme est conçue pour mettre en valeur la diversité des styles et des univers de chaque boutique, créant ainsi un réseau solidaire où chaque acteur trouve sa place."
            img={manJacketImg}
          />
          <CommitmentCard
            title="Une nouvelle expérience pour la seconde main"
            description="Nous sommes convaincus que la mode seconde main mérite une expérience d'achat à la hauteur de vos attentes. C'est pourquoi nous nous engageons à offrir à nos clients une sélection rigoureuse de pièces, un emballage soigné et un service client personnalisé."
            img={womanStrawberryImg}
            reverse
          />
          <CommitmentCard
            title="Ensemble, faisons rayonner la mode seconde main"
            description="Nous sommes convaincus que l'union fait la force. En regroupant les friperies angevines sur une seule plateforme, nous créons un écosystème dynamique où chacun peut bénéficier de l'expertise des autres."
            img={manWomanJacketJeansImg}
          />
        </section>
      </section>
      <section className={styles.ctaShopContainer}>
        <p className={styles.ctaShopTitle}>
          Prêt à révolutionner votre manière de vendre des vêtements d'occasion
          ?
        </p>
        <section className={styles.ctaShopContent}>
          <p className={styles.ctaShopDescription}>
            Rejoignez une communauté de fripiers passionnés et dynamiques.
          </p>
          <section className={styles.ctaShopButtons}>
            <RoundedButton
              buttonColor="#262D6A"
              textColor="#FFF"
              text="Lancez-vous"
              className={styles.ctaShopGoButton}
            />
            <RoundedButton
              buttonColor="transparent"
              textColor="#262D6A"
              text="En savoir plus"
              className={styles.ctaShopSeeMoreButton}
              icon={<ArrowUpRightIcon />}
            />
          </section>
        </section>
      </section>
      <section id="contact" className={styles.contactContainer}>
        <h2 className={styles.contactTitle}>Nous contacter</h2>
        <form className={styles.contactForm} onSubmit={handleContactForm}>
          <section className={styles.contactSection}>
            <InputLabel
              className={styles.contactInput}
              id="lastname"
              type="text"
              placeholder="Nom"
              required
            />
            <InputLabel
              className={styles.contactInput}
              id="firstname"
              type="text"
              placeholder="Prénom"
              required
            />
          </section>
          <section className={styles.contactSection}>
            <InputLabel
              className={styles.contactInput}
              id="email"
              type="email"
              placeholder="Email"
              required
            />
            <InputLabel
              className={styles.contactInput}
              id="phone"
              type="tel"
              placeholder="Téléphone"
            />
          </section>
          <section className={styles.contactSection}>
            <InputLabel
              className={styles.contactInput}
              id="subject"
              type="text"
              placeholder="Objet"
              required
            />
          </section>
          <section className={styles.contactSection}>
            <InputLabel
              className={styles.contactInput}
              id="message"
              type="text"
              placeholder="Votre message"
              textarea
              required
            />
          </section>
          <RoundedButton
            className={styles.contactButton}
            buttonColor="#1F2BA6"
            textColor="#FFF"
            text="Envoyer"
            type="submit"
          />
        </form>
      </section>
    </>
  );
}

export default HomePage;
