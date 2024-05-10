import React, { useState } from "react";

const RightPanel = ({
  items,
  onExport,
  onImport,
  onSaveAsPNG,
  onSaveAsPDF,
}) => {
  const [jsonTemplate, setJsonTemplate] = useState("");

  const exportTemplate = () => {
    const json = JSON.stringify(items);
    setJsonTemplate(json);
    // Optionally, you can pass the JSON template to a parent component if needed
    onExport(json);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (
      event &&
      event.target &&
      event.target.files &&
      event.target.files.length > 0
    ) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        onImport(content);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div style={{ flex: 1, borderLeft: "1px solid black", padding: "20px" }}>
      <h2>Right Panel</h2>
      <button onClick={exportTemplate}>Export JSON</button>
      <button onClick={onSaveAsPNG}>Save Canvas as PNG</button>
      <button onClick={onSaveAsPDF}>Save Canvas as PDF</button>
      <input type="file" accept=".json" onChange={handleFileChange} />
      <pre>{JSON.stringify(items, null, 2)}</pre>
    </div>
  );
};

export default RightPanel;
