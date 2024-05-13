import React, { useState, useRef } from "react";
import LeftPanel from "./components/LeftPanel";
import Canvas from "./components/Canvas";
import RightPanel from "./components/RightPanel";
import MainTop from "./components/MainTop";
import CanvasTop from "./components/CanvasTop";
//import Layers from './Layers';

import "bootstrap/dist/css/bootstrap.min.css";
import { toPng } from "html-to-image";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const EventTool = () => {
  const [items, setItems] = useState([
    {
      canvasSettings: {
        canvasBG: "#fff",
        canvasWidth: "800px",
        canvasHeight: "600px",
      },
      droppedItems: [
        { id: 1, name: "wimg1", price: 10, x: 119, y: 42 },
        { id: 2, name: "wimg1", price: 50, x: 86, y: 39 },
        { id: 3, name: "wimg1", price: 60, x: 24, y: 10 },
        { id: 4, name: "t1", price: 80, x: 99, y: 72 },
        { id: 5, name: "wimg1", price: 50, x: 86, y: 39 },
        { id: 6, name: "wimg1", price: 60, x: 24, y: 10 },
        { id: 7, name: "t1", price: 80, x: 99, y: 72 },
        { id: 8, name: "wimg1", price: 60, x: 103, y: 62 },
        { id: 9, name: "wimg1", price: 60, x: 103, y: 82 },
        { id: 10, name: "wase", price: 80, x: 99, y: 72 },
        { id: 11, name: "wase", price: 80, x: 99, y: 72 },
         { id: 12, name: "ballon", price: 80, x: 99, y: 72 },
      ],
    },
  ]);

  const [idCounter, setIdCounter] = useState(3);

  const handleDragStart = (e, item) => {
    console.log(item.name);
    e.dataTransfer.setData("text", item.name);
  };

  const handleDropNNN = (newItem) => {
    newItem.id = idCounter;
    setIdCounter(idCounter + 1);

    setItems((prevItems) => [
      {
        ...prevItems[0].droppedItems,
        droppedItems: [...prevItems[0].droppedItems, newItem],
      },
    ]);

    console.log(newItem);
  };

  const handleDrop = (newItem) => {
    newItem.id = idCounter;
    setIdCounter(idCounter + 1);

    //setItems([...items, newItem]);

    setItems([
      {
        ...items[0],
        droppedItems: [...items[0].droppedItems, newItem],
      },
    ]);

    // setItems([
    //   {
    //     canvasSettings: {
    //       ...items[0].canvasSettings,
    //       droppedItems: [...items[0].droppedItems, newItem],
    //     },
    //   },
    // ]);

    console.log(newItem);
    console.log(items);
  };

  const updateSettingFunc = (setting) => {
    //console.log(setting);

    setItems([
      {
        ...items[0],
        canvasSettings: {
          ...items[0].canvasSettings,
          ...setting,
        },
        droppedItems: items[0].droppedItems,
      },
    ]);
  };

  const handleRemoveItem = (itemId) => {
    console.log(itemId);

    const updatedDroppedItems = items[0].droppedItems.filter(
      (item) => item.id !== itemId
    );

    console.log(updatedDroppedItems);

    setItems([
      {
        ...items[0],
        droppedItems: updatedDroppedItems,
      },
    ]);
  };

  const handleRemoveItemOLD = (itemId) => {
    console.log(itemId);
    //setItems(items.filter(item => item.id !== itemId));
    // setItems(
    //   [
    //     {
    //       ...items[0],
    //       droppedItems:[...items[0].droppedItems,newItem
    //     ]
    //   }
    //   ]

    // );
  };

  // Function to update items
  const updateItems = (updatedItems) => {
    setItems(updatedItems);
  };

  const handleExport = () => {
    const json = JSON.stringify(items, null, 2);
    downloadJson(json, "template.json");
  };

  const handleImport = (content, event) => {
    if (content) {
      try {
        const importedItems = JSON.parse(content);
        setItems(importedItems);
      } catch (error) {
        console.error("Error parsing imported JSON:", error);
      }
    } else {
      console.error("No content provided for import.");
    }
  };

  const downloadJson = (content, fileName) => {
    const element = document.createElement("a");
    const file = new Blob([content], { type: "application/json" });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const canvasRef = useRef(null);

  const handleSaveAsPNG = async () => {
    console.log("canvasRef");
    console.log(canvasRef.current);
    try {
      const dataUrl = await toPng(canvasRef.current);
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "asdascanvas_preview.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error saving canvas as PNG:", error);
    }
  };
  const handleSaveAsPNG_custom = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 600;
    const context = canvas.getContext("2d");

    // Draw each item onto the canvas
    items.forEach((item) => {
      context.fillStyle = item.color || "#000000";
      context.fillRect(item.x, item.y, 50, 50);
    });

    // Convert canvas to PNG data URL
    const dataURL = canvas.toDataURL("image/png");

    // Create a download link for the PNG image
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "canvas_preview.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSaveAsPDF = () => {
    if (canvasRef.current) {
      const input = canvasRef.current;
      html2canvas(input)
        .then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF();
          const imgWidth = 210;
          const pageHeight = 295;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          let heightLeft = imgHeight;
          let position = 0;

          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;

          while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
          }

          pdf.save("canvas_preview.pdf");
        })
        .catch((error) => {
          console.error("Error exporting canvas as PDF:", error);
        });
    } else {
      console.error("Canvas reference is not available.");
    }
  };
  // const [typePanel, setTypePanel] = useState(null);
  //   const GetpanelType =  (type) => {
  //     console.log(type);
  //     setTypePanel(type);

  //   };
  //   typePanel={typePanel}

  return (
    <div className="flex-col flex vh-100">
      <MainTop
        items={items}
        onExport={handleExport}
        onImport={handleImport}
        onSaveAsPNG={handleSaveAsPNG}
        onSaveAsPDF={handleSaveAsPDF}
      />
      <div className="bg-light flex flex-row overflow-auto pt-[60px]">
        <LeftPanel onDragStart={handleDragStart} />
        <div className="flex flex-col flex-grow pl-[70px] ">
          {/* Pass updateItems function to Canvas */}
          <CanvasTop items={items}></CanvasTop>
           <div>
             <Canvas
            items={items}
            updateSetting={updateSettingFunc}
            onDrop={handleDrop}
            onRemoveItem={handleRemoveItem}
            onUpdateItems={updateItems}
            canvasRef={canvasRef}
          />
           </div>
        </div>

        {/* <RightPanel items={items} onExport={handleExport} onImport={handleImport} /> */}
        {/* <RightPanel 
        items={items} 
        onExport={handleExport} 
        onImport={handleImport} 
        onSaveAsPNG={handleSaveAsPNG}
        onSaveAsPDF={handleSaveAsPDF}
        /> */}
      </div>
    </div>
  );
};

export default EventTool;
