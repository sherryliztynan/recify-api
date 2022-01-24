import React from 'react'
import { Link } from 'react-router-dom'

const SingleRecipe = ({number,name,picture}) => {
  return (
    <article className="recipe">
      <div className="img-container">
        <img src={picture} alt={name} />
      </div>
      <div className="recipe-footer">
      <h3>{name}</h3>
      <Link to={`/recipes/${number}`} className="btn btn-primary btn-details" >
      details
        </Link>
    </div>
  </article>
  )
}
export default SingleRecipe