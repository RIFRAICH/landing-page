import styles from "../../styles/components/AboutCard.module.scss";

const AboutCard = ({ icon, title, description }) => {
  return (
    <section className={styles.container}>
      {icon}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </section>
  );
};

export default AboutCard;
