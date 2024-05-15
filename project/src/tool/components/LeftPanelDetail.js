import React, { useState, useEffect } from "react";
import DraggableItem from "./DraggableItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChair, faTable } from "@fortawesome/free-solid-svg-icons";

import arrow1 from "../../assets/tool/Shapes/Arrows/ARROW1.png";
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

import wimg1 from "../../assets/tool/Wedding/Chairsandsofas/CHAIR-1.png";
import wimg2 from "../../assets/tool/Wedding/Chairsandsofas/CHAIR2.png";
import wimg3 from "../../assets/tool/Wedding/Chairsandsofas/CHAIR3.png";
import wimg4 from "../../assets/tool/Wedding/Chairsandsofas/CHAIR4.png";
import wimg5 from "../../assets/tool/Wedding/Chairsandsofas/CHAIR5.png";
import wimg6 from "../../assets/tool/Wedding/Chairsandsofas/CHAIR6.png";
import wimg7 from "../../assets/tool/Wedding/Chairsandsofas/CHAIR7.png";
import wimg8 from "../../assets/tool/Wedding/Chairsandsofas/CHAIR8.png";
import wimg9 from "../../assets/tool/Wedding/Chairsandsofas/CHAIR9.png";
import wimg10 from "../../assets/tool/Wedding/Chairsandsofas/CHAIR10.png";
import wimg11 from "../../assets/tool/Wedding/Chairsandsofas/CHAIR11.png";

import std1 from "../../assets/tool/Wedding/DecorationVaseorflowerstands/STAND1.png";
import std2 from "../../assets/tool/Wedding/DecorationVaseorflowerstands/STAND2.png";
import std3 from "../../assets/tool/Wedding/DecorationVaseorflowerstands/STAND3.png";
import std4 from "../../assets/tool/Wedding/DecorationVaseorflowerstands/STAND4.png";
import std5 from "../../assets/tool/Wedding/DecorationVaseorflowerstands/STAND5.png";
import std6 from "../../assets/tool/Wedding/DecorationVaseorflowerstands/STAND6.png";
import std7 from "../../assets/tool/Wedding/DecorationVaseorflowerstands/STAND7.png";
import std8 from "../../assets/tool/Wedding/DecorationVaseorflowerstands/STAND8.png";

import vse1 from "../../assets/tool/Wedding/DecorationVaseorflowerstands/VASE1.png";
import vse2 from "../../assets/tool/Wedding/DecorationVaseorflowerstands/VASE2.png";
import vse3 from "../../assets/tool/Wedding/DecorationVaseorflowerstands/VASE3.png";
import vse4 from "../../assets/tool/Wedding/DecorationVaseorflowerstands/VASE4.png";
import vse5 from "../../assets/tool/Wedding/DecorationVaseorflowerstands/VASE5.png";

import b1 from "../../assets/tool/Birthday/Balloons/B1.png";
import b2 from "../../assets/tool/Birthday/Balloons/B2.png";
import b3 from "../../assets/tool/Birthday/Balloons/B3.png";
import b4 from "../../assets/tool/Birthday/Balloons/B4.png";
import b5 from "../../assets/tool/Birthday/Balloons/B5.png";
import b6 from "../../assets/tool/Birthday/Balloons/B6.png";
import b7 from "../../assets/tool/Birthday/Balloons/B7.png";
import b8 from "../../assets/tool/Birthday/Balloons/B8.png";
import b9 from "../../assets/tool/Birthday/Balloons/B9.png";
import b10 from "../../assets/tool/Birthday/Balloons/B10.png";
import b11 from "../../assets/tool/Birthday/Balloons/B11.png";
import b12 from "../../assets/tool/Birthday/Balloons/B12.png";
import b13 from "../../assets/tool/Birthday/Balloons/B13.png";
import b14 from "../../assets/tool/Birthday/Balloons/B14.png";
import b15 from "../../assets/tool/Birthday/Balloons/B15.png";
import b16 from "../../assets/tool/Birthday/Balloons/B16.png";
import b17 from "../../assets/tool/Birthday/Balloons/B17.png";
import b18 from "../../assets/tool/Birthday/Balloons/B18.png";
import b19 from "../../assets/tool/Birthday/Balloons/B19.png";
import b20 from "../../assets/tool/Birthday/Balloons/B20.png";
import b21 from "../../assets/tool/Birthday/Balloons/B21.png";
import b22 from "../../assets/tool/Birthday/Balloons/B22.png";
import b23 from "../../assets/tool/Birthday/Balloons/B23.png";
import b24 from "../../assets/tool/Birthday/Balloons/B24.png";
import b25 from "../../assets/tool/Birthday/Balloons/B25.png";
import b26 from "../../assets/tool/Birthday/Balloons/B26.png";
import b27 from "../../assets/tool/Birthday/Balloons/B27.png";
import b28 from "../../assets/tool/Birthday/Balloons/B28.png";
import b29 from "../../assets/tool/Birthday/Balloons/B29.png";
import b30 from "../../assets/tool/Birthday/Balloons/B30.png";

