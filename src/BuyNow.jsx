export default function BuyNow(props) {
    return (
        <a href="tel:0722 730 076" className="buyCard">
            <div>
                <em>{props.phoneNumber}</em>
            </div>
        </a>
    );
}