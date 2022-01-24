import React, {useState, useEffect} from 'react'
import SingleRecipe from '../SingleRecipe/SingleRecipe'
import Loading from '../Loading/Loading'
import { useGlobalContext } from '../../context'


const RecipeList = () => {
  const { recipes, loading } = useGlobalContext()


  if (loading) {
    return <Loading/>
  }
  if (recipes.length < 1) {
    return (
      <h2 className='section-title'>
        no recipes matched your search criteria
      </h2>
    )
  }
  
  return (
    <section className="section">
      <h2 className="section-title">Recipes</h2>
      <div className="recipes-center">
      {recipes.map((recipe) => {
      return <SingleRecipe key={recipe.number} {...recipe} />
      })}
      </div>
    </section>
  )
    }
    export default RecipeList

