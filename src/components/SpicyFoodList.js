import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filter, setFoodFilter] = useState("All");

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods, newFood] 
    setFoods(newFoodArray);
  }

  function handleClick(id) {
    // const newFoodArray = foods.filter((food) => food.id !== id);
    // setFoods(newFoodArray)

    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1}
      }
      else {
        return food
      } 
    })
    setFoods(newFoodArray)

  }

  function handleSelect(event) {
    setFoodFilter(event.target.value)
  }

  const foodToDisplay = foods.filter((food) => {
    if (filter === "All") {
      return true
    }
    else {
      return food.cuisine === filter
    }
  })

  const foodList = foodToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter" onChange={handleSelect}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
