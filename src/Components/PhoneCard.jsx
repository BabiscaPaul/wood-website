import {TelephoneFill} from "react-bootstrap-icons";
import PropTypes from "prop-types";

const PhoneCard = (props) => {
    return (
        <a className="phone-number" href={`tel: ${props.number}`}>
            <TelephoneFill className="telephone-icon m-4" color="#fff" size={40}/>
            <span className="phone-number-text">{props.number}</span>
        </a>
    );
}

PhoneCard.propTypes = {
    number: PropTypes.string.isRequired,
};

export default PhoneCard;