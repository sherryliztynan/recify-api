import React, {useRef, useEffect} from 'react'
import { useGlobalContext } from '../../context.js'


const SearchForm = () => {
  const { setSearchTerm}  = useGlobalContext()
  const searchValue = useRef('');

useEffect(() => {
  searchValue.current.focus()
  }, [])

  const searchRecipe = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name"> search your favorite recipe</label>
          <input
          data-testid="searchBar"
          type="text" 
          id="name" 
          ref={searchValue} 
          onChange={searchRecipe} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
