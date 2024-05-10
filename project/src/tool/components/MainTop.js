import React, { useState } from "react";
import { Link } from "react-router-dom";

const MainTop = ({ items, onExport, onImport, onSaveAsPNG, onSaveAsPDF }) => {
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
    <div className="css-wcwwis fixed w-full z-[9]">
      <div className="css-7z6edo">
 
      </div>
      <div className="css-70qvj9">
        <Link to="/" rel="noreferrer" target="_blank">
          <span className="css-u55l71">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              fill="currentColor"
              width="1em"
              height="1em"
            >
              <path d="M208.31 75.68A59.78 59.78 0 0 0 202.93 28a8 8 0 0 0-6.93-4 59.75 59.75 0 0 0-48 24h-24a59.75 59.75 0 0 0-48-24 8 8 0 0 0-6.93 4 59.78 59.78 0 0 0-5.38 47.68A58.14 58.14 0 0 0 56 104v8a56.06 56.06 0 0 0 48.44 55.47A39.8 39.8 0 0 0 96 192v8H72a24 24 0 0 1-24-24 40 40 0 0 0-40-40 8 8 0 0 0 0 16 24 24 0 0 1 24 24 40 40 0 0 0 40 40h24v16a8 8 0 0 0 16 0v-40a24 24 0 0 1 48 0v40a8 8 0 0 0 16 0v-40a39.8 39.8 0 0 0-8.44-24.53A56.06 56.06 0 0 0 216 112v-8a58.14 58.14 0 0 0-7.69-28.32ZM200 112a40 40 0 0 1-40 40h-48a40 40 0 0 1-40-40v-8a41.74 41.74 0 0 1 6.9-22.48 8 8 0 0 0 1.1-7.69 43.81 43.81 0 0 1 .79-33.58 43.88 43.88 0 0 1 32.32 20.06 8 8 0 0 0 6.71 3.69h32.35a8 8 0 0 0 6.74-3.69 43.87 43.87 0 0 1 32.32-20.06 43.81 43.81 0 0 1 .77 33.58 8.09 8.09 0 0 0 1 7.65 41.72 41.72 0 0 1 7 22.52Z"></path>
            </svg>
          </span>
        </Link>
        <div className="css-1xzdikv">
          <label>
            <input
              onChange={handleFileChange}
              accept="application/json"
              type="file"
              className="css-1hyfx7x"
            />
            Import
          </label>
        </div>
        <div className="css-1xzdikv" onClick={exportTemplate}>
          Export
        </div>
        <div onClick={onSaveAsPNG} className="css-y73845 mr-3">
          <div className="css-8cka6y">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              fill="currentColor"
              width="1em"
              height="1em"
            >
              <path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm0 16v102.75l-26.07-26.06a16 16 0 0 0-22.63 0l-20 20-44-44a16 16 0 0 0-22.62 0L40 149.37V56ZM40 172l52-52 80 80H40Zm176 28h-21.37l-36-36 20-20L216 181.38V200Zm-72-100a12 12 0 1 1 12 12 12 12 0 0 1-12-12Z"></path>
            </svg>
          </div>
          Export Png
        </div>
        <div onClick={onSaveAsPDF} className="css-y73845">
          <div className="css-8cka6y">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              fill="currentColor"
              width="1em"
              height="1em"
            >
              <path d="m213.66 82.34-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66ZM160 51.31 188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48v120Zm-40-64a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8Z"></path>
            </svg>
          </div>
          Export PDF
        </div>
        {/* <div className="css-y73845">
         <div className="css-8cka6y">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" width="1em" height="1em">
               <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Zm36.44-94.66-48-32A8 8 0 0 0 104 96v64a8 8 0 0 0 12.44 6.66l48-32a8 8 0 0 0 0-13.32ZM120 145.05V111l25.58 17Z"></path>
            </svg>
         </div>
         Preview
      </div> */}
        {/* <pre>{JSON.stringify(items, null, 2)}</pre> */}
      </div>
    </div>
  );
};
export default MainTop;
