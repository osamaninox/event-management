import React from "react";

const DraggableItem = ({ itemName, src, onDragStart, children }) => {
  const handleDragStart = (e) => {
    console.log(itemName);
    e.dataTransfer.setData("text", itemName);
    if (src) {
      e.dataTransfer.setData("src", src);
    }

    onDragStart(e, { name: itemName});
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      style={{ marginBottom: "0px", cursor: "move" }}
    >
      {children}
    </div>
  );
};

export default DraggableItem;
