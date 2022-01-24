import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DailyMealPlan from "./Pages/DailyMealPlan/DailyMealPlan";
import SearchRecipe from "./Pages/SearchRecipe/SearchRecipe"
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import ErrorPage from "./Pages/ErrorPage";
import RecipeDetails from "./Pages/RecipeDetails/RecipeDetails"
import NavBar from "./components/NavBar/NavBar"


function App() {
  return (
    <div className="app-container">
      <Router>
      <NavBar/>
        <Routes>
          <Route path="/mealplan" element={<DailyMealPlan />}></Route>
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="/recipes" element={<SearchRecipe />}></Route>
          <Route path="/recipes/:id" element={<RecipeDetails />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;