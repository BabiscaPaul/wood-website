import {GeoAltFill} from "react-bootstrap-icons";

const LocationFrame = () => {
    return (
        <div className="location-section">
            <div className="location-info">
                <GeoAltFill color="white" size={50}/>
                <p>Locatia Depozitului</p>
            </div>

            <iframe
                className="location-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89104.13792576124!2d21.1340182841387!3d45.74103481056414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4745677dcb0fb5a7%3A0x537faf6473936749!2sTimi%C8%99oara!5e0!3m2!1sro!2sro!4v1711210980912!5m2!1sro!2sro"
                width="600" height="450" allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="deposit-location">
            </iframe>
        </div>
    );
}

export default LocationFrame;