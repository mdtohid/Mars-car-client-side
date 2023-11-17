import logo from './logo.svg';
import './App.css';
import img1 from './image/tesla-model-s-p100d-sunrise-mptdvnar4iloeun3.jpg';
import img2 from './image/tesla-model-s-larte-design-l3lzeq7qeznvycnw.jpg';
import img3 from './image/598342.jpg';
import img4 from './image/tesla-cybertruck-concept-cars-3840x2400-882.jpg';
import img5 from './image/Tesla-Roadster-103.jpg';
import img6 from './image/0x0-roadster-05-1621869837.jpg';
import { useEffect, useRef, useState } from 'react';
import getElementId from './useHooks/getElementId';
import YouTube from 'react-youtube';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="slides">
      <Header></Header>

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

      {/* <div id='noBgBlack' className='slide'>
        <img src={img6} alt="" />
      </div>
      <div id='noBgBlack' className='slide'>
        <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD" alt="" />
      </div>
      <div id='bgBlack' className='slide'>
        <img src={img4} alt="" />
      </div>
      <div id='bgBlack' className='slide'>
        <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-NA.jpg" alt="" />
      </div> */}
    </div>
  );
}

export default App;
