import ProductInfo from "./ProductInfo.jsx";
import OrderButton from "./OrderButton.jsx";
import ProductImage from "./ProductImage.jsx";
import '../Styles/HomePage/MainStyles/Main.css';

const MainPage = () => {

  let statements = [
    "Căldură garantată Lemnul nostru de foc arde lung și constant, oferind căldură eficientă și confort în orice casă. Perfect pentru nopțile reci!",

    "Eco-friendly Lemn sustenabil, emisii scăzute. Alege soluția care încălzește casa și protejează mediul.",

    "Ardere eficientă. Lemn bine uscat, cu ardere rapidă și mai puțin fum. Mai multă căldură cu mai puțin consum!",

    "Perfect pentru șemineu. Ideal pentru șeminee și sobe, cu aprindere rapidă și flacără uniformă. Atmosfera perfectă, în fiecare seară!",
  ]

  return (
    <div className="main-page">
      <div className="product-info-container">
        <ProductInfo statement={statements[0]}/>
        <ProductInfo statement={statements[1]}/>
      </div>
      <div className="product-section">
        <ProductImage />
        <OrderButton />
      </div>
      <div className="product-info-container">
        <ProductInfo statement={statements[2]}/>
        <ProductInfo statement={statements[3]}/>
      </div>
    </div>
  );
};


export default MainPage;