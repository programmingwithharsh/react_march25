import { useParams } from "react-router-dom";
function ProductDetail() {
    let { id } = useParams();
    alert(id);
    return (<div>
        <h1>Product Detail</h1>
    </div>);
}

export default ProductDetail;