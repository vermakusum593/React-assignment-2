import { useState } from "react";

const initialFoods = ["Apple", "Orange", "Banana"]; 

function Object() {
    const [food, setFoods] = useState(initialFoods); 
    const [newFood, setNewFood] = useState(""); 

    function handleAddFood() {
        if (newFood.trim() === "") return; 
        setFoods((prevFoods) => [...prevFoods, newFood.trim()]);
        setNewFood(""); 
    }

    function handleRemoveFood(index) {
        setFoods((prevFoods) => prevFoods.filter((_, i) => i !== index)); 
    }

    return (
        <div>
            <h2>List of Foods</h2>
            <ul>
                {food.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => handleRemoveFood(index)} 
                        style={{ cursor: "pointer" }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            <input
                type="text"
                placeholder="Enter Your Food"
                value={newFood} 
                onChange={(e) => setNewFood(e.target.value)} 
                style={{ marginRight: "10px" }} 
            />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}

export default Object;
