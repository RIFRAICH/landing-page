import styles from '../../styles/components/TitleSection.module.scss';

const TitleSection = ({title, subtitle}) => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{subtitle}</p>
        </section>
    )
}

export default TitleSection;