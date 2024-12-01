import { useState } from "react";

function Object() {
    const [food, setFoods] = useState(["Apple", "Orange", "Banana"])

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value ="";
        setFoods((f)  => [...f, newFood]);
    }
    function handleRemoveFood(index) {
        setFoods(food.filter((_, i) => i !== index));
    }
    return (
    <div> 
        <h2>List of Foods</h2>
        <ul>
            {food.map((food, index) => (
            <li key={index} onClick={() => handleRemoveFood(index)}>
                {food}
            </li>
        ))}
            </ul>
        <input type="text" placeholder="Enter Your Food" id="foodInput"/>
        <button onClick={handleAddFood}>Add Food</button>
    </div>
    );
}

export default Object;