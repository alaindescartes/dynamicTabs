import React from "react";
import "./tab.css";

function Tab({ text, name, toggle, isActive }) {
  return (
    <div className="tab">
      <button onClick={toggle}>{name}</button>
      {isActive && <p>{text}</p>} {/* Render text only if isActive is true */}
    </div>
  );
}

export default Tab;
