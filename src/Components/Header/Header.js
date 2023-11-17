import React, { useEffect, useState } from 'react';
import getElementId from '../../useHooks/getElementId';

const Header = () => {
    // const [selectedElements, setSelectedElements] = useState([]);
    const [inViewElementId, setInViewElementId] = useState(''); // New state variable
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getElementId({ setInViewElementId });
    }, [])


    // navbar 
    const [isFocused, setIsFocused] = useState(false);
    const [focusedIn, setFocusedIn] = useState('');

    const handleMouseLeave = () => {
        setIsFocused(false);
        setFocusedIn('');
    };

    const handleMouseEnter = (value) => {
        setIsFocused(true);
        setFocusedIn(value);
        console.log(isFocused)
    };


    useEffect(() => {
        fetch('processTeslaApi.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div onMouseLeave={handleMouseLeave} className={`sticky top-0 z-10 font-serif ${inViewElementId === 'bgBlack' ? 'text-white' : 'text-black'}
      ${isFocused && 'bg-white !text-black'}`}>
            <div className='flex gap-10 mx-auto w-fit py-3'>
                <button onMouseEnter={() => handleMouseEnter('vehicle')}
                    className={`px-2.5 py-1.5 rounded-lg hover:bg-slate-100	 ${focusedIn === 'vehicle' && 'bg-slate-100'}`}>Vehicles</button>

                <button onMouseEnter={() => handleMouseEnter('energy')} className={`px-2.5 py-1.5 rounded-lg hover:bg-slate-100 ${focusedIn === 'energy' && 'bg-slate-100'}`}>Energy</button>

                <button onMouseEnter={() => handleMouseEnter('charging')} className={`px-2.5 py-1.5 rounded-lg hover:bg-slate-100 ${focusedIn === 'charging' && 'bg-slate-100'}`}>Charging</button>

                <button onMouseEnter={() => handleMouseEnter('shop')} className={`px-2.5 py-1.5 rounded-lg hover:bg-slate-100 ${focusedIn === 'shop' && 'bg-slate-100'}`}>Shop</button>
            </div>

            <div>
                {
                    focusedIn === 'vehicle' &&
                    <div className='w-7/12 mx-auto py-10'>
                        <div className='grid grid-cols-3 gap-20'>
                            {
                                products[0].products.map(product =>
                                    <a href='./' className='text-center'>
                                        <img src={product.asset} alt="" />
                                        <h1>{product.title}</h1>
                                    </a>)
                            }
                        </div>
                    </div>
                }
                {
                    focusedIn === 'energy' && <div className='w-7/12 mx-auto py-10'>
                        <div className='grid grid-cols-3 gap-20'>
                            {
                                products[1].products.map(product =>
                                    <a href='./' className='text-center'>
                                        <img src={product.asset} alt="" />
                                        <h1>{product.title}</h1>
                                    </a>)
                            }
                        </div>
                    </div>
                }
                {
                    focusedIn === 'charging' &&
                    <div className='w-7/12 mx-auto py-10'>
                        <div className='grid grid-cols-3 gap-20'>
                            {
                                products[2].products.map(product =>
                                    <a href='./' className='text-center'>
                                        <img src={product.asset} alt="" />
                                        <h1>{product.title}</h1>
                                    </a>)
                            }
                        </div>
                    </div>
                }
                {
                    focusedIn === 'shop' &&
                    <div className='w-7/12 mx-auto py-10'>
                        <div className='grid grid-cols-3 gap-20'>
                            {
                                products[3].products.map(product =>
                                    <a href='./' className='text-center'>
                                        <img src={product.asset} alt="" />
                                        <h1>{product.title}</h1>
                                    </a>)
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Header;