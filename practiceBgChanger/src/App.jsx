import React, { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function App(props) {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  props.bd.style.backgroundColor = backgroundColor;
  
  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    
  };

  return (
    <div
      
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default App;
