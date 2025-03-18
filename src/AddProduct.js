import React from 'react';

class AddProduct extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault(); // stop page refresh
        const productName = event.target.elements.productName.value;
        const productCode = event.target.elements.productCode.value;
        const releaseDate = event.target.elements.releaseDate.value;
        const description = event.target.elements.description.value;
        const price = event.target.elements.price.value;
        const rating = event.target.elements.rating.value;

        const product = { // create new object 
            "productName": productName,
            "productCode": productCode,
            "releaseDate": releaseDate,
            "description": description,
            "price": price,
            "rating": rating
        }

        if (productName === "") {
            alert("Please enter product name");
        }

        // here you can write a logic to add product in local storage
        console.log(product);
    }

    render() {
        return <div className='m-4 col-xxl-6'>
            <form onSubmit={this.handleSubmit}>

                Product Name <input className='form-control' type='text' placeholder='Enter Product name' name="productName" />

                Product Code <input className='form-control' type='text' placeholder='Enter Product code' name="productCode" />

                Release Date <input className='form-control' type='date' name="releaseDate" />

                Description <input className='form-control' type='text' placeholder='Enter Description' name="description" />

                Price <input className='form-control' type='number' name="price" />

                Rating <input className='form-control' type='number' name="rating" />

                <button className='btn btn-primary mt-2'>Add Product</button>

            </form>
        </div>
    }
}

export default AddProduct;