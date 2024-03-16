// App.js
import React from "react";
import Header from "./Header";
import MainSection from "./MainSection";
import Footer from "./Footer";
import Navigation from "./Navigation";
import CarouselComp from "./Carousel";
import BuyNow from "./BuyNow";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header>
        <Navigation></Navigation>
      </Header>

      <MainSection>
        <CarouselComp></CarouselComp>
        
        <BuyNow phoneNumber="0722 730 076"></BuyNow>
        <BuyNow phoneNumber="0763 485 181"></BuyNow>
      </MainSection>

      <Footer></Footer>
    </>
  );
}

export default App;
