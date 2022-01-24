import axios from 'axios'
import React, { useState, useContext, useEffect, createContext } from 'react'
import { useCallback } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [recipes, setRecipes] = useState([])

  const fetchRecipes = useCallback( async () => {
    setLoading(true)
    try {
      let {data} = await axios.get(`http://localhost:8000/api/recipes/${searchTerm}&number=30`)
      const individualRecipes = data.results
      console.log(data.results)
      if (individualRecipes) 
      {
        const newRecipes = individualRecipes.map((individualRecipe) => {
          const {
            id,
            image,
            imageType,
            title
          } = individualRecipe

          return {
            number: id,
            picture: image,
            pictureType: imageType,
            name: title,
          }  

        })
        setRecipes(newRecipes)

      } else {
        setRecipes([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[searchTerm])

  useEffect(() => {
    fetchRecipes()
  }, [searchTerm,fetchRecipes])

  return (
    <AppContext.Provider
      value={{ loading, recipes, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }