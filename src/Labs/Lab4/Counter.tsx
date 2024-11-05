import React, { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div id="wd-counter-use-state">
      <h2>Counter: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        style={{ backgroundColor: "green", color: "white", marginRight: "10px", border: "none"}}
        className="btn btn-primary"
        id="wd-counter-up-click">
        Up
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ backgroundColor: "red", color: "white", marginRight: "10px", border: "none"}}
        className="btn btn-primary"
        id="wd-counter-down-click">
        Down
      </button>
<hr/></div>);}