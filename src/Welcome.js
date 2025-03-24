import React from 'react';
import AddProduct from './AddProduct';

class Welcome extends React.Component {

    constructor(props) { // lifecycle
        super(props);
        this.state = {
            username: "Debasis",
            address: "Mumbai"
        }
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

        /*
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
        */
    }

    updateUsername = () => {
        this.setState({ // updating state, whenever state updates component rerender
            username: "Ganesh",
            address: "Delhi"
        })
    }

    /*
    shouldComponentUpdate() {
        return true; // by default it's true
    }
    */

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML = "Before upate username is " + prevState.username
        return true;
    }

    componentDidUpdate() {
        document.getElementById("div2").innerHTML = "After upate username is " + this.state.username
    }

    render() { // render lifecycle
        console.log("Welcome - render 2");
        console.log(this.state);
        return (<div className='m-4'>
            <div id="div1"></div>
            <div id="div2"></div>
            <h1>State is having username is {this.state.username}</h1>
            <button className='btn btn-primary m-2' style={{ backgroundColor: 'aqua', color: 'black' }} onClick={this.updateUsername}>Update Username</button>
            <AddProduct address='Hyderabad' />
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