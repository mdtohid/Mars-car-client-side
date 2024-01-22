import React, { useState } from 'react';
import { useEffect } from 'react';
import './ProductDetails.css';
import Loading from '../Loading/Loading';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    // const { products, id } = useParams();
    // const itemId = products;
    // const productDetailsId = id;
    // console.log(itemId);
    // console.log(productDetailsId);

    const [selectedCar, setSelectedCar] = useState();


    useEffect(() => {
        fetch('carApi.json')
            .then(res => res.json())
            .then(data => setSelectedCar(data))
    }, []);

    console.log(selectedCar);

    return (
        <div>
            <h1>hii</h1>
        </div>
    );
};

export default ProductDetails;