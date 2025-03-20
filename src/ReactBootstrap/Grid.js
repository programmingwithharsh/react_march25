import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Grid() {
    return (<>
        <h1>Bootstrap Grid Example Below</h1>
        <Container>
            <Row>
                <Col xs={3} md={3} lg={3} xl={3} xxl={3}>
                    <div className="card" style={{ width: " 18rem" }}>
                        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/coffee/n/e/l/1-tapioca-pearls-with-10-12mm-straws-i-bubble-tea-pouch-1-coffee-original-imah48ugx9pcfz7m.jpeg?q=70" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </Col>

                <Col xs={3} md={3} lg={3} xl={3} xxl={3}>
                    <div className="card" style={{ width: " 18rem" }}>
                        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/coffee/y/t/u/-original-imah8yupkghmpz5g.jpeg?q=70" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </Col>

                <Col xs={3} md={3} lg={3} xl={3} xxl={3}>
                    <div className="card" style={{ width: " 18rem" }}>
                        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/coffee/e/o/z/-original-imagrhc9dwartfgg.jpeg?q=70" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </Col>

                <Col xs={3} md={3} lg={3} xl={3} xxl={3}>
                    <div className="card" style={{ width: " 18rem" }}>
                        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/coffee/d/q/h/120-silk-blend-belgian-chocolate-creamy-hazelnut-60-gms-each-original-imaha8ggkkygug9z.jpeg?q=70" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </>);
}

export default Grid;