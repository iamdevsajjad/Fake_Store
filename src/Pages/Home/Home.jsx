import React, { useEffect, useState } from 'react';
import Product from '../../Components/Product/Product';

const Home = ({newCount}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])
    return (
        <div>
            <h1 className='text-center text-3xl font-bold my-4'>Here is All Products</h1>
            <div className="paroduct grid grid-cols-4 gap-4 container mx-auto">
                {
                    products.map(product =><Product
                  newCount = {newCount}
                    key={product.id}
                    product = {product}
                    /> )
                }
            </div>
        </div>
    );
};

export default Home;