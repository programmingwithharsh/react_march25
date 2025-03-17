import React from 'react';

class Welcome extends React.Component {

    constructor(props) { // lifecycle
        super(props);
        console.log("Welcome Component Props is ", this.props);
        console.log("Welcome - constructor 1");
    }

    componentDidMount() { // call after render, // lifecycle
        console.log("Welcome - componentDidMount 3");
        let user = {
            name: "Ayush",
            email: "Ayush@gmail.com"
        }

        let users = [
            {
                id: 1,
                name: "Aakash Pandey",
                email: "aakash@gmail.com"
            },
            {
                id: 2,
                name: "Tejaswini Ettam",
                email: "tejaswini@gmail.com"
            },
            {
                id: 3,
                name: "Heena Shaikh",
                email: "heena@gmail.com"
            }
        ];

        localStorage.setItem("username", "Sai Krishna"); // storing string inside localstorage
        localStorage.setItem("active", true);
        localStorage.setItem("x", 2);
        localStorage.setItem("user", JSON.stringify(user)); // storing object inside localstorage
        localStorage.setItem("users", JSON.stringify(users)); // storing array of object inside localstorage


        console.log(typeof localStorage.getItem("username"));
        console.log(typeof localStorage.getItem("active"));
        console.log(typeof localStorage.getItem("x"));
        console.log(typeof localStorage.getItem("user"));
        console.log(typeof localStorage.getItem("users"));

        console.log(localStorage.getItem("username"));
        console.log(localStorage.getItem("active"));
        console.log(localStorage.getItem("x"));
        console.log(JSON.parse(localStorage.getItem("user")));
        console.log(JSON.parse(localStorage.getItem("users")));
    }

    render() { // render lifecycle
        console.log("Welcome - render 2");
        return (<div className='m-4'>
            <h1>Welcome to Users Module</h1>
            <p>Existing Users</p>
            <button className='btn btn-primary'>Login</button>
            <a href="./Login.html">Login</a>
            <p>New Users</p>
            <button className='btn btn-primary'>Register</button>
            <a href="./Register.html">Register</a>
        </div>);
    }
}

export default Welcome;