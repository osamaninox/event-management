import React, { useState, useEffect } from "react";
import Layers from "./Layers";

const CanvasTop = ({ budgetAmount, items }) => {
  // useEffect(() => {
  //   console.log(typePanel); 
  // }, [typePanel]);

  useEffect(() => {
        console.log("CanvasTop "+budgetAmount);
    }, [budgetAmount]);

  // State for managing layers visibility
  const [showLayers, setShowLayers] = useState(false);
  const toggleLayers = () => {
    setShowLayers((prevState) => !prevState); // Toggle the state of showLayers
  };
  return (
    <section id="canvasTop" className="css-1g2lq23 flex-grow canvasTop fixed w-full">
      <div className="css-4ns52">
        <div className="css-19fugzd">
          <div className="css-18cvmjs">
            {/* <div className="css-s7vhwb"><span className="css-1n30axn">Position</span></div>
                    <div className="css-1c0qma8"></div> 
                    <div className="css-s7vhwb" ><span className="css-1n30axn">Setting</span></div>*/}
            <div className="css-1c0qma8"></div>
            <div className="css-s7vhwb" onClick={toggleLayers}>
              <span className="css-1n30axn">Budget</span>
            </div>
          </div>
        </div>
        {/* <button onClick={toggleLayers}>Toggle Layers</button> */}
        {showLayers && (
          <Layers budgetAmount={budgetAmount}  toggleLayersClick={toggleLayers} items={items} />
        )}
      </div>
    </section>
  );
};
export default CanvasTop;
