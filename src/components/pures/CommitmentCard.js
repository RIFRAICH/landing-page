import styles from "../../styles/components/CommitmentCard.module.scss";

const CommitmentCard = ({ title, description, img, reverse = false }) => {
    const containerClass = `${styles.container} ${reverse ? styles.containerReverse : styles.containerNoReverse}`;
    const textContainerClass = `${styles.textContainer} ${reverse ? styles.textContainerReverse : styles.textContainerNoReverse}`;
    const imageClass = `${styles.image} ${reverse ? styles.imageReverse : styles.imageNoReverse}`;

    return (
        <section className={containerClass}>
            <section className={textContainerClass}>
                <h3 className={`${styles.title} ${reverse ? styles.textRight : ''}`}>{title}</h3>
                <p className={`${styles.description} ${reverse ? styles.textRight : ''}`}>{description}</p>
            </section>
            <img className={imageClass} src={img} alt={title} />
        </section>
    )
}

export default CommitmentCard;