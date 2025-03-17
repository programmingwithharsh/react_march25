function Login(props) {
    // 
    return (<div className="container">
        <form action="./LoginSuccess.html" method="get">
            Email <input type="text" className="form-control" name="email" id="email" /><br />
            Password <input type="password" className="form-control" name="password" id="password" />
            <input type="submit" className="btn btn-primary m-2" value="Login" />
        </form>
    </div>);
}

export default Login;