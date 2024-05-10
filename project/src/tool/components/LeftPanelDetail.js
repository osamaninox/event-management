import React, { useState } from "react";
import DraggableItem from "./DraggableItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChair, faTable } from "@fortawesome/free-solid-svg-icons";

import arrow1 from '../../assets/tool/Shapes/Arrows/ARROW1.png'
import arrow2 from "../../assets/tool/Shapes/Arrows/ARROW2.png";
import arrow3 from "../../assets/tool/Shapes/Arrows/ARROW3.png";
import arrow4 from "../../assets/tool/Shapes/Arrows/ARROW4.png";

import border1 from "../../assets/tool/Shapes/Borders/border1.png";
import border2 from "../../assets/tool/Shapes/Borders/border2.png";
import border3 from "../../assets/tool/Shapes/Borders/border3.png";
import border4 from "../../assets/tool/Shapes/Borders/border4.png";

import circle1 from "../../assets/tool/Shapes/Circles/C1.png";
import circle2 from "../../assets/tool/Shapes/Circles/C2.png";
import circle3 from "../../assets/tool/Shapes/Circles/C3.png";
import circle4 from "../../assets/tool/Shapes/Circles/C4.png";

import f1 from "../../assets/tool/Shapes/Flowers/F1.png";
import f2 from "../../assets/tool/Shapes/Flowers/F2.png";
import f3 from "../../assets/tool/Shapes/Flowers/F3.png";

import frame1 from "../../assets/tool/Shapes/Frames/FRAME1.png";
import frame2 from "../../assets/tool/Shapes/Frames/FRAME2.png";
import frame3 from "../../assets/tool/Shapes/Frames/FRAME3.png";
import frame4 from "../../assets/tool/Shapes/Frames/FRAME4.png";
import frame5 from "../../assets/tool/Shapes/Frames/FRAME5.png";
import frame6 from "../../assets/tool/Shapes/Frames/FRAME6.png";
import frame7 from "../../assets/tool/Shapes/Frames/FRAME7.png";
import frame8 from "../../assets/tool/Shapes/Frames/FRAME8.png";

import l1 from "../../assets/tool/Shapes/Lines/L1.png";
import l2 from "../../assets/tool/Shapes/Lines/L2.png";
import l3 from "../../assets/tool/Shapes/Lines/L3.png";
import l4 from "../../assets/tool/Shapes/Lines/L4.png";
import l5 from "../../assets/tool/Shapes/Lines/L5.png";
import l6 from "../../assets/tool/Shapes/Lines/L6.png";
import l7 from "../../assets/tool/Shapes/Lines/L7.png";

import rec1 from "../../assets/tool/Shapes/Rectangle/REC1.png";
import rec2 from "../../assets/tool/Shapes/Rectangle/REC2.png";
import rec3 from "../../assets/tool/Shapes/Rectangle/REC3.png";
import rec4 from "../../assets/tool/Shapes/Rectangle/REC4.png";
import rec5 from "../../assets/tool/Shapes/Rectangle/REC5.png";



// import rec5 from "../../assets/tool/Wedding/Chairsandsofas/";


