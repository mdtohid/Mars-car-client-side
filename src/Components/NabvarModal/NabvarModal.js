import React from 'react';
import "./NabvarModal.css";

const NabvarModal = ({ openModal, showModal, closeModal }) => {
    return (
        <div className={`modal ${showModal === 'nabvarModal' ? 'show' : ''}`}>
            <div className="nabvarModal-content relative">
                <button className="close absolute right-2 top-2" onClick={closeModal}>✕</button>

                <div className='mt-6 '>
                    <button className={`w-full px-4 py-1.5 rounded-lg hover:bg-slate-100 flex justify-between items-center`} onClick={() => { openModal('vehicles') }}>
                        <p className=''>Vehicles</p>
                        <p className='text-2xl'>&gt;</p>
                    </button>

                    <button className={`w-full px-4 py-1.5 rounded-lg hover:bg-slate-100 flex justify-between items-center`}
                    onClick={() => { openModal('energy') }}>
                        <p className=''>Energy</p>
                        <p className='text-2xl'>&gt;</p>
                    </button>

                    <button className={`w-full px-4 py-1.5 rounded-lg hover:bg-slate-100 flex justify-between items-center`} onClick={() => { openModal('charging') }}>
                        <p className=''>Charging</p>
                        <p className='text-2xl'>&gt;</p>
                    </button>

                    <button className={`w-full px-4 py-1.5 rounded-lg hover:bg-slate-100 flex justify-between items-center`} onClick={() => { openModal('shop') }}>
                        <p className=''>Shop</p>
                        <p className='text-2xl'>&gt;</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NabvarModal;