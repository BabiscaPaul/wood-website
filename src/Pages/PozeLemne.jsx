import { useState } from "react";
import Navigation from "../Components/Navigation.jsx";
import Footer from "../Components/Footer.jsx";
import Header from "../Components/Header.jsx";

import wood1 from "../assets/wood-photos/wood_1.jpg";
import wood2 from "../assets/wood-photos/wood_2.jpg";
import wood3 from "../assets/wood-photos/wood_3.jpg";
import wood4 from "../assets/wood-photos/wood_4.jpg";
import wood5 from "../assets/wood-photos/wood_5.jpg";
import wood6 from "../assets/wood-photos/wood_6.jpg";
import wood7 from "../assets/wood-photos/wood_7.jpg";
import wood8 from "../assets/wood-photos/wood_8.jpg";
import wood9 from "../assets/wood-photos/wood_9.jpg";
import wood10 from "../assets/wood-photos/wood_10.jpg";
import wood11 from "../assets/wood-photos/wood_11.jpg";
import wood12 from "../assets/wood-photos/wood_12.jpg";
import wood13 from "../assets/wood-photos/wood_13.jpg";
import wood14 from "../assets/wood-photos/wood_14.jpg";
import wood15 from "../assets/wood-photos/wood_15.jpg";

import '../Styles/HomePage/MainStyles/Main.css'

function PozeLemne() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = (image) => {
        setSelectedImage(image);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setModalOpen(false);
    };

    const woodImages = [
        wood1, wood2, wood3, wood4, wood5, wood6, wood7, wood8,
        wood9, wood10, wood11, wood12, wood13, wood14, wood15
    ];

    const galleryContainerStyle = {
        marginTop: "40px", 
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "15px",
        padding: "20px",
        justifyContent: "center"
    };

    const galleryItemStyle = {
        overflow: "hidden",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease"
    };

    const galleryImageStyle = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "transform 0.3s ease"
    };

    const modalStyle = {
        display: isModalOpen ? "flex" : "none",  
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000
    };

    const modalImageStyle = {
        maxHeight: "80%",
        maxWidth: "80%",
        objectFit: "contain"
    };

    return (
        <div className="page-container">
            <Header>
                <Navigation />
            </Header>

            <div className="main-section">

                <div style={galleryContainerStyle}>
                    {woodImages.map((woodImage, index) => (
                        <div
                            key={index}
                            style={galleryItemStyle}
                            onClick={() => openModal(woodImage)}  
                        >
                            <img
                                src={woodImage}
                                alt={`wood ${index + 1}`}
                                style={galleryImageStyle}
                                onMouseOver={e => (e.currentTarget.style.transform = "scale(1.05)")}
                                onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
                            />
                        </div>
                    ))}
                </div>

            
                {isModalOpen && (
                    <div style={modalStyle} onClick={closeModal}>
                        <img src={selectedImage} alt="Selected" style={modalImageStyle} />
                    </div>
                )}

            </div>
            
            <Footer />
        </div>
    );
}

export default PozeLemne;