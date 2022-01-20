import React from 'react';

import { Canvas } from '../Canvas/Canvas';

import axisNumber from '../../images/number_axis.png';

function App() {
  //пример
  const arrayNumbersA = [6, 7, 8, 9];
  const arrayNumbersC = [11, 12, 13, 14];

  const numberA = arrayNumbersA[Math.floor(Math.random()*arrayNumbersA.length)];
  const numberB = arrayNumbersC[Math.floor(Math.random()*arrayNumbersC.length)] - numberA;

  return (
    <div className="main">
      <div className="addition">{numberA} + {numberB} = ?</div>
      
      <div className="axis">
        <Canvas a = {numberA} b = {numberB} />
        <img className="axis__number" src={axisNumber} alt="числовая ось" />
      </div>
    </div>
  )
};

export default App;
