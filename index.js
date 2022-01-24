const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
const { getIndividualRecipeById, getRecipesBySearch } = require('./controllers/recipes')
const { getMealPlanByCalories, getIndividualMealInformation } = require('./controllers/mealplan')
require('dotenv').config()

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json('hi')
})

app.get('/api/recipes/recipe/:identifier', getIndividualRecipeById)

app.get('/api/recipes/:searchTerm', getRecipesBySearch)

app.get('/api/mealplan/:calories', getMealPlanByCalories)

app.get('/api/mealplan/meals/:id', getIndividualMealInformation)


app.listen(8000, () => console.log('Server is running on port 8000'))