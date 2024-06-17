import { Rating } from 'react-simple-star-rating'
import '../assets/global.css';

const ProductCard = ({ product }: any) => {
    return (
        <div className="product-card">
            <div className="product-image-wrapper">
                <img style={{width: "150px"}} src={product.thumbnail} alt={product.title} />
            </div>
            <div className="product-info">
                <div style={{ textAlign: "left" }} >
                    <div className="single-line-ellipsis">{product.title}</div>
                    <Rating initialValue={product.rating} size={18} />
                </div>
                <h4 className="product-price">Rp {product.price}</h4>
            </div>

            <button className="btn-buy">Buy Now</button>
        </div>
    );
};

export default ProductCard;
