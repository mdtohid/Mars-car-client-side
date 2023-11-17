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
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="slides">
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
