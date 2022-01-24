const axios = require('axios')
require('dotenv').config()

const getMealPlanByCalories = async (request, response) => {
    const { calories } = request.params
    const apiKey = process.env.REACT_APP_API_KEY

  
    const mealPlan = await axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=${apiKey}&timeFrame=day&targetCalories=${calories}`) 
        response.send(mealPlan.data)

    }

    const getIndividualMealInformation = async (request, response) => {
        const apiKey = process.env.REACT_APP_API_KEY
        const { id } = request.params
        console.log(request.params)

      
        const mealInformation = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=false`) 
            response.send(mealInformation.data)
    
        }

module.exports = {getMealPlanByCalories, getIndividualMealInformation }