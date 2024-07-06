import './Contact.css'
import UilMessage from "@iconscout/react-unicons/icons/uil-message";

function Contact() {
    return (
        <section className="contact">
            <h2 className="contact__title">Contacte-nous !</h2>
            <p className="contact__description">RIFRAICH est à ton écoute. N'hésite pas à nous contacter pour toute
                question, commentaire ou suggestion.</p>
            <form className="contact__form">
                <section className="contact__formsection">
                    <section className="contact__forminput">
                        <label htmlFor="name">Nom<span>*</span> :</label>
                        <input type="text" id="name" name="name" placeholder="Nom" required/>
                    </section>
                    <section className="contact__forminput">
                        <label htmlFor="email">Email<span>*</span> :</label>
                        <input type="email" id="email" name="email" placeholder="Email" required/>
                    </section>
                </section>
                <section className="contact__formsection">
                    <section className="contact__forminput">
                        <label htmlFor="subject">Sujet<span>*</span> :</label>
                        <input type="text" id="subject" name="subject" placeholder="Object" required/>
                    </section>
                    <section className="contact__forminput">
                        <label htmlFor="phone">Téléphone :</label>
                        <input type="text" id="phone" name="phone" placeholder="Téléphone"/>
                    </section>
                </section>
                <section className="contact__forminput">
                    <label htmlFor="message">Message<span>*</span> :</label>
                    <textarea id="message" name="message" placeholder="Message" required/>
                </section>
                <section className="contact__formsubmit">
                    <button className="contact__formsubmitbutton" type="submit">
                        Envoyer
                        <UilMessage/>
                    </button>
                </section>
            </form>
        </section>
    )
}

export default Contact;