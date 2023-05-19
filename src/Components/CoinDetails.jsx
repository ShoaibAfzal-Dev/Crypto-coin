import React from 'react'
import { Link } from 'react-router-dom'

const CoinDetails = ({id,name,price,image}) => {
  return (
    <Link to={`/coin/${id}`} >
    <div className='details-coin'>
      <img src={image} alt={name}  />
      <h1>{id}</h1>
      <p>{name}</p>
      <h5>${price}</h5>
    </div></Link>
  )
}

export default CoinDetails