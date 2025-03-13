import React from 'react';
import ProductList from "./ProductList";
import AddProduct from './AddProduct';
import Welcome from './Welcome';
import Title from './Title';
import Star from './Star';
import Login from './Login';

export default class Main extends React.Component { // exporting component
    constructor() {
        super();
        console.log('Constructor 1');
    }

    componentDidMount() { // call after render, this is the best place where we can call API
        console.log('ComponentDidMount 3');
    }

    render() { // render lifecycle
        console.log('Render 2');
        return <div>
            This is Main Class Component
            <Login />
            <Title />
            <Star />
            <Welcome />
            <AddProduct />
            <ProductList />
        </div>
    }
}
