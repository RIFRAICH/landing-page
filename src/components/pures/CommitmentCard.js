import styles from "../../styles/components/CommitmentCard.module.scss";

const CommitmentCard = ({ title, description, img }) => {
    return (
        <section className={styles.container}>
            <h3>{title}</h3>
        </section>
    )
}

export default CommitmentCard;