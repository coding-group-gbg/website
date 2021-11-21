import './ContactForm.css'

function ContactForm() {
    return (
        <div className="ContactForm-Section">

            <div className="ContactForm">
                <h6 className="ContactForm-text"> Kontakt Formulär </h6>
                <p className="ContactForm-bodytext"> Ifall du är intresserad utav vårt arbete eller har någon fråga tveka inte att kontakta oss! </p>
            </div>

            <div className="Form">
                <label> Namn </label> 
                <input class="Form-name" placeholder="Ditt Namn"></input>
                <label> Mail </label>
                <input class="Form-mail" placeholder=" Ditt Mail"></input>
                <label> Meddelande </label>
                <input class="Form-message" placeholder="Ditt meddelande"></input>
                <button class="Submit-button" > Skicka</button>


            
            </div>

        




       </div>
    )
}

export default ContactForm;