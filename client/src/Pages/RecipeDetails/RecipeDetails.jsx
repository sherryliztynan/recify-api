import React, {useState, useEffect} from 'react'
import Loading from '../../components/Loading/Loading'
import { useParams, Link } from 'react-router-dom'
import axios from "axios";
import '../RecipeDetails/RecipeDetails.css'


const Recipes = (props) => {
  const [recipe, setRecipe] = useState([])
  const [loading, setLoading] = useState(false)

  const { id } = useParams()
  

  useEffect(() => {
    const fetchRecipes= async () => {
      setLoading(true)
      let fetch = await axios.get(`http://localhost:8000/api/recipes/recipe/${id}/`)
      setRecipe(fetch.data)
      console.log(fetch.data)
    }
    fetchRecipes()
  }, [id])

  return (    
  <div className="info">
          <section className='section recipe-section'>
          <Link to='/' className='btn btn-primary'>
           back home
          </Link>
          <h2 className='section-title'>{recipe.title}</h2>
          <div className='SingleRecipe'></div>
          <img className='image' src={recipe.image} alt={recipe.title}></img>
          <li>Summary: {recipe.summary}</li>
          <li>Minutes to Prepare: {recipe.readyInMinutes}</li>
          <li>ID Number: {recipe.id}</li>
          <a href={recipe.sourceUrl}> Go to Recipe</a>
          </section>
  </div>
        )
      }

export default Recipes
