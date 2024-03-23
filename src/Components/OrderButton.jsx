import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";

const OrderButton = () => {
    return (
        <em>
            <b>
                <Link to="/contact" className="order-button">Comanda Acum!</Link>
            </b>
        </em>

    );
};

export default OrderButton;