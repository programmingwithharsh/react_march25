import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

function CarouselExample() {
    return (
        <div className='m-4'>
            <Carousel>
                <Carousel.Item>
                    <ExampleCarouselImage src="https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg" alt="this is 1" carouselStyle="d-block w-100" />
                </Carousel.Item>

                <Carousel.Item>
                    <ExampleCarouselImage src="https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg" alt="this is 2" carouselStyle="d-block w-100" />
                </Carousel.Item>

                <Carousel.Item>
                    <ExampleCarouselImage src="https://wowslider.com/sliders/demo-18/data1/images/new_york.jpg" alt="this is 3" carouselStyle="d-block w-100" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselExample;