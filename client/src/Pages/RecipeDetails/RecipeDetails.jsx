import React, {useState, useEffect} from 'react'
import Loading from '../../components/Loading/Loading'
import { useParams, Link } from 'react-router-dom'
import axios from "axios";
import '../RecipeDetails/RecipeDetails.css'

// `https://api.spoonacular.com/recipes/${id}/information?apiKey=f995a8655de7450aae3a81891ae613ed&includeNutrition=false`

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
  }, [])

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
// export default function SingleRecipe() {
//   const { id } = useParams()
//   const [loading, setLoading] = useState(false)
//   const [recipe, setRecipe] = useState(null)

//   React.useEffect(() => {
//     setLoading(true)
//     async function getRecipe() {
//       try {
//         const response = await fetch(
//           `https://api.spoonacular.com/recipes/${id}/information?apiKey=f995a8655de7450aae3a81891ae613ed&includeNutrition=false`
//         )
//         const recipeData = await response.json()
//         console.log(recipeData)
//         if (recipeData.parts) {
//           const {
//             id: number,
//             readyInMinutes: minutes,
//             title: name,
//             summary: brief,
//             image: picture,
//             sourceUrl: URL
//           } = recipeData.parts[0]
//           const newRecipe = {
//             number,
//             minutes,
//             name,
//             brief,
//             picture,
//             URL
//           }
//           setRecipe(newRecipe)
//         } else {
//           setRecipe(null)
//         }
//       } catch (error) {
//         console.log(error)
//       }
//       setLoading(false)
//     }
//     getRecipe()
//   }, [id])
//   if (loading) {
//     return <Loading/>
//   }
//   if (!recipe) {
//     return <h2 className='section-title'>no recipe to display</h2>
//   } else {
//     const {
//       number,
//       minutes,
//       name,
//       brief,
//       picture,
//       URL
//     } = recipe
//     return (
//       <section className='section cocktail-section'>
//         <Link to='/' className='btn btn-primary'>
//           back home
//         </Link>
//         <h2 className='section-title'>{name}</h2>
//         <div className='drink'>
//           <img src={picture} alt={name}></img>
//           <div className='drink-info'>
//             <p>
//               <span className='drink-data'>id :</span> {number}
//             </p>
//             <p>
//               <span className='drink-data'>ready in :</span> {minutes}
//             </p>
//             <p>
//               <span className='drink-data'>summary :</span> {brief}
//             </p>
//             <p>
//               <span className='drink-data'>picture :</span> {picture}
//             </p>
//             <p>
//               <span className='drink-data'>link :</span> {URL}
//             </p>
//             <p>
//               <span className='drink-data'>name :</span> {name}
//             </p>
//           </div>
//         </div>
//       </section>
//     )
//   }
// }
