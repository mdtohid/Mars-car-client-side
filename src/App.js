import logo from './logo.svg';
import './App.css';
import img1 from './image/tesla-model-s-p100d-sunrise-mptdvnar4iloeun3.jpg';
import img2 from './image/tesla-model-s-larte-design-l3lzeq7qeznvycnw.jpg';
import img3 from './image/598342.jpg';
import img4 from './image/tesla-cybertruck-concept-cars-3840x2400-882.jpg';
import { useEffect, useRef, useState } from 'react';
import getElementId from './useHooks/getElementId';

function App() {
  // const [selectedElements, setSelectedElements] = useState([]);
  const [inViewElementId, setInViewElementId] = useState(''); // New state variable
  // console.log(inViewElementId)

  useEffect(() => {
    getElementId({ setInViewElementId });
  }, [])


  // navbar 
  // const [isHovered, setIsHovered] = useState('');

  // const handleMouseEnter = (value) => {
  //   setIsHovered(value);
  //   console.log(isHovered)
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };




  const [isFocused, setIsFocused] = useState(false);
  const [focusedIn, setFocusedIn] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleMouseLeave = () => {
    setIsFocused(false);
    setFocusedIn('');
  };

  const handleMouseEnter = (value) => {
    setIsFocused(true);
    setFocusedIn(value);
    console.log(isFocused)
  };

  console.log(isFocused)



  return (
    <div className="slides">
      <div onMouseLeave={handleMouseLeave} className={`sticky top-0 ${isFocused && 'bg-white'}  ${inViewElementId === 'bgBlack' ? 'text-white' : 'text-black'}`}>
        {/* <div className='flex gap-10 mx-auto w-fit'>
          <button onMouseEnter={() => handleMouseEnter('vehicle')} onMouseLeave={handleMouseLeave} className='p-2 rounded-lg hover:bg-amber-200'>Vehicle</button>

          <button onMouseEnter={() => handleMouseEnter('energy')} onMouseLeave={handleMouseLeave} className='p-2 rounded-lg hover:bg-amber-200'>Energy</button>

          <button onMouseEnter={() => handleMouseEnter('charging')} onMouseLeave={handleMouseLeave} className='p-2 rounded-lg hover:bg-amber-200'>Charging</button>
        </div>
        <div>
          {
            isHovered === 'vehicle' &&
            <div>
              <h1 className='text-center text-'>vehicle</h1>
            </div>
          }
          {
            isHovered === 'energy' &&
            <div>
              <h1 className='text-center text-'>energy</h1>
            </div>
          }
          {
            isHovered === 'charging' &&
            <div>
              <h1 className='text-center text-'>charging</h1>
            </div>
          }
        </div> */}



        <div className='flex gap-10 mx-auto w-fit'>
          <button onMouseEnter={()=>handleMouseEnter('vehicle')} 
            className={`p-2 rounded-lg hover:bg-amber-200 ${focusedIn ==='vehicle' && 'bg-amber-200'}`}>Vehicle</button>

          <button onMouseEnter={()=>handleMouseEnter('energy')} className={`p-2 rounded-lg hover:bg-amber-200 ${focusedIn ==='energy' && 'bg-amber-200'}`}>Energy</button>

          <button onMouseEnter={()=>handleMouseEnter('charging')} className={`p-2 rounded-lg hover:bg-amber-200 ${focusedIn === 'charging' && 'bg-amber-200'}`}>Charging</button>
        </div>

        <div>
          {
            focusedIn ==='vehicle' && <div>
              <h1 className='text-center p-5' >vehicle</h1>
            </div>
          }
          {
            focusedIn ==='energy' && <div>
              <h1 className='text-center p-5' >energy</h1>
            </div>
          }
          {
            focusedIn ==='charging' && <div>
              <h1 className='text-center p-5' >charging</h1>
            </div>
          }
        </div>
      </div>
      <div id='noBgBlack' className='slide'>
        <img src={img1} alt="" />
      </div>
      <div id='noBgBlack' className='slide'>
        <img src={img2} alt="" />
      </div>
      <div id='noBgBlack' className='slide'>
        <img src={img3} alt="" />
      </div>
      <div id='bgBlack' className='slide'>
        <img src={img4} alt="" />
      </div>
    </div>
  );
}

export default App;
