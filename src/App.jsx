// App.js
import React from "react";
import Header from "./Header";
import MainPage from "./MainPage";
import Footer from "./Footer";
import Navigation from "./Navigation";
import CarouselComp from "./Carousel";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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