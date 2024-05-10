import React, { useEffect } from "react";

const TopPanel = ({
  pageSettings,
  item,
  positionX,
  positionY,
  positionZ,
  color,
  itemText,
  itemImage,
  onPositionXChange,
  onPositionYChange,
  onPositionZChange,
  onColorChange,
  onItemTextChange,
  onItemImageChange,
}) => {
  useEffect(() => {
    //console.log('console.log(item);');
    //console.log(item.name);
  }, [item]);
  useEffect(() => {
    //console.log('console.log(item);');
    //console.log(item.name);
  }, [pageSettings]);

  const handlePositionXChange = (e) => {
    onPositionXChange(parseInt(e.target.value));
  };

  const handlePositionYChange = (e) => {
    onPositionYChange(parseInt(e.target.value));
  };

  const handlePositionZChange = (e) => {
    onPositionZChange(parseInt(e.target.value));
  };

  const handleColorChange = (e) => {
    onColorChange(e.target.value);
  };

  const handleItemTextChange = (e) => {
    onItemTextChange(e.target.value);
  };

  const handleItemImageChange = (e) => {
    //console.log(e);
    const file = e.target.files[0]; // Get the uploaded file
    const reader = new FileReader();

    reader.onload = (event) => {
      const base64String = event.target.result;
      console.log("Base64 Image:", base64String);

      onItemImageChange(base64String);
    };

    if (file) {
      reader.readAsDataURL(file); // Read the file as a data URL (base64)
    }
  };

  const handleItemImageChangeOLD = (e) => {
    onItemImageChange(e.target.value);
  };

  return (
    <section className="TopPanel bg-white px-3 py-2">
      <div className="d-flex flex-wrap">
        <table className="w-50 table table-bordered">
          <tbody>
            <tr>
              <td>
                <div className="input-group input-group-sm">
                  <span className="input-group-text">Position X:</span>
                  {/* <input
                className="form-range"
                id="positionX"
                  type="range"
                  min="0"
                  max="800"
                  value={positionX}
                  onChange={handlePositionXChange}
                /> */}
                </div>
              </td>
              <td>
                <input
                  className="form-range"
                  id="positionX"
                  type="range"
                  min="0"
                  max={parseInt(pageSettings.canvasWidth)}
                  value={positionX}
                  onChange={handlePositionXChange}
                />
              </td>
              <td>{positionX}px</td>
            </tr>
            <tr>
              <td>
                <label htmlFor="positionY">Position Y:</label>
              </td>
              <td>
                <input
                  className="form-range"
                  id="positionY"
                  type="range"
                  min="0"
                  max={parseInt(pageSettings.canvasHeight)}
                  value={positionY}
                  onChange={handlePositionYChange}
                />
              </td>
              <td>{positionY}px</td>
            </tr>
            <tr>
              <td>
                <label htmlFor="positionZ">Position Z:</label>
              </td>
              <td>
                <input
                  className="form-range"
                  id="positionZ"
                  type="range"
                  min="0"
                  max="360"
                  value={positionZ}
                  onChange={handlePositionZChange}
                />
              </td>
              <td>{positionZ}</td>
            </tr>
            {item.name != "Image" && (
              <tr>
                <td>
                  <label htmlFor="color">Color:</label>
                </td>
                <td>
                  <input
                    className="form-color"
                    id="color"
                    type="color"
                    value={color}
                    onChange={handleColorChange}
                  />
                </td>
                <td>{color}</td>
              </tr>
            )}
            {item.name == "Text" && (
              <tr>
                <td>
                  <label htmlFor="itemText">Item Text:</label>
                </td>
                <td>
                  <input
                    className="form-control"
                    id="itemText"
                    type="text"
                    value={itemText}
                    onChange={handleItemTextChange}
                  />
                </td>
                <td>{itemText}</td>
              </tr>
            )}
            {item.name == "Image" && (
              <tr>
                <td>
                  <label htmlFor="itemImage">Item Image:</label>
                </td>
                <td>
                  <input
                    id="itemImage"
                    type="file"
                    //ref={(input) => { this.fileInput = input; }}
                    accept="image/*"
                    //value={itemImage}
                    onChange={handleItemImageChange}
                  />
                </td>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TopPanel;
