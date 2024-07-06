import './Why.css'
import UilWallet from "@iconscout/react-unicons/icons/uil-wallet";
import {UilHeadphones, UilStar} from "@iconscout/react-unicons";
import why from '../../../assets/img/why.jpeg'

function Why(){
    return (
        <section id="why" className="why">
            <h2 className="why__title">Pourquoi choisir RIFRAICH ?</h2>
            <section className="why__cards">
                <section className="why__card">
                    <section className="why__cardicon">
                        <UilWallet size={30}/>
                    </section>
                    <p className="why__carddescription why__carddescription-with-footer">Envoi tes vêtements
                        gratuitement par colis et reçois ta
                        rémunération*</p>
                    <p className="why__cardfooter">*Sous forme de crédit (bon d’achat) à dépenser sur RIFRAICH, après la
                        validation de l’équipe</p>
                </section>
                <section className="why__card">
                    <section className="why__cardicon">
                        <UilStar size={30}/>
                    </section>
                    <p className="why__carddescription">Une expérience d'achat unique, comme si tu achetais du neuf.</p>
                </section>
                <section className="why__card">
                    <section className="why__cardicon">
                        <UilHeadphones size={30} />
                    </section>
                    <p className="why__carddescription">Un service client irréprochable, pour une expérience d'achat
                        sans stress.</p>
                </section>
                <section className="why__card">
                    <section className="why__cardicon">
                        <UilStar size={30} />
                    </section>
                    <p className="why__carddescription">Des vêtements d'occasion premium, triés sur le volet pour leur
                        qualité et leur intemporalité.</p>
                </section>
            </section>
            <img src={why} alt="Pourquoi choisir RIFRAICH ?" className="why__img"/>
        </section>
    )
}

export default Why;