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
import PageNotFound from './PageNotFound';
import ProductDetail from './ProductDetail';
import HooksExample from './Hooks/HooksExample';

export default class Main extends React.Component { // exporting component
    constructor(props) {
        super(props);
        console.log('Constructor 1');
        this.state = {
            username: "Debasis",
            address: "Mumbai",
            products: [
                {
                    "productId": 1,
                    "productName": "Leaf Rake",
                    "productCode": "GDN-0011",
                    "releaseDate": "March 19, 2016",
                    "description": "Leaf rake with 48-inch wooden handle.",
                    "price": 19.95,
                    "starRating": 3.2,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
                },
                {
                    "productId": 2,
                    "productName": "Garden Cart",
                    "productCode": "GDN-0023",
                    "releaseDate": "March 18, 2016",
                    "description": "15 gallon capacity rolling garden cart",
                    "price": 32.99,
                    "starRating": 4.2,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
                },
                {
                    "productId": 3,
                    "productName": "Hammer",
                    "productCode": "TBX-0048",
                    "releaseDate": "May 21, 2016",
                    "description": "Curved claw steel hammer",
                    "price": 8.9,
                    "starRating": 4.8,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
                },
                {
                    "productId": 4,
                    "productName": "Saw",
                    "productCode": "TBX-0022",
                    "releaseDate": "May 15, 2016",
                    "description": "15-inch steel blade hand saw",
                    "price": 11.55,
                    "starRating": 3.7,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
                },
                {
                    "productId": 5,
                    "productName": "Video Game Controller",
                    "productCode": "GMG-0042",
                    "releaseDate": "October 15, 2015",
                    "description": "Standard two-button video game controller",
                    "price": 35.95,
                    "starRating": 4.6,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
                }
            ]
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
                    <Route path="/products" element={<ProductList products={this.state.products} mobile="iPhone" />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/bs" element={<CoreBootstrap />} />
                    <Route path="/hooks" element={<HooksExample />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    }
}
