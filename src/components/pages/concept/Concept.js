import './Concept.css'
import pres from '../../../assets/img/pres.jpeg'
import about from '../../../assets/img/about.jpeg'
import concept from '../../../assets/img/concept.jpeg'
import {UilFileCheckAlt, UilHeadphones, UilStar} from "@iconscout/react-unicons";

function Concept(){
    return (
        <main id="concept" className="concept">
            <section>
                <h1 className="concept__title">Bienvenue chez RIFRAICH</h1>
                <p className="concept__description">RIFRAICH, c’est bien plus qu’une simple plateforme de vêtements de
                    seconde main. Nous sommes une jeune startup dédiée à transformer ton expérience de shopping. Notre
                    mission ? Te proposer des vêtements haut de gamme reconditionnés avec soin, pour que tu puisses te
                    faire plaisir tout en faisant un geste pour la planète.</p>
                <img src={pres} alt="Notre concept" className="concept__presimg"/>
            </section>
            <section>
                <h2 className="concept__abouttitle">Qui sommes nous ?</h2>
                <section className="concept__about">
                    <section className="concept__aboutcards">
                        <section className="concept__aboutcard">
                            <p className="concept__aboutcardnumber">1.</p>
                            <h3 className="concept__aboutcardtitle">Notre Valeur Ajoutée</h3>
                            <p className="concept__aboutcarddescription">Chez RIFRAICH, chaque vêtement a droit à une
                                seconde chance. Nous rachetons des pièces de qualité, que nous réparons, lavons et
                                séchons méticuleusement. Ensuite, chaque article est soigneusement emballé dans un
                                packaging design, estampillé à notre marque, pensé et conçu pour offrir une expérience
                                de découverte exceptionnelle.</p>
                        </section>
                        <section className="concept__aboutcard">
                            <p className="concept__aboutcardnumber">2.</p>
                            <h3 className="concept__aboutcardtitle">L'Expérience RIFRAICH</h3>
                            <p className="concept__aboutcarddescription">Nous savons que pour toi, l'expérience d'achat
                                est essentielle. C'est pourquoi nos équipes ont travaillé dur pour que chaque étape soit
                                aussi excitante et plaisante que l’achat d’un article neuf. Chaque détail compte, du
                                choix des tissus à la qualité de l’emballage, pour que tu aies l'impression de déballer
                                un trésor, tout en sachant que tu fais un geste pour la planète.</p>
                        </section>
                        <section className="concept__aboutcard">
                            <p className="concept__aboutcardnumber">3.</p>
                            <h3 className="concept__aboutcardtitle">Agir pour Demain</h3>
                            <p className="concept__aboutcarddescription">Chez RIFRAICH, nous croyons en une mode durable
                                et circulaire. En choisissant RIFRAICH, tu rejoins une communauté de consommateurs
                                responsables qui souhaitent agir pour demain. Grâce à toi, nous pouvons continuer à
                                donner une nouvelle vie aux vêtements et réduire notre impact environnemental, tout en
                                restant stylé(e) !</p>
                        </section>
                    </section>
                    <img src={about} alt="A propos de nous" className="concept__aboutimg"/>
                </section>
            </section>
            <section>
                <h2 className="concept__concepttitle">Le concept de RIFRAICH repose sur trois piliers fondamentaux :</h2>
                <section className="concept__conceptcards">
                    <section className="concept__conceptcard">
                        <section className="concept__conceptcardheader">
                            <UilStar/>
                            <h3 className="concept__conceptcardtitle">Sélection rigoureuse</h3>
                        </section>
                        <p className="concept__conceptcarddescription">Nous ne proposons que des vêtements d'occasion en
                            excellent état, soigneusement sélectionnés pour leur qualité, leur style et leur
                            intemporalité.</p>
                    </section>
                    <section className="concept__conceptcard">
                        <section className="concept__conceptcardheader">
                            <UilFileCheckAlt/>
                            <h3 className="concept__conceptcardtitle">Reconditionnement méticuleux</h3>
                        </section>
                        <p className="concept__conceptcarddescription">Chaque vêtement est soigneusement inspecté et
                            reconditionné pour répondre à nos normes de qualité élevées. Nous nous assurons ainsi que tu
                            reçois des pièces impeccables, prêtes à être portées et aimées pendant de nombreuses
                            années.</p>
                    </section>
                    <section className="concept__conceptcard">
                        <section className="concept__conceptcardheader">
                            <UilHeadphones/>
                            <h3 className="concept__conceptcardtitle">Service client irréprochable</h3>
                        </section>
                        <p className="concept__conceptcarddescription">Nous sommes passionnés par la mode durable et
                            nous nous engageons à offrir à nos clients une expérience d'achat exceptionnelle. Notre
                            équipe est toujours disponible pour te conseiller et t’aider à trouver les pièces qui te
                            correspondent.</p>
                    </section>
                </section>
                <img src={concept} alt="Notre concept" className="concept__conceptimg"/>
            </section>
        </main>
    )
}

export default Concept;