import React, { useState, useEffect, useRef } from "react";

const DrawingCanvas = ({
  canvasdrawSetting,
  enable,
  Cwidth,
  Cheight,
  selectedItem,
}) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    //console.log(canvasdrawSetting);
    ctx.strokeStyle = canvasdrawSetting.color;
    ctx.lineWidth = canvasdrawSetting.width;
  }, [canvasdrawSetting]);

  const startDrawing = (e) => {
    setIsDrawing(true);
    const ctx = canvasRef.current.getContext("2d");
    const rect = canvasRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const ctx = canvasRef.current.getContext("2d");
    const rect = canvasRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  return (
    <canvas
      ref={canvasRef}
      width={Cwidth}
      height={Cheight}
      //style={{ border: '1px solid black' }}
      onMouseDown={enable ? startDrawing : null}
      onMouseMove={enable ? draw : null}
      onMouseUp={enable ? stopDrawing : null}
      onMouseOut={enable ? stopDrawing : null}
    ></canvas>
  );
};

export default DrawingCanvas;
