import Spinner from 'react-bootstrap/Spinner';

function SpinnerExample() {
    return (
        <div className='m-4'>
            <Spinner animation="border" variant="warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <Spinner animation="grow" variant="danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}

export default SpinnerExample;