import React, { useCallback, useEffect, useRef } from 'react';
import { Input } from '../Input/Input';

export function Canvas(props) {
  const canvasRef = useRef(null);

  const x1 = (props.a * 15 + 33);
  const y = 195;
  const r1 = ((props.a * 30 + 37) - x1);
  console.log('props ', props)

  const x2 = ((props.a * 30 + 15) + (props.b * 15 + 25));
  const r2 = ((props.b * 30 + 37) - (props.b * 15 + 33));

  const drawArcA = useCallback(
    (ctx) => {
      ctx.strokeStyle = '#b776e9';
      ctx.lineWidth = 3;

      ctx.beginPath();
      ctx.arc(x1, y, r1, 0, Math.PI, true);
      ctx.stroke();
    }, [x1, r1]
  );

  const drawArcB = useCallback(
    (ctx) => {
      ctx.strokeStyle = '#b776e9';
      ctx.lineWidth = 3;

      ctx.beginPath();
      ctx.arc(x2, y, r2, 0, Math.PI, true);
      ctx.stroke();
    }, [x2, r2]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if(props.a !== ''){
      drawArcA(context);
    };

    if(props.isInputAValid) {
      drawArcB(context);
    };
  }, [drawArcA, drawArcB, props.a, props.isInputAValid]);

  return(
    <div className="canvas">
      <Input 
        x = {x1-13}
        r = {150-r1}
        input = {props.inputA}
        onInputChange = {props.onInputAChange}
        isValid = {props.isInputAValid}
      />
      {!props.isInputAValid ? null : 
      <Input 
        x = {x2-13}
        r = {150-r2}
        input = {props.inputB}
        onInputChange = {props.onInputBChange}
        isValid = {props.isInputBValid}
      />
      }

      <canvas ref={canvasRef} {...props} width={700} height={200} />
    </div>
  );
}