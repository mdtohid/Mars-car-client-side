import React, { useEffect, useState } from 'react';
import "./Modal.css";

const Modal = ({ showModal, closeModal }) => {
    console.log(showModal);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('processTeslaApi.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <>
            {
                products.map(productAll=>
                    <div className={`modal ${showModal === productAll.id ? 'show' : ''}`}>
                        <div className="modal-content relative">
                            <button className="close absolute right-2 top-2" onClick={closeModal}>✕</button>

                            <p>{productAll.id}</p>
                        </div>
                    </div>
                )
            }
        </>

    );
};

export default Modal;