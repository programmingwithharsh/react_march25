function Login() {
    return (<div>
        <form action="./LoginSuccess.html" method="get">
            Email <input type="text" name="email" id="email" /><br />
            Password <input type="password" name="password" id="password" />
            <input type="submit" value="Login" />
        </form>
    </div>);
}

export default Login;