import axios from 'axios';
import React, {useState, useEffect} from 'react'
import './Meal.css'

const Meal = ({meal}) => {
    const [imageUrl, setImageUrl] = useState("");
    useEffect( async () => {
        await axios.get(
            `http://localhost:8000/api/mealplan/${meal.id}&includeNutrition=false`)
            
        .then((response) => response.json())
        .then((data) => {
            setImageUrl(data.image)
        })
        .catch(() => {
            console.log("error");
        })
    }, [meal.id])

    return (
        <article>
            <h1>{meal.title}</h1>
            {/* <img src={imageUrl} alt="recipe" /> */}
                <ul className="instructions">
                    <li> Preparation time: {meal.readyInMinutes} minutes</li>
                    <li> Number of servings: {meal.servings} </li>
                </ul>
            <a className="meal-link" href={meal.sourceUrl}> Go to Recipe</a>
        </article>
    )
}

export default Meal