import c1 from "../../assets/tool/Birthday/Chairs/char-one.png";
import c2 from "../../assets/tool/Birthday/Chairs/chair-two.png";
import c3 from "../../assets/tool/Birthday/Chairs/chair-three.png";
import c4 from "../../assets/tool/Birthday/Chairs/chair-four.png";
import axios from "axios";

const LeftPanelDetail = ({ closePanel, typePanel, onDragStart }) => {
  const closePanelFunc = () => {
    closePanel(null);
  };
  const tabsDataDefault = [
    {
      label: "Wedding Event",
      value: "wedding",
      items: [
        {
          id: 1,
          itemName: "weddingImg",
          src: wimg1,
          type: "wedding",
          price: 150,
        },
        {
          id: 2,
          itemName: "weddingImg",
          src: wimg2,
          type: "wedding",
          price: 150,
        },
        {
          id: 3,
          itemName: "weddingImg",
          src: wimg3,
          type: "wedding",
          price: 150,
        },
        {
          id: 4,
          itemName: "weddingImg",
          src: wimg4,
          type: "wedding",
          price: 150,
        },
        {
          id: 5,
          itemName: "weddingImg",
          src: wimg5,
          type: "wedding",
          price: 150,
        },
        {
          id: 6,
          itemName: "weddingImg",
          src: wimg6,
          type: "wedding",
          price: 150,
        },
        {
          id: 7,
          itemName: "weddingImg",
          src: wimg7,
          type: "wedding",
          price: 150,
        },
        {
          id: 8,
          itemName: "weddingImg",
          src: wimg8,
          type: "wedding",
          price: 150,
        },
        {
          id: 9,
          itemName: "weddingImg",
          src: wimg9,
          type: "wedding",
          price: 150,
        },
        {
          id: 10,
          itemName: "weddingImg",
          src: wimg10,
          type: "wedding",
          price: 150,
        },
        {
          id: 11,
          itemName: "weddingImg",
          src: wimg11,
          type: "wedding",
          price: 150,
        },
        {
          id: 12,
          itemName: "weddingImg",
          src: std1,
          type: "wedding",
          price: 150,
        },
        {
          id: 13,
          itemName: "weddingImg",
          src: std2,
          type: "wedding",
          price: 150,
        },
        {
          id: 14,
          itemName: "weddingImg",
          src: std3,
          type: "wedding",
          price: 150,
        },
        {
          id: 15,
          itemName: "weddingImg",
          src: std4,
          type: "wedding",
          price: 150,
        },
        {
          id: 16,
          itemName: "weddingImg",
          src: std5,
          type: "wedding",
          price: 150,
        },
        {
          id: 17,
          itemName: "weddingImg",
          src: std6,
          type: "wedding",
          price: 150,
        },
        {
          id: 18,
          itemName: "weddingImg",
          src: std7,
          type: "wedding",
          price: 150,
        },
        {
          id: 19,
          itemName: "weddingImg",
          src: std8,
          type: "wedding",
          price: 150,
        },
        {
          id: 20,
          itemName: "weddingImg",
          src: vse1,
          type: "wedding",
          price: 150,
        },
        {
          id: 21,
          itemName: "weddingImg",
          src: vse2,
          type: "wedding",
          price: 150,
        },
        {
          id: 22,
          itemName: "weddingImg",
          src: vse3,
          type: "wedding",
          price: 150,
        },
        {
          id: 23,
          itemName: "weddingImg",
          src: vse4,
          type: "wedding",
          price: 150,
        },
        {
          id: 24,
          itemName: "weddingImg",
          src: vse5,
          type: "wedding",
          price: 150,
        },
      ],
    },
    {
      label: "Birthday Event",
      value: "birthday",
      items: [
        { id: 1, itemName: "BallonImg", src: b1, type: "birthday", price: 50 },
        { id: 2, itemName: "BallonImg", src: b2, type: "birthday", price: 50 },
        { id: 3, itemName: "BallonImg", src: b3, type: "birthday", price: 50 },
        { id: 4, itemName: "BallonImg", src: b4, type: "birthday", price: 50 },
        { id: 5, itemName: "BallonImg", src: b5, type: "birthday", price: 50 },
        { id: 6, itemName: "BallonImg", src: b6, type: "birthday", price: 50 },
        { id: 7, itemName: "BallonImg", src: b7, type: "birthday", price: 50 },
        { id: 8, itemName: "BallonImg", src: b8, type: "birthday", price: 50 },
        { id: 9, itemName: "BallonImg", src: b9, type: "birthday", price: 50 },
        {
          id: 10,
          itemName: "BallonImg",
          src: b10,
          type: "birthday",
          price: 50,
        },
        {
          id: 11,
          itemName: "BallonImg",
          src: b11,
          type: "birthday",
          price: 50,
        },
        {
          id: 12,
          itemName: "BallonImg",
          src: b12,
          type: "birthday",
          price: 50,
        },
        {
          id: 13,
          itemName: "BallonImg",
          src: b13,
          type: "birthday",
          price: 50,
        },
        {
          id: 14,
          itemName: "BallonImg",
          src: b14,
          type: "birthday",
          price: 50,
        },
        {
          id: 15,
          itemName: "BallonImg",
          src: b15,
          type: "birthday",
          price: 50,
        },
        {
          id: 16,
          itemName: "BallonImg",
          src: b16,
          type: "birthday",
          price: 50,
        },
        {
          id: 17,
          itemName: "BallonImg",
          src: b17,
          type: "birthday",
          price: 50,
        },
        {
          id: 18,
          itemName: "BallonImg",
          src: b18,
          type: "birthday",
          price: 50,
        },
        {
          id: 19,
          itemName: "BallonImg",
          src: b19,
          type: "birthday",
          price: 50,
        },
        {
          id: 20,
          itemName: "BallonImg",
          src: b20,
          type: "birthday",
          price: 50,
        },
        {
          id: 21,
          itemName: "BallonImg",
          src: b21,
          type: "birthday",
          price: 50,
        },
        {
          id: 22,
          itemName: "BallonImg",
          src: b22,
          type: "birthday",
          price: 50,
        },
        {
          id: 23,
          itemName: "BallonImg",
          src: b23,
          type: "birthday",
          price: 50,
        },
        {
          id: 24,
          itemName: "BallonImg",
          src: b24,
          type: "birthday",
          price: 50,
        },
        {
          id: 25,
          itemName: "BallonImg",
          src: b25,
          type: "birthday",
          price: 50,
        },
        {
          id: 26,
          itemName: "BallonImg",
          src: b26,
          type: "birthday",
          price: 50,
        },
        {
          id: 27,
          itemName: "BallonImg",
          src: b27,
          type: "birthday",
          price: 50,
        },
        {
          id: 28,
          itemName: "BallonImg",
          src: b28,
          type: "birthday",
          price: 50,
        },
        {
          id: 29,
          itemName: "BallonImg",
          src: b29,
          type: "birthday",
          price: 50,
        },
        {
          id: 30,
          itemName: "BallonImg",
          src: b30,
          type: "birthday",
          price: 50,
        },
        { id: 31, itemName: "chairImg", src: c1, type: "birthday", price: 50 },
        { id: 32, itemName: "chairImg", src: c2, type: "birthday", price: 50 },
        { id: 33, itemName: "chairImg", src: c3, type: "birthday", price: 50 },
        { id: 34, itemName: "chairImg", src: c4, type: "birthday", price: 50 },
      ],
    },
  ];

  const shapesDataDefault = [
    { id: 1, name: "dotted Arrow", src: arrow1, type: "shape", price: 20 },
    { id: 2, name: "solid arrow", src: arrow2, type: "shape", price: 20 },
    { id: 3, name: "image", src: arrow3, type: "shape", price: 20 },
    { id: 4, name: "image", src: arrow4, type: "shape", price: 20 },
    { id: 5, name: "image", src: arrow4, type: "shape", price: 20 },
    { id: 6, name: "image", src: arrow4, type: "shape", price: 20 },
    { id: 7, name: "solid border", src: border1, type: "shape", price: 20 },
    { id: 8, name: "solid border", src: border2, type: "shape", price: 20 },
    { id: 9, name: "solid border", src: border3, type: "shape", price: 20 },
    { id: 10, name: "solid border", src: border4, type: "shape", price: 20 },
    { id: 11, name: "circle", src: circle1, type: "shape", price: 20 },
    { id: 12, name: "circle", src: circle2, type: "shape", price: 20 },
    { id: 13, name: "circle", src: circle3, type: "shape", price: 20 },
    { id: 14, name: "circle", src: circle4, type: "shape", price: 20 },
    { id: 15, name: "flower", src: f1, type: "shape", price: 20 },
    { id: 16, name: "flower", src: f2, type: "shape", price: 20 },
    { id: 17, name: "flower", src: f3, type: "shape", price: 20 },
    { id: 18, name: "frames", src: frame1, type: "shape", price: 20 },
    { id: 19, name: "frames", src: frame2, type: "shape", price: 20 },
    { id: 20, name: "frames", src: frame3, type: "shape", price: 20 },
    { id: 21, name: "frames", src: frame4, type: "shape", price: 20 },
    { id: 22, name: "frames", src: frame5, type: "shape", price: 20 },
    { id: 23, name: "frames", src: frame6, type: "shape", price: 20 },
    { id: 24, name: "frames", src: frame7, type: "shape", price: 20 },
    { id: 25, name: "frames", src: frame8, type: "shape", price: 20 },
    { id: 26, name: "lines", src: l1, type: "shape", price: 20 },
    { id: 27, name: "lines", src: l2, type: "shape", price: 20 },
    { id: 28, name: "lines", src: l3, type: "shape", price: 20 },
    { id: 29, name: "lines", src: l4, type: "shape", price: 20 },
    { id: 30, name: "lines", src: l5, type: "shape", price: 20 },
    { id: 31, name: "lines", src: l6, type: "shape", price: 20 },
    { id: 32, name: "lines", src: l7, type: "shape", price: 20 },
    { id: 33, name: "rectangle", src: rec1, type: "shape", price: 20 },
    { id: 34, name: "rectangle", src: rec2, type: "shape", price: 20 },
    { id: 35, name: "rectangle", src: rec3, type: "shape", price: 20 },
    { id: 36, name: "rectangle", src: rec4, type: "shape", price: 20 },
    { id: 37, name: "rectangle", src: rec5, type: "shape", price: 20 },
  ];
  const [activeTab, setActiveTab] = useState("wedding");

  const [tabsData, setTabsData] = useState(tabsDataDefault);

  const [shapesData, setShapesData] = useState(shapesDataDefault);

  useEffect(() => {
    console.log("useEffect objects library API");
    axios
      .create({})
      .get(`http://localhost:8000/api/object-library`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log("useEffect objects library API response", response.data);
        response.data.forEach((item) => {
          if (item.type.toLowerCase() === "shape") {
            shapesData.push({
              id: item._id,
              itemName: item.title,
              src: item.objectImagePath,
              type: item.type,
              price: item.price,
            });
          } else if (item.type.toLowerCase() === "wedding") {
            tabsData[0].items.push({
              id: item._id,
              itemName: item.title,
              src: item.objectImagePath,
              type: item.type,
              price: item.price,
            });
          } else if (item.type.toLowerCase() === "birthday") {
            tabsData[1].items.push({
              id: item._id,
              itemName: item.title,
              src: item.objectImagePath,
              type: item.type,
              price: item.price,
            });
          }
        });
        setTabsData(tabsData);
        console.log("tabs data >>", tabsData);
        setShapesData(shapesData);
        console.log("shapes data >>", shapesData);
      })
      .catch((error) => {
        console.log("useEffect objects API error", error);
        console.error(error);
      });
  }, []);

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
                                src={item.src}
                                type={item.type}
                                itemName={item.itemName}
                                onDragStart={onDragStart}
                                price={item.price}
                              >
                                {/* <FontAwesomeIcon
                                  color="black"
                                  size="3x"
                                  icon={faTable}
                                /> */}
                                <img
                                  loading="lazy"
                                  src={item.src}
                                  alt={item.name}
                                  className="object-center w-full max-h-[60px]"
                                />
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
                        src={item.src}
                        type={item.type}
                        price={item.price}
                      >
                        <img
                          loading="lazy"
                          src={item.src}
                          alt={item.name}
                          type={item.type}
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