const LeftPanelDetail = ({ closePanel, typePanel, onDragStart }) => {
  const closePanelFunc = () => {
    closePanel(null);
  };
  const [activeTab, setActiveTab] = useState("wedding");
  
  const tabsData = [
    {
      label: "Wedding Event",
      value: "wedding",
      items: [
        { id: 1, itemName: "Chair", iconName: "faChair" },
        { id: 2, itemName: "Table", iconName: "faTable" },
        { id: 3, itemName: "Chair", iconName: "faChair" },
        { id: 4, itemName: "Table", iconName: "faTable" },
        { id: 5, itemName: "Chair", iconName: "faChair" },
        { id: 6, itemName: "Table", iconName: "faTable" },
      ],
    },
    {
      label: "Birthday Event",
      value: "birthday",
      items: [
        { id: 1, itemName: "Chair", iconName: "faChair" },
        { id: 2, itemName: "Table", iconName: "faTable" },
        { id: 3, itemName: "Chair", iconName: "faChair" },
      ],
    },
  ];

  const shapesData = [
    { id: 1, name: "dotted Arrow", src: arrow1 },
    { id: 2, name: "solid arrow", src: arrow2 },
    { id: 3, name: "image", src: arrow3 },
    { id: 4, name: "image", src: arrow4 },
    { id: 5, name: "image", src: arrow4 },
    { id: 6, name: "image", src: arrow4 },
    { id: 7, name: "solid border", src: border1 },
    { id: 8, name: "solid border", src: border2 },
    { id: 9, name: "solid border", src: border3 },
    { id: 10, name: "solid border", src: border4 },
    { id: 11, name: "circle", src: circle1 },
    { id: 12, name: "circle", src: circle2 },
    { id: 13, name: "circle", src: circle3 },
    { id: 14, name: "circle", src: circle4 },
    { id: 15, name: "flower", src: f1 },
    { id: 16, name: "flower", src: f2 },
    { id: 17, name: "flower", src: f3 },
    { id: 18, name: "frames", src: frame1 },
    { id: 19, name: "frames", src: frame2 },
    { id: 20, name: "frames", src: frame3 },
    { id: 21, name: "frames", src: frame4 },
    { id: 22, name: "frames", src: frame5 },
    { id: 23, name: "frames", src: frame6 },
    { id: 24, name: "frames", src: frame7 },
    { id: 25, name: "frames", src: frame8 },
    { id: 26, name: "lines", src: l1 },
    { id: 27, name: "lines", src: l2 },
    { id: 28, name: "lines", src: l3 },
    { id: 29, name: "lines", src: l4 },
    { id: 30, name: "lines", src: l5 },
    { id: 31, name: "lines", src: l6 },
    { id: 32, name: "lines", src: l7 },
    { id: 33, name: "rectangle", src: rec1 },
    { id: 34, name: "rectangle", src: rec2 },
    { id: 35, name: "rectangle", src: rec3 },
    { id: 36, name: "rectangle", src: rec4 },
    { id: 37, name: "rectangle", src: rec5 },

  ];

 const handleTabChange = (value) => {
   setActiveTab(value);
 };
  return (
    <>
      <div className="css-1ix44gv">
        <div className="css-1fq5xhj">
          <div className="css-1sr1lb8">
            <span className="css-14q1onm">{typePanel}</span>
            <div className="css-hsza6h" onClick={() => closePanelFunc()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                fill="currentColor"
                width="1em"
                height="1em"
              >
                <path d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128 50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"></path>
              </svg>
            </div>
          </div>
          <div className="css-1beovyh event-wrapper">
            <div className="px-[20px]">
              {typePanel == "Events" && (
                <>
                  <div className="tabs flex relative bg-blue-gray-50 bg-opacity-60 rounded-lg p-1 flex-row">
                    {tabsData.map(({ label, value }) => (
                      <div
                        key={value}
                        className={`tab flex items-center justify-center text-center w-full h-full relative  py-1 px-2 text-blue-gray-900 antialiased font-sans text-base font-normal leading-relaxed select-none cursor-pointer ${
                          activeTab === value
                            ? "active absolute inset-0 z-10 h-full bg-[#fff] rounded-md shadow"
                            : "bg-transparent"
                        }`}
                        onClick={() => handleTabChange(value)}
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                  <div className="tab-content overflow-wrapper">
                    {tabsData.map(({ value, items }) => (
                      <div
                        key={value}
                        className={`tab-pane  py-[20px] ${
                          activeTab === value ? "active" : ""
                        }`}
                      >
                        <ul className="css-1nxiby7 px-0 ">
                          {items.map((item) => (
                            <li
                              key={item.id}
                              className="css-7toppc border boder-[#dfdfdf] rounded-[10px] p-[7px]"
                            >
                              <DraggableItem
                                itemName={item.name}
                                onDragStart={onDragStart}
                              >
                                <FontAwesomeIcon
                                  color="black"
                                  size="3x"
                                  icon={faTable}
                                />
                                {/* <img src={} alt="event-image" className=""/> */}
                              </DraggableItem>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="css-1beovyh ">
            {typePanel == "shapes" && (
              <>
                {/* <ul className="css-1nxiby7">
                  <DraggableItem itemName="Image" src="https://template.canva.com/EAFaarkqz_0/2/0/400w-IVVQCZOr1K4.jpg"  onDragStart={onDragStart}>
                      <li className="css-7toppc">
                          <img loading="lazy" src="https://template.canva.com/EAFaarkqz_0/2/0/400w-IVVQCZOr1K4.jpg" className="css-iw3xil" />
                      </li>
                  </DraggableItem>
                </ul> */}
                <ul className="css-1nxiby7 overflow-wrapper">
                  {shapesData.map((item) => (
                    <li
                      key={item.id}
                      className="css-7toppc border border-[#dfdfdf] rounded-[10px] p-[7px]"
                    >
                      <DraggableItem
                        itemName={item.name}
                        onDragStart={onDragStart}
                      >
                        <img
                          loading="lazy"
                          src={item.src}
                          alt={item.name}
                          className="object-center w-full"
                        />
                      </DraggableItem>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftPanelDetail;
