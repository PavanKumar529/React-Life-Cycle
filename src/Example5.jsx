import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Example5 = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchData("https://dummyjson.com/products");
    }, []);

    const fetchData = async (url) => {
        try {
            const result = await axios.get(url);
            console.log(result);
            setProducts(result.data.products);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <>
            <h1 className="text-center mt-4 bg-success">This is Our Shopping Website</h1>
            <div className="container mt-4">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                    
                    {products.map((product) => (
                        // <div key={index} className="col mb-4">
                            <div className="card">
                                <img src={product.images[0]} className="card-img-top" alt="img" 
                                    style={{height:"200px", width:"200px"}}/>
                                <div className="card-body">
                                    <h5 className="card-title">{product.brand}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{product.title.slice(0,10)}</h6>
                                    {/* <p className="card-text">{product.description.split(' ').slice(0,5).join(" ")}</p> */}
                                    <p className="card-text">{product.description.slice(0,20)}</p>
                                    <div className="d-flex justify-content-between">
                                        <button className="btn btn-primary">Add to Cart</button>
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            {/* </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Example5;
