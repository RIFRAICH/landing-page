import styles from "../styles/pages/LegalPage.module.scss";

const LegalPage = () => {
    return (
        <main className={styles.container}>
            <h1 className={styles.mainTitle}>Mentions légales</h1>
            <section className={styles.mainSection}>
                <h2 className={styles.mainSubtitle}>Éditeur du site</h2>
                <p>RIFRAICH</p>
                <p>Adresse : 12 rue Georges Mandel, 49000 Angers, France</p>
                <a className={styles.mainLink} href="mailto:contact@rifraich.fr">contact@rifraich.fr</a>
                <p>Directeur de la publication : RIFRAICH</p>
            </section>
            <section className={styles.mainSection}>
                <h2 className={styles.mainSubtitle}>Hébergeur</h2>
                <p>OVHcloud</p>
                <p>Siège social : 2 rue Kellermann - 59100 Roubaix - France</p>
                <p>OVH SAS est une filiale de la société OVH Groupe SA, société immatriculée au RCS de Lille sous le numéro 537 407 926 sise 2, rue Kellermann, 59100 Roubaix.</p>
            </section>
            <section className={styles.mainSection}>
                <h2 className={styles.mainSubtitle}>Informations légales</h2>
                <p>Rifraich est un concensus d'étudiants composé de six personnes.</p>
            </section>
            <section className={styles.mainSection}>
                <h2 className={styles.mainSubtitle}>Propriété intellectuelle</h2>
                <p>Le contenu de ce site web, incluant textes, graphiques, logos et images, est protégé par des droits de propriété intellectuelle appartenant à RIFRAICH ou à des tiers ayant autorisé son utilisation. Certaines images sont utilisées sous licence ou avec autorisation, et les droits restent la propriété de leurs titulaires respectifs. Toute reproduction, distribution, modification ou utilisation non autorisée du contenu est strictement interdite.</p>
            </section>
            <section className={styles.mainSection}>
                <h2 className={styles.mainSubtitle}>Données personnelles et RGPD</h2>
                <p>Conformément au Règlement Général sur la Protection des Données (RGPD), RIFRAICH collecte et traite vos données personnelles de manière transparente et sécurisée. Les informations susceptibles d’être collectées incluent :</p>
                <ul className={styles.mainList}>
                    <li>Newsletter : votre adresse email lors de l’inscription.</li>
                    <li>Formulaire de contact : les informations recueillies comprennent le nom, le prénom, l’adresse email et le numéro de téléphone (optionnel).</li>
                    <li>Cookies : utilisés pour analyser et améliorer les performances du site.</li>
                </ul>
                <p>Le responsable du traitement des données est RIFRAICH.</p>
                <p>Vous disposez de droits concernant vos données personnelles, notamment le droit d’accès, de rectification, d’opposition et de suppression. Pour exercer ces droits, veuillez nous contacter à l’adresse suivante : <a className={styles.mainLink} href="mailto:contact@rifraich.fr">contact@rifraich.fr</a>.</p>
            </section>
            <section className={styles.mainSection}>
                <h2 className={styles.mainSubtitle}>Responsabilité</h2>
                <p>RIFRAICH ne saurait être tenu responsable des dommages causés par un mauvais usage du site, une indisponibilité temporaire ou tout piratage des données malgré les mesures de sécurité mises en place.</p>
            </section>
        </main>
    );
}

export default LegalPage;