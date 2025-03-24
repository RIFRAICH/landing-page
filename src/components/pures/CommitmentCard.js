import styles from "../../styles/components/CommitmentCard.module.scss";

const CommitmentCard = ({ title, description, img, reverse = false }) => {
    return (
        <section className={styles.container} style={reverse ? {flexDirection: "row-reverse"} : {paddingLeft: 80}}>
            <section className={styles.textContainer} style={reverse ? {} : {paddingRight: '45%'}}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </section>
            <img className={styles.image} src={img} alt={title} />
        </section>
    )
}

export default CommitmentCard;