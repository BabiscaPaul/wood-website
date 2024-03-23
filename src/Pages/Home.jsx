// App.js
import Header from "../Components/Header.jsx";
import MainPage from "../Components/MainPage.jsx";
import Footer from "../Components/Footer.jsx";
import Navigation from "../Components/Navigation.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
    return (
        <>
            <Header>
                <Navigation />
            </Header>

            <MainPage />

            <Footer />
        </>
    );
}

export default Home;