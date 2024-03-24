import Navigation from "../Components/Navigation.jsx";
import Footer from "../Components/Footer.jsx";
import PhoneCard from "../Components/PhoneCard.jsx";
import LocationFrame from "../Components/LocationFrame.jsx";
import '../Styles/ContactPage/styles.css'

function Contact() {
    return (
        <div className="page-container">
            <Navigation/>

            <div className="main-section">
                <div className="contact-section">
                    <PhoneCard number="+40 722 730 076" />

                    <PhoneCard number="+40 763 485 181" />
                </div>

                <LocationFrame />
            </div>

            <Footer className="footer"/>
        </div>
    );
}

export default Contact;