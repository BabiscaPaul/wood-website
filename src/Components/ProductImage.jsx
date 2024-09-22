import Carousel from 'react-bootstrap/Carousel';
import wood1 from '../assets/wood-photos/wood_1.jpg';
import wood2 from '../assets/wood-photos/wood_2.jpg';
import wood3 from '../assets/wood-photos/wood_3.jpg';

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';

function ProductImage() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const carouselHeight = windowWidth >= 1200 ? '700px' : windowWidth >= 768 ? '500px' : '350px';

    const containerStyle = {
        height: carouselHeight,
        overflow: 'hidden', 
    };

    const imageStyle = {
        height: '100%',  
        width: '100%',   
        objectFit: 'cover',  
        transition: 'all 0.3s ease-in-out',  
    };

    return (
        <Carousel data-bs-theme="dark" fade className='product-image' style={containerStyle}>
            <Carousel.Item>
                <img style={imageStyle} src={wood1} alt="First slide" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={imageStyle} src={wood2} alt="Second slide" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={imageStyle} src={wood3} alt="Third slide" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ProductImage;
