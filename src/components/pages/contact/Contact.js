import './Contact.css';
import { useState } from 'react';

function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        firstname: '',
        email: '',
        phone: '',
        type: '',
        subject: '',
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
                    firstname: '',
                    email: '',
                    phone: '',
                    type: '',
                    subject: '',
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
        <section id="contact" className="contact">
            <h2 className="contact__title">Nous contacter</h2>
            <form className="contact__form" onSubmit={handleSubmit}>
                <section className="contact__formsection">
                    <section className="contact__forminput">
                        <input type="text" id="name" name="name" placeholder="Nom" required value={formData.name} onChange={handleInputChange} />
                    </section>
                    <section className="contact__forminput">
                        <input type="text" id="firstname" name="firstname" placeholder="Prénom" required value={formData.firstname} onChange={handleInputChange} />
                    </section>
                </section>
                <section className="contact__formsection">
                    <section className="contact__forminput">
                        <input type="email" id="email" name="email" placeholder="Email" required value={formData.email} onChange={handleInputChange} />
                    </section>
                    <section className="contact__forminput">
                        <input type="text" id="phone" name="phone" placeholder="Téléphone" value={formData.phone} onChange={handleInputChange} />
                    </section>
                </section>
                <section className="contact__formsection">
                    <section className="contact__forminput">
                        <input type="type" id="type" name="type" placeholder="Votre demande concerne" required value={formData.email} onChange={handleInputChange} />
                    </section>
                    <section className="contact__forminput">
                        <input type="text" id="subject" name="subject" placeholder="Précisez l'objet de votre message" required value={formData.subject} onChange={handleInputChange} />
                    </section>
                </section>
                <section className="contact__forminput">
                    <textarea id="message" name="message" placeholder="Votre message" required value={formData.message} onChange={handleInputChange} />
                </section>
                <section className="contact__formsubmit">
                    <button className="contact__formsubmitbutton" type="submit">
                        Envoyer
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
