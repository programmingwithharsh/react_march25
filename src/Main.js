import React from 'react';
import ProductList from "./ProductList";
import AddProduct from './AddProduct';
import Welcome from './Welcome';
import Title from './Title';
import Login from './Login';
import UserList from './UserList';
import './Style.css'; // import CSS File
import Nav from './Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoreBootstrap from './CoreBootstrap/CoreBootstrap';
import Register from './Register';

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

    render() {
        return <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav />}>
                    <Route index element={<Welcome mobile="iPhone" user={this.props.user} hobbies={this.props.hobbies} place={this.props.birthDetail} />} />
                    <Route path="/login" element={<Login mobile="Samsung" />} />
                    <Route path="/title" element={<Title title="This is title props" />} />
                    <Route path="/addproduct" element={<AddProduct {...this.props} />} />
                    <Route path="/products" element={<ProductList mobile="iPhone" />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/bs" element={<CoreBootstrap />} />
                </Route>
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    }
}
