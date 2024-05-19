import React, { useState } from "react";
import DraggableItem from "./DraggableItem";
import LeftPanelDetail from "./LeftPanelDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChair, faTable } from "@fortawesome/free-solid-svg-icons";

const ChairSVG = () => (
  <svg width="200" height="150" viewBox="0 0 200 150">
    <path d="M20 120 L20 20 L50 20 L50 120 Z" fill="#d28b53" />
    <path d="M150 120 L150 20 L180 20 L180 120 Z" fill="#d28b53" />

    <rect x="50" y="60" width="100" height="60" fill="#c0946e" />

    <path d="M50 60 L80 20 L130 60 Z" fill="#c0946e" />
  </svg>
);

const TableSVG = () => (
  <svg width="50" height="50" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M19 3H5a1 1 0 0 0-1 1v16h2V4h14V3zm-1 16H6V5h12v14z" />
  </svg>
);

const LeftPanel = ({ onDragStart }) => {
  const [typePanel, setTypePanel] = useState("");

  const OpenPanel = (type) => {
    console.log("OpenPanel "+type);
    setTypePanel(type);
  };

  const closePanel = (newType) => {
    setTypePanel(newType);
  };

  return (
    <>
      <section id="leftPanel" className="css-1ll1a4k leftPanel">
        <div className="css-14hi016">
          <div className="css-k008qs">
            <div className="css-lhozno">
              <ul className="p-0 css-32x41w drag-elements">
                {/* <li className="css-1dvgmd3 element">
            <div className="css-16iqw5x">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" width="1em" height="1em">
                <path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm0 16v40H40V56ZM40 112h56v88H40Zm176 88H112v-88h104v88Z"></path>
              </svg>
            </div>
            <span className="css-184r8y9">Template</span>
          </li> */}
                <li className="css-i9ow3q element">
                  <DraggableItem itemName="Text" onDragStart={onDragStart}>
                    <div className="css-16iqw5x">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        fill="currentColor"
                        width="1em"
                        height="1em"
                      >
                        <path d="M208 56v32a8 8 0 0 1-16 0V64h-56v128h24a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16h24V64H64v24a8 8 0 0 1-16 0V56a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8Z"></path>
                      </svg>
                    </div>
                    <span className="css-184r8y9">Text</span>
                  </DraggableItem>
                </li>
                <li
                  onClick={() => OpenPanel("Events")}
                  className="css-i9ow3q element"
                >
                  <div class="css-16iqw5x">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      fill="currentColor"
                      width="1em"
                      height="1em"
                    >
                      <path d="M104 40H56a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm0 64H56V56h48v48Zm0 32H56a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16Zm0 64H56v-48h48v48Zm96-160h-48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm0 64h-48V56h48v48Zm-64 72v-32a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0Zm80-16a8 8 0 0 1-8 8h-24v40a8 8 0 0 1-8 8h-32a8 8 0 0 1 0-16h24v-56a8 8 0 0 1 16 0v8h24a8 8 0 0 1 8 8Zm0 32v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Z"></path>
                    </svg>
                  </div>
                  <span className="css-184r8y9">Events</span>
                  {/* <FontAwesomeIcon color='black' size='3x' icon={faChair} /> */}
                </li>
                {/* <li className="css-i9ow3q element">
                  <DraggableItem itemName="Table" onDragStart={onDragStart}>
                <FontAwesomeIcon color='black' size='3x' icon={faTable} />
              </DraggableItem>
                    
                  </li> */}
                {/* <li className="css-i9ow3q element">
                  <DraggableItem itemName="Image" onDragStart={onDragStart}>
                    <div className="css-16iqw5x">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        fill="#ffffff"
                        width="1em"
                        height="1em"
                      >
                        <path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm0 16v102.75l-26.07-26.06a16 16 0 0 0-22.63 0l-20 20-44-44a16 16 0 0 0-22.62 0L40 149.37V56ZM40 172l52-52 80 80H40Zm176 28h-21.37l-36-36 20-20L216 181.38V200Zm-72-100a12 12 0 1 1 12 12 12 12 0 0 1-12-12Z"></path>
                      </svg>
                    </div>
                    <span className="css-184r8y9">Image</span>
                  </DraggableItem>
                </li> */}
                <li
                  onClick={() => OpenPanel("shapes")}
                  className="css-i9ow3q element"
                >
                  <div className="css-16iqw5x">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      fill="currentColor"
                      width="1em"
                      height="1em"
                    >
                      <path d="M192 116a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm-40-52h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16Zm96 48v32a24 24 0 0 1-24 24h-2.36l-16.21 45.38A16 16 0 0 1 190.36 224h-12.72a16 16 0 0 1-15.07-10.62l-1.92-5.38h-57.3l-1.92 5.38A16 16 0 0 1 86.36 224H73.64a16 16 0 0 1-15.07-10.62L46 178.22a87.69 87.69 0 0 1-21.44-48.38A16 16 0 0 0 16 144a8 8 0 0 1-16 0 32 32 0 0 1 24.28-31A88.12 88.12 0 0 1 112 32h104a8 8 0 0 1 0 16h-21.39a87.93 87.93 0 0 1 30.17 37c.43 1 .85 2 1.25 3A24 24 0 0 1 248 112Zm-16 0a8 8 0 0 0-8-8h-3.66a8 8 0 0 1-7.64-5.6A71.9 71.9 0 0 0 144 48h-32a72 72 0 0 0-53.09 120.64 8 8 0 0 1 1.64 2.71L73.64 208h12.72l3.82-10.69a8 8 0 0 1 7.53-5.31h68.58a8 8 0 0 1 7.53 5.31l3.82 10.69h12.72l18.11-50.69A8 8 0 0 1 216 152h8a8 8 0 0 0 8-8Z"></path>
                    </svg> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 0.375L23.6667 11H12.3333L18 0.375ZM15.6667 9H20.3333L18 4.625L15.6667 9Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1 1H11V11H1V1ZM3 3V9H9V3H3Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1 18C1 15.2386 3.23858 13 6 13C8.76142 13 11 15.2386 11 18C11 20.7614 8.76142 23 6 23C3.23858 23 1 20.7614 1 18ZM6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15Z" fill="#fff"/><path d="M13 13H23V15H13V13Z" fill="#fff"/><path d="M13 17H23V19H13V17Z" fill="#fff"/><path d="M13 21H23V23H13V21Z" fill="#fff"/></svg>
                  </div>
                  <span className="css-184r8y9 py-[5px]">Shapes</span>
                </li>
                {/* <li onClick={() => OpenPanel('Video')} className="css-i9ow3q element">
            <div className="css-16iqw5x">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" width="1em" height="1em">
                <path d="m164.44 105.34-48-32A8 8 0 0 0 104 80v64a8 8 0 0 0 12.44 6.66l48-32a8 8 0 0 0 0-13.32ZM120 129.05V95l25.58 17ZM216 40H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm0 128H40V56h176v112Zm16 40a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h192a8 8 0 0 1 8 8Z"></path>
              </svg>
            </div>
            <span className="css-184r8y9">Video</span>
          </li> */}
                {/* 
          <li className="css-i9ow3q element">
            <div className="css-16iqw5x">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" width="1em" height="1em">
                <path d="m164.44 105.34-48-32A8 8 0 0 0 104 80v64a8 8 0 0 0 12.44 6.66l48-32a8 8 0 0 0 0-13.32ZM120 129.05V95l25.58 17ZM216 40H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm0 128H40V56h176v112Zm16 40a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h192a8 8 0 0 1 8 8Z"></path>
              </svg>
            </div>
            <span className="css-184r8y9">Video</span>
          </li>
          <li className="css-i9ow3q element">
            <div className="css-16iqw5x">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" width="1em" height="1em">
                <path d="M240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h48a8 8 0 0 1 0 16H32v64h192v-64h-48a8 8 0 0 1 0-16h48a16 16 0 0 1 16 16ZM85.66 77.66 120 43.31V128a8 8 0 0 0 16 0V43.31l34.34 34.35a8 8 0 0 0 11.32-11.32l-48-48a8 8 0 0 0-11.32 0l-48 48a8 8 0 0 0 11.32 11.32ZM200 168a12 12 0 1 0-12 12 12 12 0 0 0 12-12Z"></path>
              </svg>
            </div>
            <span className="css-184r8y9">Upload</span>
          </li> */}
              </ul>
            </div>
            {typePanel && (
              <LeftPanelDetail
                closePanel={closePanel}
                typePanel={typePanel}
                onDragStart={onDragStart}
              ></LeftPanelDetail>
            )}
          </div>
        </div>
      </section>
      {/* <div style={{ flex: 1, borderRight: '1px solid black', padding: '20px' }}>
      <h2>Left Panel</h2>
      <DraggableItem itemName="Chair" onDragStart={onDragStart}>
        <FontAwesomeIcon color='black' size='3x' icon={faChair} />
      </DraggableItem>
      <DraggableItem itemName="Table" onDragStart={onDragStart}>
        <FontAwesomeIcon color='black' size='3x' icon={faTable} />
      </DraggableItem>
    </div> */}
    </>
  );
};

export default LeftPanel;
