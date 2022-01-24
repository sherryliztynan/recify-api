import React from 'react';
import { NavLink } from 'react-router-dom'
import '../WelcomePage/WelcomePage.css'
import RecipeImage from '/Users/sherron/CodingHomework/recify-api/client/src/RecipeImage.png'

const WelcomePage = () => {
return (
<div>
    <h1 className="section-title">Welcome to Recify!</h1>
    <img src={RecipeImage} alt="recipe image"
        className="image"></img>
    <h2>Choose from one of the options below:</h2>
    <NavLink to="/mealplan" className="Nav_link">Generate Your Personalized Daily Meal Plan</NavLink>
    <br></br>
    <NavLink to="/recipes" className="Nav_link"> Search for a Recipe </NavLink>
</div>
)}
export default WelcomePage