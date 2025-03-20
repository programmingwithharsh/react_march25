const ExampleCarouselImage = (props) => {
    return (<>
        <img src={props.src} alt={props.alt} className={props.carouselStyle} />
    </>);
}

export default ExampleCarouselImage;