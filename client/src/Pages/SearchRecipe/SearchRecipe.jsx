import React from 'react'
import RecipeList from '../../components/RecipeList/RecipeList'
import SearchForm from '../../components/SearchForm/SearchForm'
import '../SearchRecipe/SearchRecipe.css'

const SearchRecipe = () => {
  return (
    <main>
      <SearchForm/>
      <RecipeList/>
    </main>
  )
}

export default SearchRecipe