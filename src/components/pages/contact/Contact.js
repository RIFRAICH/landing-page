import './Contact.css';
import UilMessage from "@iconscout/react-unicons/icons/uil-message";
import { useState } from 'react';

function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });
    const [formSuccess, setFormSuccess] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('mail.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams(formData).toString()
            });

            if (response.ok) {
                setFormSuccess(true);
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    phone: '',
                    message: ''
                });
            } else {
                console.error('Erreur lors de l\'envoi du formulaire');
            }
        } catch (error) {
            console.error('Erreur réseau :', error);
        }
    };

    return (
        <section className="contact">
            <h2 className="contact__title">Contacte-nous !</h2>
            <p className="contact__description">RIFRAICH est à ton écoute. N'hésite pas à nous contacter pour toute question, commentaire ou suggestion.</p>
            <form className="contact__form" onSubmit={handleSubmit}>
                <section className="contact__formsection">
                    <section className="contact__forminput">
                        <label htmlFor="name">Nom<span>*</span> :</label>
                        <input type="text" id="name" name="name" placeholder="Nom" required value={formData.name} onChange={handleInputChange} />
                    </section>
                    <section className="contact__forminput">
                        <label htmlFor="email">Email<span>*</span> :</label>
                        <input type="email" id="email" name="email" placeholder="Email" required value={formData.email} onChange={handleInputChange} />
                    </section>
                </section>
                <section className="contact__formsection">
                    <section className="contact__forminput">
                        <label htmlFor="subject">Sujet<span>*</span> :</label>
                        <input type="text" id="subject" name="subject" placeholder="Objet" required value={formData.subject} onChange={handleInputChange} />
                    </section>
                    <section className="contact__forminput">
                        <label htmlFor="phone">Téléphone :</label>
                        <input type="text" id="phone" name="phone" placeholder="Téléphone" value={formData.phone} onChange={handleInputChange} />
                    </section>
                </section>
                <section className="contact__forminput">
                    <label htmlFor="message">Message<span>*</span> :</label>
                    <textarea id="message" name="message" placeholder="Message" required value={formData.message} onChange={handleInputChange} />
                </section>
                <section className="contact__formsubmit">
                    <button className="contact__formsubmitbutton" type="submit">
                        Envoyer
                        <UilMessage />
                    </button>
                </section>
                {formSuccess && (
                    <p className="contact__formsuccess">Votre message a bien été envoyé !</p>
                )}
            </form>
        </section>
    )
}

export default Contact;
