import React from "react";

const Layers = ({ items, toggleLayersClick }) => {
  // Calculate total budget based on item prices
  const totalBudget = items[0].droppedItems.reduce(
    (acc, item) => acc + (Number(item.price) || 0),
    0
  );

  return (
    <>
      <div id="settings" className="css-1up8n9n ">
        <div className="layers-container h-100 d-flex flex-column justify-content-between overflow-auto">
          <div className="layers-top">
            <div className="css-1sr1lb8">
              <p className="css-14q1onm">Layers</p>
              <div className="css-hsza6h">
                <svg
                  onClick={toggleLayersClick}
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
            <ul className="layers-list p-0">
              {/* <pre>{JSON.stringify(items, null, 2)}</pre> */}
              {/* {items[0].canvasSettings.map((item, index) => (
               
            ))} */}
              {/* <pre>{JSON.stringify(items, null, 2)}</pre>  */}

              {items[0].droppedItems.map((item, index) => (
                <li
                  key={index}
                  role="button"
                  tabIndex="0"
                  aria-disabled="false"
                  aria-roledescription="sortable"
                  aria-describedby="DndDescribedBy-3"
                  className="css-y42dwd"
                >
                  <div className="css-70qvj9">
                    <div className="css-jt95m4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        fill="currentColor"
                        width="1em"
                        height="1em"
                      >
                        <path d="M108 60a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm56 16a16 16 0 1 0-16-16 16 16 0 0 0 16 16Zm-72 36a16 16 0 1 0 16 16 16 16 0 0 0-16-16Zm72 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16Zm-72 68a16 16 0 1 0 16 16 16 16 0 0 0-16-16Zm72 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16Z"></path>
                      </svg>
                    </div>
                    <div className="css-a5urb8">
                      <span>{item.name}</span>
                      {item.price > 0 && (
                        <span className="ms-2 badge rounded-pill bg-success">
                          {item.price} Rs
                        </span>
                      )}
                      {/* <pre>{JSON.stringify(item, null, 2)}</pre> */}
                    </div>
                  </div>
                  {/* <div className="css-hcvu4z">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" width="1em" height="1em">
                      <path d="M144 128a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm-84-16a16 16 0 1 0 16 16 16 16 0 0 0-16-16Zm136 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16Z"></path>
                    </svg>
                  </div> */}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-3 layers-bottom d-block">
            <h6 className="w-100 d-flex justify-content-between">
              {" "}
              Total Budget:{" "}
              <span className="badge rounded-pill bg-success">
                {totalBudget} Rs
              </span>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layers;
