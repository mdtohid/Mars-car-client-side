import React from 'react';
import img1 from '../../image/tesla-model-s-p100d-sunrise-mptdvnar4iloeun3.jpg';
import img2 from '../../image/tesla-model-s-larte-design-l3lzeq7qeznvycnw.jpg';
import img3 from '../../image/598342.jpg';
import img4 from '../../image/tesla-cybertruck-concept-cars-3840x2400-882.jpg';
import img5 from '../../image/Tesla-Roadster-103.jpg';
import img6 from '../../image/0x0-roadster-05-1621869837.jpg';
import img7 from '../../image/teslaProductsSetUp.webp';
import './Home.css';

const Home = () => {
    return (
        <>
            <div id='noBgBlack' className='slide'>
                <img src='https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD' alt="" />
            </div>
            <div id='noBgBlack' className='slide'>
                <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/425_HP_SolarPanels_D" alt="" />
            </div>
            <div id='noBgBlack' className='slide'>
                <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-Desktop.jpg" alt="" />
            </div>
            <div id='noBgBlack' className='slide'>
                <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Desktop-NA-APAC.jpg" alt="" />
            </div>
            <div id='bgBlack' className='slide'>
                <img src={img4} alt="" />
            </div>
            <div id='noBgBlack' className='slide'>
                <div className='relative'>
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
                </div>
            </div>
        </>
    );
};

export default Home;