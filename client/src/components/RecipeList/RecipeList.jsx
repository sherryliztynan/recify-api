// import React, {useState, useEffect} from 'react'
// // import React from 'react'
// import SingleRecipe from '../SingleRecipe/SingleRecipe'
// import Loading from '../Loading/Loading'
// import { useGlobalContext } from '../../context'
// import ReactPaginate from "react-paginate"

// // import { useParams, Link } from 'react-router-dom'
// // import axios from "axios";

// const RecipeList = () => {
//   const { recipes, loading } = useGlobalContext()


//   if (loading) {
//     return <Loading/>
//   }
//   if (recipes.length < 1) {
//     return (
//       <h2 className='section-title'>
//         no recipes matched your search criteria
//       </h2>
//     )
//   }
  
//   return (
//     <section className="section">
//       <h2 className="section-title">Recipes</h2>
//       <div className="recipes-center">
//       {recipes.map((recipe) => {
//       return <SingleRecipe key={recipe.number} {...recipe} />
//       })}
//       </div>
//     </section>
//   )
//     }
//     export default RecipeList

// // const displayRecipes = recipes.slice(pagesVisited, pagesVisited + recipesPerPage).map((recipe) => {
// //   return (
// //   <div className="recipe">
// //       <h3>{recipe.title}</h3>
// //       <h3>{recipe.image}</h3>
// //       <h3>{recipe.id}</h3>
// //   </div>
// //   )
// // })
// // const pageCount = Math.ceil(recipes.length / recipesPerPage)

// // const changePage = ({selected}) => {
// // setPageNumber(selected)
// // }
// // return (
// //   <div className="App">
// //   {displayRecipes}
// //   <ReactPaginate
// //   previousLabel={"Previous"}
// //   nextLabel={"Next"}
// //   pageCount={pageCount}
// //   onPageChange={changePage}
// //   containerClassName={"pagination-buttons"}
// //   previousLinkClassName={"previous-button"}
// //   nextLinkClassName={"next-button"}
// //   disabledClassName={"pagination-disabled"}
// //   activeClassName={"pagination-active"}
// //   />
// //   </div>
// // )
// // }







