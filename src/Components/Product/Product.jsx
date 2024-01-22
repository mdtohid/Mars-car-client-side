import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Product = () => {
    const {id} = useParams();
    console.log(id);

    const products = useLoaderData();

    
    console.log('will route');
    console.log(products);

    return (
        <div className=''>
            <h1>Product</h1>
            <h1>{id}</h1>
        </div>
    );
};

export default Product;