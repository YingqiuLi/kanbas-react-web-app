import React, { useState } from "react";

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  const deleteElement = (index: number) => {
    setArray(array.filter((_, i) => i !== index));
  };

  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <button 
        onClick={addElement}
        style={{ backgroundColor: "green", color: "white", marginBottom: "10px", border: "none" }}
        className="btn btn-primary"
      >
        Add Element
      </button>

      <ul>
        {array.map((item, index) => (
          <li key={index}>
            <div className="form-control" style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <span style={{ marginRight: "auto" }}>{item}</span>
              <button 
                onClick={() => deleteElement(index)}
                id="wd-delete-element-click"
                style={{ backgroundColor: "red", color: "white", border: "none" }}
                className="btn btn-primary"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
