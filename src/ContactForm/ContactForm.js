import './ContactForm.css'

function ContactForm() {
    return (
        <div className="ContactForm-Section">

            <div className="ContactForm">
                <h6 className="ContactForm-text"> Kontakt Formulär </h6>
                <p className="ContactForm-bodytext"> Ifall du är intresserad utav vårt arbete eller har någon fråga tveka inte kontakta oss </p>
            </div>

            <div className="Form">
                <input placeholder="Ditt Namn"></input>
                <input placeholder="Mail"></input>
                <input placeholder="Ditt meddelande"></input>


            
            </div>

        




       </div>
    )
}

export default ContactForm;