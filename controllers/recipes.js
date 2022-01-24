const axios = require('axios')
require('dotenv').config()

const getIndividualRecipeById = async (request, response) => {
    const { identifier } = request.params
    const apiKey = process.env.REACT_APP_API_KEY
    console.log(request.params)
    console.log(process.env)
  
    const recipe = await axios.get(`https://api.spoonacular.com/recipes/${identifier}/information?apiKey=${apiKey}&includeNutrition=false`) 
        response.send(recipe.data)

    }

const getRecipesBySearch = async (request, response) => {
    const {searchTerm} = request.params
    const apiKey = process.env.REACT_APP_API_KEY
    const recipeSearch = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?&apiKey=${apiKey}&query=${searchTerm}&number=30`) 
    response.send(recipeSearch.data)
}
  module.exports = { getIndividualRecipeById, getRecipesBySearch }


