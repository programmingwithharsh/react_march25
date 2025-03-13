import React from 'react';
import ProductList from "./ProductList";
import AddProduct from './AddProduct';
import Welcome from './Welcome';
import Title from './Title';
import Star from './Star';
import Login from './Login';
import UserList from './UserList';

export default class Main extends React.Component { // exporting component
    constructor(props) {
        super(props);
        console.log('Constructor 1');
        this.state = {
            username: "Debasis",
            address: "Mumbai"
        }
    }

    componentDidMount() { // call after render, this is the best place where we can call API
        console.log('ComponentDidMount 3');
    }

    updateUsername = () => {
        this.setState({ // updating state, whenever state updates component rerender
            username: "Ganesh",
            address: "Delhi"
        })
    }

    somethingElse = () => {

    }

    render() { // render lifecycle
        console.log('Render 2');
        console.log(this.state);
        console.log("Main Component Props Is ", this.props); // Props mobile, user, hobbies and birthDetail
        return <div>
            This is Main Class Component

            <hr />
            <h1>Props in Main component is {this.props.mobile}</h1>
            <h1>Props in Main component is {this.props.user}</h1>
            <h1>Props in Main component is {this.props.hobbies[0]}</h1>
            <h1>Props in Main component is {this.props.birthDetail.place}</h1>
            <hr />

            <h1>State is having username is {this.state.username}</h1>
            <button onClick={this.updateUsername}>Update Username</button>
            <button onClick={this.somethingElse}>Other Button</button>
            <hr />

            <UserList />

            <hr />

            <Login mobile="Samsung" />
            <Title title="This is title props" />
            
            <Star mobile="Samsung" />
            <Star mobile="Iphone" />
            <Star mobile="MI" />

            <Welcome mobile="iPhone" user={this.props.user} hobbies={this.props.hobbies} place={this.props.birthDetail} />
            <AddProduct {...this.props} />
            <ProductList mobile="iPhone" />
        </div>
    }
}
