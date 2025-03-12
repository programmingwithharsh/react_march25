import React from 'react';
import ProductList from "./ProductList";

export default class Main extends React.Component { // exporting component
    render() { // render lifecycle
        return <div>
            This is Main Class Component
            <ProductList />
        </div>
    }
}
