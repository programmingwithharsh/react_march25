import Product from "./Product";

export default function ProductList(props) {

    return <div className="m-4">
        <div className="table-responsive">
            <table className='table table-striped table-bordered table-hover'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Product Code</th>
                        <th>Release Date</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Star Rating</th>
                    </tr>
                </thead>
                <tbody>

                    {props.products.map((product, index) => (
                        <Product key={index} product={product} />
                    ))}

                </tbody>
            </table>
        </div>
    </div>
}