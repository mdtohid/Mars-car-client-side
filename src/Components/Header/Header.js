import React, { useEffect, useState } from 'react';
import getElementId from '../../useHooks/getElementId';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ openModal }) => {
    // const [selectedElements, setSelectedElements] = useState([]);
    const [inViewElementId, setInViewElementId] = useState(''); // New state variable

    useEffect(() => {
        getElementId({ setInViewElementId });
    }, [])


    // navbar 
    const [isFocused, setIsFocused] = useState(false);
    const [focusedIn, setFocusedIn] = useState('');

    console.log(isFocused);

    const handleMouseLeave = () => {
        setIsFocused(false);
        setFocusedIn('');
    };

    const handleMouseEnter = (value) => {
        setIsFocused(true);
        setFocusedIn(value);
        console.log(isFocused)
    };

    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        fetch('processTeslaApi.json')
            .then(res => res.json())
            .then(data => setProductsList(data))
    }, []);

    // ..........................................


    return (
        <div onMouseLeave={handleMouseLeave} className={`sticky top-0 z-20 font-serif ${inViewElementId === 'bgBlack' ? 'text-white' : 'text-black'} ${isFocused && 'bg-white !text-black'}`}>
            <div className='flex justify-between items-center py-3 px-8'>
                <h3>Tesla</h3>

                <div className='w-fit mx-auto hidden lg:flex gap-x-6'>
                    <button onMouseEnter={() => handleMouseEnter('vehicles')}
                        className={`px-2.5 py-1.5 rounded-lg hover:bg-slate-100	 ${focusedIn === 'vehicles' && 'bg-slate-100'}`}>Vehicles</button>

                    <button onMouseEnter={() => handleMouseEnter('energy')} className={`px-2.5 py-1.5 rounded-lg hover:bg-slate-100 ${focusedIn === 'energy' && 'bg-slate-100'}`}>Energy</button>

                    <button onMouseEnter={() => handleMouseEnter('charging')} className={`px-2.5 py-1.5 rounded-lg hover:bg-slate-100 ${focusedIn === 'charging' && 'bg-slate-100'}`}>Charging</button>

                    <button onMouseEnter={() => handleMouseEnter('shop')} className={`px-2.5 py-1.5 rounded-lg hover:bg-slate-100 ${focusedIn === 'shop' && 'bg-slate-100'}`}>Shop</button>
                </div>

                <button className='btnGlass lg:hidden' onClick={() => { openModal('nabvarModal') }}>Open Modal</button>
            </div>

            <div>
                {<div className={`w-7/12 mx-auto ${isFocused && 'py-10'}`}>
                    <div className='grid grid-cols-3 gap-20'>
                        {
                            productsList.filter(productList => productList.id === focusedIn)[0]?.products.map(product =>
                                <Link href='./' className='text-center'>
                                    <img src={product.asset} alt="" />
                                    <h1>{product.title}</h1>
                                    <p className='text-sm underline text-slate-500'>Order</p>
                                </Link>)
                        }
                    </div>
                </div>
                }
            </div>
        </div>
    );
};

export default Header;