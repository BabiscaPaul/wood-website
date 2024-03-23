import ProductInfo from "./ProductInfo.jsx";
import OrderButton from "./OrderButton.jsx";
import ProductImage from "./ProductImage.jsx";
import '../Styles/HomePage/MainStyles/Main.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="product-info-container">
        <ProductInfo />
        <ProductInfo />
      </div>
      <div className="product-section">
        <ProductImage />
        <OrderButton />
      </div>
      <div className="product-info-container">
        <ProductInfo />
        <ProductInfo />
      </div>
    </div>
  );
};


export default MainPage;