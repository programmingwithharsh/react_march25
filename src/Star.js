function Star(props) {
    console.log("Star", props);
    return (<div>
        <span>{props.rating}</span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
    </div>);
}

export default Star;