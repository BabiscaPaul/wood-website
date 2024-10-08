import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import '../Styles/ContactPage/styles.css';

function InformatiiUtile() {
    const sizeOptions = ["25 cm", "30 cm", "50 cm"];

    const containerStyle = {
        flexDirection: "column",
        justifyContent: "center", 

        textAlign: "center",
        fontFamily: "Baskerville",
        color: "white",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        borderRadius: "10px",
        margin: "50px auto",
        maxWidth: "800px",
        maxHeight: "300px", 


        marginTop: "40px", 
        marginBottom: "0px", 
        paddingTop: "50px", 
        paddingBottom: "50px", 
        paddingLeft: "30px", 
        paddingRight: "30px", 
    };

    const sizeOptionStyle = {
        padding: "10px 20px",
        backgroundColor: "#529add",
        borderRadius: "10px",
        margin: "10px",
        color: "white",
        display: "inline-block",
    };

    return (
        <div className="page-container">
            <Navigation />
            <div className="main-section">
                <div className="container" style={containerStyle}>
                    <h2>Esența Lemnului</h2>
                    <p>
                        Lemnul nostru provine din fag, recunoscut pentru arderea sa uniformă și căldura de lungă durată.
                    </p>
                    <h2>Dimensiuni Disponibile</h2>
                    <div>
                        {sizeOptions.map((size, index) => (
                            <div key={index} style={sizeOptionStyle}>
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default InformatiiUtile;