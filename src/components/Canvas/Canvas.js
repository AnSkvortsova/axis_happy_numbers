import React, { useCallback, useEffect, useRef } from 'react';

export function Canvas(props) {
  const canvasRef = useRef(null);

  const drawArrow = useCallback(
    (ctx) => {
      ctx.strokeStyle = '#b776e9';
      ctx.lineWidth = 3;

      ctx.beginPath();
      ctx.arc(props.x, props.y, props.r, 0, Math.PI, true);
      ctx.moveTo(props.xl1, props.y)
      ctx.lineTo(props.xl2, props.yl)
      ctx.moveTo(props.xl1, props.y)
      ctx.lineTo(props.xl3, props.yl)
      ctx.stroke();
    }, [props.x, props.y, props.r, props.xl1, props.xl2, props.yl, props.xl3]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    drawArrow(context);
  }, [drawArrow]);

  return(
    <canvas ref={canvasRef} className={`canvas ${props.className}`} width={700} height={200} />
  );
}