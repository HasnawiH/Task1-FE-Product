import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../Types/product';
import '../assets/global.css';

const ProductDetailsPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState<Product>();
    const [qty, setQty] = useState(1);

    const handlePlusQty = () => {
        setQty(qty + 1);
    } 

    const handleMinusQty = () => {
        if(qty > 0){
            setQty(qty - 1);
        }
    }

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productId}`)
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }, [productId]);

    if (!product) {
        return <div>Loading product details...</div>;
    }

    return (
        <div className="product-details-page">
            <h2>Product Detail</h2>
            <div className="container-detail-page">
                <div style={{ width: "500px" }}>
                    <div className="product-card">
                        <div className="product-image-wrapper">
                            <img style={{ width: "300px" }} src={product.thumbnail} alt={product.title} />
                        </div>
                    </div>

                    <div className="product-grid-detail" style={{ marginTop: "1rem" }}>
                        <div className="product-card">
                            <div className="product-image-wrapper">
                                <img src={product.thumbnail} alt={product.title} />
                            </div>
                        </div>
                        <div className="product-card">
                            <div className="product-image-wrapper">
                                <img src={product.thumbnail} alt={product.title} />
                            </div>
                        </div>
                        <div className="product-card" >
                            <div className="product-image-wrapper">
                                <img src={product.thumbnail} alt={product.title} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-order-summary" >
                    <h2>{product.title}</h2>
                    <h4 className="product-price">Rp {product.price}</h4>

                    <h4 style={{ marginTop: "2rem" }}>Color</h4>
                    <div style={{ display: "flex", gap: "1rem" }}>
                        <div className="color-product" style={{ background: "black" }} />
                        <div className="color-product" style={{ background: "#80C4E9" }} />
                        <div className="color-product" style={{ background: "#FFF6E9" }} />
                        <div className="color-product" style={{ background: "#FF7F3E" }} />
                    </div>

                    <h4 style={{ marginTop: "2rem" }}>Size</h4>
                    <div style={{ display: "flex", gap: "1rem" }}>
                        <div className="size-product">23</div>
                        <div className="size-product">24</div>
                        <div className="size-product">25</div>
                        <div className="size-product">26</div>
                    </div>

                    <h4 style={{ marginTop: "2rem" }}>Quantity</h4>
                    <div style={{ display: "flex", gap: "1rem" }}>
                        <button onClick={handleMinusQty} className="size-product">-</button>
                        <div className="value-qty">{qty}</div>
                        <button onClick={handlePlusQty} className="size-product">+</button>
                    </div>

                    <div style={{ display: "flex", gap: "2rem", marginTop: "2rem" }}>
                        <button className="btn-add-cart">Add To Cart</button>
                        <button className="btn-buy" >Checkout</button>
                    </div>
                </div>
            </div>

            <h4 className="product-price" style={{ marginTop: "2rem", textAlign: "left" }}>Description</h4>
            <p className="desc-detail">{product.description}</p>
        </div>
    );
};

export default ProductDetailsPage;
