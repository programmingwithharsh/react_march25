import Star from './Star';
export default function Product(props) {
    return <>
        <tr>
            <td><img src={props.product.imageUrl} alt="" width="50" height="50" /></td>
            <td>{props.product.productName}</td>
            <td>{props.product.productCode}</td>
            <td>{props.product.releaseDate}</td>
            <td>{props.product.description}</td>
            <td>{props.product.price}</td>
            <td>{props.product.starRating} <Star /></td>
        </tr>
    </>
}
