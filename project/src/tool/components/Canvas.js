import React, { useState, useEffect, useRef } from "react";
import TopPanel from "./TopPanel";
import DrawingCanvas from "./DrawingCanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChair,
  faRemove,
  faTable,
  faCog,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
//import { zIndex } from 'html2canvas/dist/types/css/property-descriptors/z-index';
// import { toPng } from 'html-to-image';

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



const Canvas = ({
  items,
  updateSetting,
  onDrop,
  onRemoveItem,
  onUpdateItems,
  canvasRef,
}) => {
  //const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
  // useEffect(() => {
  //   onSaveCanvasRef(canvasRef);
  //   //console.log(canvasRef);
  // }, [onSaveCanvasRef]);

  const [draggedItem, setDraggedItem] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [positionZ, setPositionZ] = useState(0);
  const [color, setColor] = useState("#000000");
  const [itemText, setItemText] = useState("Default Text");
  const [itemImage, setItemImage] = useState("");

  const [canvasWidth, setcanvasWidth] = useState();
  const [canvasHeight, setcanvasHeight] = useState();
  const [canvasBG, setcanvasBG] = useState();
  const [canvasBGImage, setcanvasBGImage] = useState();

  const [showSetting, setshowSetting] = useState(false);
  const [drawSetting, setdrawSetting] = useState(false);
  const [canvasdrawSetting, setcanvasdrawSetting] = useState([
    { color: "#000", width: "2" },
  ]);

  const handleItemTextChange = (text) => {
    setItemText(text);
    //setColor(newValue);
    if (selectedItem) {
      selectedItem.text = text;
      onUpdateItems([...items]);
    }
  };

  const handleItemImageChange = (image) => {
    //console.log(image);

    setItemImage(image);
    if (selectedItem) {
      selectedItem.image = image;
      onUpdateItems([...items]);
    }
  };

  useEffect(() => {
    onUpdateItems(items);
  }, [items, onUpdateItems]);

  const handleDragStart = (e, item) => {
    console.log(item.name);
    e.dataTransfer.setData("text/plain", item.name);
    setDraggedItem(item);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    setItemImage("");

    if (draggedItem) {
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // const updatedItems = items.map((item) =>
      //   item === draggedItem ? { ...item, x, y } : item
      // );

      // onUpdateItems(updatedItems);
      const updatedItems = items.map((itemGroup) => ({
        ...itemGroup,
        droppedItems: itemGroup.droppedItems.map((item) =>
          item === draggedItem ? { ...item, x, y } : item
        ),
      }));

      onUpdateItems(updatedItems);
      setDraggedItem(null);
    } else {
      const itemName = e.dataTransfer.getData("text/plain");

      const itemSrc = e.dataTransfer.getData("src");

      let itemPrice = 0;

      switch (itemName) {
        case "Chair":
          itemPrice = 100;
          break;
        case "Table":
          itemPrice = 200;
          break;
        case "Text":
          itemPrice = 0;
          //setItemText("default text");
          break;
        default:
          itemPrice = 0;
          break;
      }

      onDrop({
        name: itemName,
        ...(itemSrc && { src: itemSrc }),
        price: itemPrice,
        text: itemText,
        image: itemImage,
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY,
      });
    }
  };

  const handleItemClick = (e, item) => {
    setSelectedItem(item);
    setPositionX(item.x);
    setPositionY(item.y);
    setPositionZ(item.z || 0);
    setColor(item.color || "#000000");
  };

  const handlePositionXChange = (newValue) => {
    setPositionX(newValue);
    if (selectedItem) {
      selectedItem.x = newValue;
      onUpdateItems([...items]); // Update items with modified position
    }
  };

  const handlePositionYChange = (newValue) => {
    setPositionY(newValue);
    if (selectedItem) {
      selectedItem.y = newValue;
      onUpdateItems([...items]); // Update items with modified position
    }
  };

  const handlePositionZChange = (newValue) => {
    setPositionZ(newValue);
    if (selectedItem) {
      selectedItem.z = newValue;
      onUpdateItems([...items]); // Update items with modified position
    }
  };

  const handleColorChange = (newValue) => {
    setColor(newValue);
    if (selectedItem) {
      selectedItem.color = newValue;
      onUpdateItems([...items]); // Update items with modified color
    }
  };

  const handleRemoveItemClick = (itemId) => {
    console.log("handleRemoveItemClick");

    onRemoveItem(itemId);
    setSelectedItem(null);
  };

  const handleMouseDown = (e, item) => {
    console.log("Mouse down", item);
    setDraggedItem(item);
    const rect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    console.log("Offset X:", offsetX, "Offset Y:", offsetY);

    // Update the nested droppedItems array
    const updatedItems = items.map((itemGroup) => ({
      ...itemGroup,
      droppedItems: itemGroup.droppedItems.map((itm) =>
        itm === item ? { ...itm, offsetX, offsetY } : itm
      ),
    }));

    onUpdateItems(updatedItems);
  };

  const handleMouseMove = (e) => {
    if (draggedItem) {
      console.log("Mouse move", e.clientX, e.clientY);
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left - draggedItem.offsetX;
      const y = e.clientY - rect.top - draggedItem.offsetY;
      console.log("New position X:", x, "New position Y:", y);

      // Update the nested droppedItems array
      const updatedItems = items.map((itemGroup) => ({
        ...itemGroup,
        droppedItems: itemGroup.droppedItems.map((item) =>
          item === draggedItem ? { ...item, x, y } : item
        ),
      }));

      onUpdateItems(updatedItems);
    }
  };

  const updateCanvasWidth = (e) => {
    //console.log(e.target.value);
    //setItems('');
    var CanvasWidth = 1920;
    if (e.target.value > 1920) {
    } else {
      CanvasWidth = e.target.value;
    }
    updateSetting({ canvasWidth: CanvasWidth + "px" });
  };
  const updateCanvasHeight = (e) => {
    //console.log(e.target.value);
    //setItems('');
    var CanvasHeight = 800;
    if (e.target.value > 800) {
    } else {
      CanvasHeight = e.target.value;
    }
    updateSetting({ canvasHeight: CanvasHeight + "px" });
  };

  const updateCanvasBG = (e) => {
    updateSetting({ canvasBG: e.target.value });
  };

  const handleMouseUp = (e, item) => {
    console.log("Mouse Up", item);
  };

  const pngExportRef = () => {
    return canvasRef;
  };

  const toggleSetting = () => {
    setshowSetting((prevState) => !prevState); // Toggle the state of showLayers
    setdrawSetting(false);
  };

  const drawColor = (e) => {
    setcanvasdrawSetting((prevState) => ({
      ...prevState,
      color: e.target.value,
    }));
    console.log(canvasdrawSetting);
  };
  const drawStrokeWidth = (e) => {
    setcanvasdrawSetting((prevState) => ({
      ...prevState,
      width: e.target.value,
    }));
    //console.log(e.target.value);
    console.log(canvasdrawSetting);
    //console.log(canvasdrawSetting[0].color);
  };
  const drawStrokeWidthss = (e) => {
    //const [canvasdrawSetting, setcanvasdrawSetting] = useState([{color:'#000',width:'2'}]);
    //setcanvasdrawSetting([{color:...canvasdrawSetting[0].color,width:e.target.value}]);
    console.log(canvasdrawSetting[0].width);
    console.log(canvasdrawSetting[0].color);
  };
  const toggleDraw = () => {
    //setdrawSetting(prevState => !prevState);
    setSelectedItem(null);
    setdrawSetting((prev) => !prev);
    setshowSetting(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0]; // Get the uploaded file
    const reader = new FileReader();

    reader.onload = (event) => {
      const base64String = event.target.result;
      console.log("Base64 Image:", base64String);

      setcanvasBGImage(base64String);
      updateSetting({ canvasBGImage: base64String });
    };

    if (file) {
      reader.readAsDataURL(file); // Read the file as a data URL (base64)
    }
  };
  const removeSelection = () => {
    //setSelectedItem(null);
  };

  const [resizing, setResizing] = useState(false);
  const [resizeStartX, setResizeStartX] = useState(0);
  const [resizeStartY, setResizeStartY] = useState(0);
  const [resizeStartWidth, setResizeStartWidth] = useState(0);
  const [resizeStartHeight, setResizeStartHeight] = useState(0);

  const handleMouseDownResize = (e, item) => {
    setSelectedItem(item);
    setResizing(false); // Reset resizing state when dragging
    // Other mouse down logic as needed
  };

  const handleResizeStart = (e, item) => {
    e.preventDefault();
    setResizing(true);
    setResizeStartX(e.clientX);
    setResizeStartY(e.clientY);
    setResizeStartWidth(item.width);
    setResizeStartHeight(item.height);
  };

  const handleMouseMoveResize = (e) => {
    if (resizing && selectedItem) {
      const dx = e.clientX - resizeStartX;
      const dy = e.clientY - resizeStartY;
      const newWidth = resizeStartWidth + dx;
      const newHeight = resizeStartHeight + dy;

      // Update item dimensions
      const updatedItems = items.map((item) =>
        item === selectedItem
          ? { ...item, width: newWidth, height: newHeight }
          : item
      );
      onUpdateItems(updatedItems);
    }
  };

  const handleMouseUpResize = () => {
    setResizing(false);
  };

  return (
    <section id="Canvas" className="flex-grow-1 Canvas">
      <div className="px-0">
        {selectedItem && (
          <TopPanel
            pageSettings={items[0].canvasSettings}
            item={selectedItem}
            positionX={positionX}
            positionY={positionY}
            positionZ={positionZ}
            color={color}
            onPositionXChange={handlePositionXChange}
            onPositionYChange={handlePositionYChange}
            onPositionZChange={handlePositionZChange}
            onColorChange={handleColorChange}
            itemText={itemText}
            itemImage={itemImage}
            onItemTextChange={handleItemTextChange}
            onItemImageChange={handleItemImageChange}
          />
        )}
        {/* <button onClick={handleSaveAsPNG}>Save Canvas as PNG</button> */}
        <section className="px-5 py-5">
          <div className="d-flex flex-wrap position-relative">
            {showSetting && (
              <table
                style={{
                  left: "50px",
                  position: "relative",
                }}
                className="ms-5 ps-5 mb-1 w-50 table table-bordered"
              >
                <tbody>
                  <tr>
                    <td>
                      <div className="input-group input-group-sm">
                        <span className="input-group-text">Width:</span>
                        <input
                          className="form-control"
                          id="canvasWidth"
                          type="number"
                          min="500"
                          max="1920"
                          value={parseInt(items[0].canvasSettings.canvasWidth)}
                          onChange={updateCanvasWidth}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="input-group input-group-sm">
                        <span className="input-group-text">Height:</span>
                        <input
                          className="form-control"
                          id="canvasHeight"
                          type="number"
                          min="500"
                          max="800"
                          value={parseInt(items[0].canvasSettings.canvasHeight)}
                          onChange={updateCanvasHeight}
                          onKeyUp={updateCanvasHeight}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="input-group input-group-sm">
                        <span className="input-group-text">BG Color:</span>
                        <input
                          className="form-control"
                          id="canvasBG"
                          type="color"
                          value={items[0].canvasSettings.canvasBG}
                          onChange={updateCanvasBG}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="input-group input-group-sm">
                        <span className="input-group-text">BG Image:</span>
                        <input
                          className="form-control"
                          type="file"
                          accept="*"
                          onChange={handleImageUpload}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
            <FontAwesomeIcon
              // style={{
              //   position: "absolute",
              //   left: "0%",
              //   cursor: "pointer",
              //   bottom: "5px",
              // }}
              color="black"
              onClick={toggleSetting}
              title="Setting"
              size="2x"
              icon={faCog}
            />
            <div
              className="drawSetting"
              // style={{
              //   position: "absolute",
              //   left: "50px",
              //   bottom: "5px",
              // }}
            >
              <FontAwesomeIcon
                style={{
                  cursor: "pointer",
                }}
                color={drawSetting ? "Green" : "Black"}
                onClick={toggleDraw}
                title="Draw"
                size="2x"
                icon={faPencil}
              />
              {drawSetting && (
                <>
                  <input
                    title="draw color"
                    className="ms-3 me-3"
                    type="color"
                    onChange={drawColor}
                  />
                  <input
                    min={2}
                    max={50}
                    title="draw width"
                    type="range"
                    onChange={drawStrokeWidth}
                  />
                </>
              )}
            </div>
          </div>
          <div
            ref={canvasRef}
            id="print"
            className="-mw-100"
            style={{
              position: "relative",
              width: items[0].canvasSettings.canvasWidth,
              // width: "100%",
              backgroundColor: items[0].canvasSettings.canvasBG,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundImage: `url(${canvasBGImage})`,
              height: items[0].canvasSettings.canvasHeight,
              border: "1px solid black",
              cursor: drawSetting
                ? "url(https://cdn4.iconfinder.com/data/icons/basic-ui-2-line/32/pencil-edit-write-draw-stationary-20.png) -50 -50, auto"
                : "pointer",
            }}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onMouseMove={handleMouseMove}
            onMouseOut={removeSelection}
          >
            {/* <pre>{JSON.stringify(items, null, 2)}</pre>  */}
            <div
              className="Items"
              style={{
                zIndex: drawSetting ? 0 : 1,
                position: "relative",
              }}
            >
              {items[0].droppedItems.map((item, index) => (
                <div
                  key={index}
                  className="draggedItem"
                  style={{
                    position: "absolute",
                    left: item.x,
                    top: item.y,
                    width: "auto",
                    height: "auto",
                    padding: "10px",

                    //zIndex: selectedItem === item ? 1 : 0,
                    outline: selectedItem === item ? "2px solid blue" : "none",
                    outlineOffset: selectedItem === item ? "-3px" : "0px",
                    resize: resizing ? "none" : "both",
                  }}
                  //onMouseDown={(e) => handleMouseDownResize(e, item)}
                >
                  {/* <div
      className='resize-handle'
      style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        cursor: 'se-resize', // Cursor style for resizing
        width: '10px',
        height: '10px',
        background: 'rgba(0, 0, 0, 0.5)',
      }}
      onMouseDown={(e) => handleResizeStart(e, item)} // Start resizing on mouse down
    >
      resize
    </div> */}

                  <div
                    className="draggableItem"
                    style={{
                      transform: `rotate(${item.z}deg)`,
                    }}
                    draggable
                    onMouseUp={(e) => handleMouseUp(e, item)}
                    onMouseDown={(e) => handleMouseDown(e, item)}
                    onDragStart={(e) => handleDragStart(e, item)}
                    onClick={(e) => handleItemClick(e, item)}
                  >
                    {item.name === "Chair" ? (
                      <FontAwesomeIcon
                        title={item.name}
                        color={item.color}
                        size="3x"
                        icon={faChair}
                      />
                    ) : item.name === "Table" ? (
                      <FontAwesomeIcon
                        title={item.name}
                        color={item.color}
                        size="6x"
                        icon={faTable}
                      />
                    ) : item.name === "solid border" ? (
                       <h1>Solid Border</h1>
                    ) : item.name === "Image" ? (
                      <>
                        {item.src ? (
                          <img
                            data-src={item.src}
                            src={item.src}
                            alt="Dynamic Image"
                          />
                          
                        ) : (
                          <img
                            src={
                              item.image !== ""
                                ? item.image
                                : "https://images.unsplash.com/photo-1709136494561-d98ea74c9431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
                            }
                            alt="Static Image"
                          />
                        )}
                      </>
                    ) : item.name === "Draw" ? (
                      <DrawingCanvas></DrawingCanvas>
                    ) : item.name === "Text" ? (
                      <h6>{item.text}</h6>
                    ) : (
                      // <pre>{JSON.stringify(item, null, 2)}</pre>
                      <h6>{item.name}</h6>
                    )}
                  </div>
                  {selectedItem === item && (
                    <FontAwesomeIcon
                      style={{
                        position: "absolute",
                        left: "100%",
                        top: "-20px",
                      }}
                      color="red"
                      title="Remove"
                      onClick={() => handleRemoveItemClick(item.id)}
                      size="2x"
                      icon={faRemove}
                    />
                  )}
                </div>
              ))}
            </div>
            <div
              style={{
                //zIndex: drawSetting ? '999' : '-1',
                position: "relative",
              }}
            >
              {/* style={{ zIndex: drawSetting ? 999 : 0 }} */}
              <DrawingCanvas
                canvasdrawSetting={canvasdrawSetting}
                enable={drawSetting}
                Cwidth={items[0].canvasSettings.canvasWidth}
                Cheight={items[0].canvasSettings.canvasHeight}
                selectedItem={selectedItem} // Pass selectedItem prop
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Canvas;
