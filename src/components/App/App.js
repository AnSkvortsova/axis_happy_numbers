/* eslint-disable eqeqeq */
import React, { useState } from 'react';

import { Canvas } from '../Canvas/Canvas';
import { Input } from '../Input/Input';

import axisNumber from '../../images/number_axis.png';
import { useEffect } from 'react/cjs/react.development';

function App() {
  //числа
  const arrayNumbersA = [6, 7, 8, 9];
  const arrayNumbersC = [11, 12, 13, 14];

  const [numberA, setNumberAState] = useState();
  const [numberB, setNumberBState] = useState();

  useEffect(() => {
    setNumberAState(
      arrayNumbersA[Math.floor(Math.random()*arrayNumbersA.length)]
    );
    setNumberBState(
      arrayNumbersC[Math.floor(Math.random()*arrayNumbersC.length)] 
      - arrayNumbersA[Math.floor(Math.random()*arrayNumbersA.length)]
    )
  }, []);

  //инпуты
  const [inputA, setInputAState] = useState({
    value: '',
    validate: true,
  });

  const [inputB, setInputBState] = useState({
    value: '',
    validate: true,
  });

  const [inputC, setInputCState] = useState({
    value: '',
    validate: true,
  });

  const [isInputAValid, setInputAValidState] = useState(true);
  const [isInputBValid, setInputBValidState] = useState(true);


  function handleInputAChange(evt) {
    setInputAState({...inputA, value: evt});
    if (evt != numberA) {
      return setInputAState({value: evt, validate: false});
    }
    return setInputAState({value: evt, validate: true});
  };

  function handleInputBChange(evt) {
    setInputBState({...inputB, value: evt});
    if (evt != numberB) {
      return setInputBState({value: evt, validate: false});
    }
    return setInputBState({value: evt, validate: true});
  };

  function handleInputCChange(evt) {
    setInputCState({...inputC, value: evt});
    if (evt != (numberA + numberB)) {
      return setInputCState({value: evt, validate: false});
    }
    return setInputCState({value: evt, validate: true});
  };

  useEffect(() => {
    if(inputA.value === '') {
      setInputAValidState(false)
    } else if (!inputA.validate) {
      setInputAValidState(false)
    } else {
      setInputAValidState(true)
    }
  }, [inputA]);

  useEffect(() => {
    if(inputB.value === '') {
      setInputBValidState(false)
    } else if (!inputB.validate) {
      setInputBValidState(false)
    } else {
      setInputBValidState(true)
    }
  }, [inputB]);

  return (
    <div className="main">
      <div className="addition">
        <font 
        className={inputA.validate ? '' : 'addition_error'}>
          {numberA}
        </font> + <font 
        className={inputB.validate ? '' : 'addition_error'}>
          {numberB}
        </font> = {!isInputBValid 
          ? '?' 
          : <Input 
              input = {inputC}
              onInputChange = {handleInputCChange}
            />}
      </div>
      
      <div className="axis">
        <Canvas 
          a = {numberA} 
          b = {numberB} 
          inputA = {inputA}
          inputB = {inputB}
          isInputAValid = {isInputAValid}
          isInputBValid = {isInputBValid}
          onInputAChange = {handleInputAChange}
          onInputBChange = {handleInputBChange}
        />
        <img className="axis__number" src={axisNumber} alt="числовая ось" />
      </div>
    </div>
  )
};

export default App;
