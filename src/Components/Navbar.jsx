import React, { useState } from 'react'
import {Link} from "react-router-dom"
import '../style/Navbar.css'

import {RxTextAlignRight} from 'react-icons/rx'
const Navbar = () => {

  const [respon,serrespon] =useState(false)
  console.log(respon)
  return (
    <div className= {respon? "navbar2":"navbar-header"}>
   
      <div>
     <h4><span>C</span>rpto</h4></div>
     <div>
        <ul> <Link className='linking' to="/">
          <li className='list'>Home</li>
          </Link>
          <Link className='linking' to="/exchange">
          <li className='list'>Exchange</li>
          </Link>
          <Link className='linking' to="/coin"> 
          <li  className='list'>Coin</li>
          </Link>
        </ul>   
     </div>
     <div className='hamburger' onClick={()=>{
      serrespon(!respon)
     }}><RxTextAlignRight /></div>
    </div>
  )
}

export default Navbar