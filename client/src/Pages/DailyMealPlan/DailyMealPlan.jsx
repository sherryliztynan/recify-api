import axios from "axios";
import React, {useState} from "react";
import MealList from "../../components/MealList/MealList"
import '../DailyMealPlan/DailyMealPlan.css'

// https://api.spoonacular.com/mealplanner/generate?apiKey=f995a8655de7450aae3a81891ae613ed&timeFrame=day&targetCalories=${calories}
function DailyMealPlan() {

    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);

    const handleChange = (e) => {
      setCalories(e.target.value);
    }

    const getMealData = () => {
      fetch(`http://localhost:8000/api/mealplan/${calories}`)
      .then((response) => response.json())
      .then((data) => {
        setMealData(data)
        console.log(data)
      })
      .catch(() => {
        console.log("error")
      })

    }

    return (
    <div className="App">
      <section className= "form-control">
        <input className="search-form"
        type="number"
        placeholder="Carloies (ex. 2000)"
        onChange={handleChange}/>
      </section>
      <button className="btn" onClick={getMealData}> Get Daily Meal Plan </button>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default DailyMealPlan;
