import React from 'react';
import img4 from '../../image/tesla-cybertruck-concept-cars-3840x2400-882.jpg';
import img7 from '../../image/teslaProductsSetUp.webp';
import './Home.css';

const Home = () => {
    return (
        <>
            <div id='noBgBlack' className='slide slideImg relative'>
                <img src='https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD' alt="" />

                <div className='absolute top-[0%] left-0 w-full h-full z-10 flex flex-col justify-between pt-20 pb-10'>
                    <div className='text-center '>
                        <h3 className='text-4xl font-semibold'>Model X</h3>
                        <p className='text-2xl mt-2 font-semibold'>From $68,590*</p>
                    </div>

                    <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
                        <button className='w-64 bg-[#f4f4f4] px-6 py-2 rounded-lg font-semibold'>Shop Now</button>

                        <button className='w-64 bg-[#222222] opacity-80 px-6 py-2 rounded-lg font-semibold text-white' onClick={() => { console.log('order') }}>Order Now</button>
                    </div>
                </div>
            </div>

            <div id='noBgBlack' className='slide slideImg relative'>
                <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/425_HP_SolarPanels_D" alt="" />

                <div className='absolute top-[0%] left-0 w-full h-full z-10 flex flex-col justify-between pt-20 pb-10'>
                    <div className='text-center '>
                        <h3 className='text-4xl font-semibold'>Solar Panels
                        </h3>
                    </div>

                    <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
                        <button className='w-64 bg-[#f4f4f4] px-6 py-2 rounded-lg font-semibold'>Shop Now</button>

                        <button className='w-64 bg-[#222222] opacity-80 px-6 py-2 rounded-lg font-semibold text-white' onClick={() => { console.log('order') }}>Order Now</button>
                    </div>
                </div>
            </div>

            <div id='noBgBlack' className='slide slideImg relative'>
                <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-Desktop.jpg" alt="" />

                <div className='absolute top-[0%] left-0 w-full h-full z-10 flex flex-col justify-between pt-20 pb-10'>
                    <div className='text-center '>
                        <h3 className='text-4xl font-semibold'>Powerwall
                        </h3>
                    </div>

                    <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
                        <button className='w-64 bg-[#f4f4f4] px-6 py-2 rounded-lg font-semibold'>Shop Now</button>

                        <button className='w-64 bg-[#222222] opacity-80 px-6 py-2 rounded-lg font-semibold text-white' onClick={() => { console.log('order') }}>Order Now</button>
                    </div>
                </div>
            </div>

            <div id='noBgBlack' className='slide slideImg relative'>
                <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Desktop-NA-APAC.jpg" alt="" />

                <div className='absolute top-[0%] left-0 w-full h-full z-10 flex flex-col justify-between pt-20 pb-10'>
                    <div className='text-center '>
                        <h3 className='text-4xl font-semibold'>Accessories
                        </h3>
                    </div>

                    <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
                        <button className='w-64 bg-[#f4f4f4] px-6 py-2 rounded-lg font-semibold'>Shop Now</button>

                        <button className='w-64 bg-[#222222] opacity-80 px-6 py-2 rounded-lg font-semibold text-white' onClick={() => { console.log('order') }}>Order Now</button>
                    </div>
                </div>
            </div>

            <div id='bgBlack' className='slide slideImg relative'>
                <img src={img4} alt="" />

                <div className='absolute top-[0%] left-0 w-full h-full z-10 flex flex-col justify-between pt-20 pb-10'>
                    <div className='text-center '>
                        <h3 className='text-4xl font-semibold text-white'>Cybertruck</h3>
                    </div>

                    <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
                        <button className='w-64 bg-[#f4f4f4] px-6 py-2 rounded-lg font-semibold'>Shop Now</button>

                        <button className='w-64 bg-[#222222] opacity-80 px-6 py-2 rounded-lg font-semibold text-white' onClick={() => { console.log('order') }}>Order Now</button>
                    </div>
                </div>
            </div>

            <div id='noBgBlack' className='slide slideImg relative'>
                <img src={img7} alt="" className=' ' />
                <div className='hoverRoundButton absolute top-[25%] left-[35%]'>
                    <div className='roundButton'></div>
                    <div className='tooltipText '>
                        <h3 className='font-semibold'>Generate</h3>
                        <p className=''>
                            Solar panels and Solar Roof convert energy from the sun into clean electricity that you can use to power your home
                        </p>
                    </div>
                </div>

                <div className='hoverRoundButton absolute top-[26%] right-[8%]'>
                    <div className='roundButton'></div>
                    <div className='tooltipText'>
                        <h3 className='font-semibold'>Use</h3>
                        <p className=''>
                            Manage the cost of your electricity while helping reduce your electric bill and your reliance on the grid by powering your home with the energy you produce
                        </p>
                    </div>
                </div>

                <div className='hoverRoundButton absolute bottom-[20%] right-[26%]'>
                    <div className='roundButton'></div>
                    <div className='tooltipText'>
                        <h3 className='font-semibold'>Store</h3>
                        <p className=''>
                            Powerwall integrates with all Tesla energy products, storing excess solar energy to power your home at night or during outages
                        </p>
                    </div>
                </div>

                <div className='hoverRoundButton absolute bottom-[16%] right-[43%]'>
                    <div className='roundButton'></div>
                    <div className='tooltipText'>
                        <h3 className='font-semibold'>Charge</h3>
                        <p className=''>
                            Use Wall Connector or Mobile Connector to charge your Tesla vehicle with energy stored in your Powerwall
                        </p>
                    </div>
                </div>

                <div className='absolute bottom-5 left-5  z-10 '>
                    <h3 className='text-2xl font-semibold'>Full set up</h3>
                    <p className='text-xl'>Click on the white round</p>
                </div>
            </div>
        </>
    );
};

export default Home;