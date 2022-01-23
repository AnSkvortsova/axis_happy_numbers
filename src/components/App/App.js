/* eslint-disable eqeqeq */
import React, { useState, useEffect } from 'react';

import { Canvas } from '../Canvas/Canvas';
import { Input } from '../Input/Input';

import axisNumber from '../../images/number_axis.png';

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
  const [isInputCValid, setInputCValidState] = useState(true);
  
  const [isInputCActive, setInputCActiveState] = useState(false);


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

  useEffect(() => {
    if(inputC.value === '') {
      setInputCValidState(false)
    } else if (!inputC.validate) {
      setInputCValidState(false)
    } else {
      setInputCValidState(true)
    }
  }, [inputC]);

  useEffect(() => {
    if(isInputBValid) {
      setInputCActiveState(true);
    }
  }, [isInputBValid]);

  //стрелки
  const y = 195;

  const x1 = (numberA * 15 + 33);
  const r1 = ((numberA * 30 + 37) - x1);

  const x2 = ((numberA * 30 + 15) + (numberB * 15 + 25));
  const r2 = ((numberB * 30 + 37) - (numberB * 15 + 33));

  const yl = y - 10;

  const x1l1 = numberA * 30 + 37;
  const x1l2 = x1l1 - 8;
  const x1l3 = x1l1 + 8;

  const x2l1 = (numberA * 30 + 14) + (numberB * 30 + 30);
  const x2l2 = x2l1 - 8;
  const x2l3 = x2l1 + 8;

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
              isActive = {isInputCActive}
              isValid = {isInputCValid}
            />}
      </div>
      
      <div className="axis">
        <Input 
          x = {x1-13}
          r = {150-r1}
          input = {inputA}
          onInputChange = {handleInputAChange}
          isValid = {isInputAValid}
        />

        {!isInputAValid ? null : 
          <Input 
            x = {x2-13}
            r = {150-r2}
            input = {inputB}
            onInputChange = {handleInputBChange}
            isValid = {isInputBValid}
          />
        }
        {numberA === '' ? null :
          <Canvas
            y = {y}
            x = {x1} 
            r = {r1}

            yl = {yl}
            xl1 = {x1l1}
            xl2 = {x1l2}
            xl3 = {x1l3}

            className = "canvas__arrowA"
          />
        }
        {!isInputAValid ? null : 
          <Canvas
            y = {y}
            x = {x2} 
            r = {r2}

            yl = {yl}
            xl1 = {x2l1}
            xl2 = {x2l2}
            xl3 = {x2l3}

            className = "canvas__arrowB"
          />
        }
        <img className="axis__number" src={axisNumber} alt="числовая ось" />
      </div>
    </div>
  )
};

export default App;
