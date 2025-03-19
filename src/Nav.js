import { Link, Outlet } from 'react-router-dom';

function Nav() {
    return (<>
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/addproduct">Dashboard</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/title">Title</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/addproduct">AddProduct</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/users">Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/bs">Core Bootstrap</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/hooks">Hooks</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div>
            <Outlet />
        </div>
    </>
    );
}

export default Nav;