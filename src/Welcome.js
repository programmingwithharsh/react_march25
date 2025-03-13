import React from 'react';

class Welcome extends React.Component {

    render() { // render lifecycle
        return (<div>
            <h1>Welcome to Users Module</h1>
            <p>Existing Users</p>
            <button>Login</button>
            <a href="./Login.html">Login</a>
            <p>New Users</p>
            <button>Register</button>
            <a href="./Register.html">Register</a>
        </div>);
    }
}

export default Welcome;