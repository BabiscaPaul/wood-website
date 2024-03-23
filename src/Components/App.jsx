// App.js
import Header from "./Header.jsx";
import MainPage from "./MainPage.jsx";
import Footer from "./Footer.jsx";
import Navigation from "./Navigation.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header>
        <Navigation></Navigation>
      </Header>

      <MainPage></MainPage>

      <Footer></Footer>
    </>
  );
}

export default App;