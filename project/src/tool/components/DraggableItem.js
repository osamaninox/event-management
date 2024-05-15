import React from "react";

const DraggableItem = ({
  itemName,
  src,
  type,
  price,
  onDragStart,
  children,
}) => {
  const handleDragStart = (e) => {
    console.log("Handle drag start", itemName, src, type);
    e.dataTransfer.setData("text", itemName);
    e.dataTransfer.setData("type", type);
    console.log("Passing price", price);
    e.dataTransfer.setData("price", price);
    if (src) {
      e.dataTransfer.setData("src", src);
    }

    onDragStart(e, { name: itemName, src, type, price });
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
