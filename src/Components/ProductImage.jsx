import Carousel from 'react-bootstrap/Carousel';
import placeHolder from '../assets/placeholder.jpg';

import "bootstrap/dist/css/bootstrap.min.css";

function ProductImage() {
    return (
        <Carousel data-bs-theme="dark" fade className='product-image'>
            <Carousel.Item>
                <img className="d-block w-100" src={placeHolder} alt="" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={placeHolder} alt="" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={placeHolder} alt="" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ProductImage;