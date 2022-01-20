import React, { useCallback, useEffect, useRef } from 'react';



export function Canvas(props) {
  const canvasRef = useRef(null);

  const draw = useCallback(
    (ctx) => {
      const x1 = (props.a * 15 + 33);
      const y1 = 195;
      const r1 = ((props.a * 30 + 37) - x1);
      console.log('props ', props)
      console.log ('x1 ', x1, 'r1 ', r1)

      const x2 = ((props.a * 30 + 15) + (props.b * 15 + 25));
      const y2 = 195;
      const r2 = ((props.b * 30 + 37) - (props.b * 15 + 32));
      console.log ('x2 ', x2, 'r2 ', r2)

      ctx.strokeStyle = '#b776e9';
      ctx.lineWidth = 3;

      ctx.beginPath();
      ctx.arc(x1, y1, r1, 0, Math.PI, true);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x2, y2, r2, 0, Math.PI, true);
      ctx.stroke();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []
  );

  const handleCleack = (env) => {
    console.log('x = ', env.clientX, 'y = ', env.clientY)
    }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');


    draw(context);
  }, [draw]);

  return(
    <canvas ref={canvasRef} {...props} width={700} height={200} onClick={handleCleack} />
  );
}