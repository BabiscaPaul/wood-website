import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import '../Styles/ContactPage/styles.css'; 

function PretLemne() {
    const pricingData = [
        { size: "25 cm", price: "750 lei" },
        { size: "30 cm", price: "725 lei" },
        { size: "50 cm", price: "700 lei" },
    ];

    const containerStyle = {
        marginTop: "100px",
        padding: "40px",
        textAlign: "center",
        fontFamily: "Baskerville",
        color: "white",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        borderRadius: "10px",
        margin: "50px auto",
        maxWidth: "800px",
    };

    const tableStyle = {
        width: "100%",
        borderCollapse: "collapse",
        margin: "20px 0",
    };

    const thTdStyle = {
        padding: "15px",
        border: "2px solid white",
        fontSize: "1.5rem",
    };


    return (
        <div className="page-container">
            <Navigation />
            <div className="main-section">
                <div style={containerStyle}>
                    <h2>Preturi Lemne de Foc</h2>
                    <p>
                        Lemnul nostru este de calitate superioară, oferind o ardere de lungă durată și eficientă.
                        Alege dimensiunea potrivită pentru nevoile tale!
                    </p>
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={thTdStyle}>Dimensiune</th>
                                <th style={thTdStyle}>Pret</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pricingData.map((item, index) => (
                                <tr key={index}>
                                    <td style={thTdStyle}>{item.size}</td>
                                    <td style={thTdStyle}>{item.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PretLemne;
