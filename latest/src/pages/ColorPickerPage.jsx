import React, { useState, useContext } from "react";
import { ColorContext } from "../context/ColorContext";

const ColorPickerPage = () => {
  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const { setNavbarColor } = useContext(ColorContext);

  const handleColorChange = (e) => {
    const color = e.target.value;
    setSelectedColor(color);
    setNavbarColor(color); 
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Pick a Color!</h1>
      <input
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
        style={{ cursor: "pointer", margin: "20px" }}
      />
      <div
        style={{
          marginTop: "30px",
          width: "200px",
          height: "200px",
          backgroundColor: selectedColor,
          margin: "auto",
          border: "2px solid #000",
        }}
      ></div>
      <p>Selected Color: {selectedColor}</p>
    </div>
  );
};

export default ColorPickerPage;
