import React, { useEffect, useState } from 'react';
import './ChildNavbarModal.css';
import { Link } from 'react-router-dom';

const ChildNavbarModal = ({ showModal, closeModal, openModal }) => {
    console.log(showModal);
    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        fetch('processTeslaApi.json')
            .then(res => res.json())
            .then(data => setProductsList(data))
    }, []);

    return (
        <>
            {
                productsList.map(productList =>
                    <div className={`modal ${showModal === productList.id ? 'show' : ''}`}>
                        <div className="childNavbarModal-content relative">
                            <div className='flex items-center justify-between mb-5'>
                                <button className="close left-2 top-2" onClick={() => { openModal('nabvarModal') }}>back</button>

                                <button className="close right-2 top-2" onClick={closeModal}>✕</button>
                            </div>

                            <h3 className='text-center text-xl capitalize'>{productList.id}</h3>

                            <div className='w-full py-10'>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                                    {
                                        productList.products.map(product =>
                                            <Link href='./' className='text-center'>
                                                <img src={product.asset} alt="" />
                                                <h1>{product.title}</h1>
                                                <p className='text-sm underline text-slate-500'>Order</p>
                                            </Link>)
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                )
            }
        </>

    );
};

export default ChildNavbarModal;