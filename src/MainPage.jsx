import ProductInfo from "./ProductInfo";
import OrderButton from "./OrderButton";
import ProductImage from "./ProductImage";
import './Styles/MainStyles/Main.css';

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