import Star from './Star';
import { Link } from 'react-router-dom';
export default function Product(props) {
    return <>
        <tr>
            <td><img src={props.product.imageUrl} alt="" width="50" height="50" /></td>
            <td><Link to={`/products/${props.product.productId}`}>{props.product.productName}</Link></td>
            <td>{props.product.productCode}</td>
            <td>{props.product.releaseDate}</td>
            <td>{props.product.description}</td>
            <td>{props.product.price}</td>
            <td>{props.product.starRating} <Star /></td>
        </tr>
    </>
}
