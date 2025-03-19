const Spinner = () => {
    return (<div className="mb-4">
        <div className="spinner-border text-warning" style={{ width: "3rem", height: "3rem" }}>
            <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-danger" style={{ width: "3rem", height: " 3rem" }}>
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>);
}

export default Spinner;