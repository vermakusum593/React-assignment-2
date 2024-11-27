import React, { useState } from "react";
import Footer from "../Footer";

function Home() {
    const [value, setValue] = useState(0); 
    const [count, setCount] = useState(0);
    const [selectedColor, setSelectedColor] = useState("#000000"); 

    const handleEvent = (name) => {
        if (count < 3) {
            setCount(count + 1); 
            console.log(`${name}, you clicked me ${count + 1} time/s`);
        } else {
            console.log(`${name}, stop clicking me`);
        }
    };

    const Increment = () => {
        setValue(value + 1); 
    };

    const Decrement = () => {
        if (value === 0) {
            alert("Value is less than 0");
        } else {
            setValue(value - 1);
        }
    };

    const Reset = () => {
        setValue(0); 
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <button className="home-btn" onClick={() => handleEvent("Kusum")}>
                Click me!
            </button>
            <button className="home-btn" onClick={Increment}>
                Increment
            </button>
            <button className="home-btn" onClick={Decrement}>
                Decrement
            </button>
            <button className="home-btn" onClick={Reset}>
                Reset
            </button>
            <h1>Counter Value: {value}</h1>

            
            <div style={{ margin: "20px 0" }}>
                <label htmlFor="colorPicker">Pick a Color: </label>
                <input
                    type="color"
                    id="colorPicker"
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    style={{ marginLeft: "10px", cursor: "pointer" }}
                />
            </div>

            
            <div
                style={{
                    margin: "20px auto",
                    padding: "20px",
                    backgroundColor: selectedColor,
                    color: "#fff",
                    borderRadius: "8px",
                    width: "50%",
                    textAlign: "center",
                }}
            >
                The background color of this box is: <strong>{selectedColor}</strong>
            </div>

            <Footer />
        </div>
    );
}

export default Home;
