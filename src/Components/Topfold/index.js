import React, { useState } from 'react'
import './topfold.css'
import { Link } from 'react-router-dom'


const Topfold = () => {
    const [query,setQuery]=useState("")
    const handleQuery = (e) => {
        console.log(e.target.value)
        setQuery(e.target.value)
        
    }
  return (
    <div className='topfold'> 
    {window.location.pathname === '/' ? 
        (<div className='home-topfold'>
            <div className='searchbar'>
            <i class="fi fi-rr-search"></i>
            <input placeholder='Search your expenses' value={query}  onChange={(e)=>handleQuery(e)}/>
            </div>
            <Link to="/add-expense">
              <div className='add-button'>
              <i class="fi fi-rr-add"></i>
                  Add
              </div>
            </Link>
        </div> 
        )
        :
        (
          <div className='add-topfold'>
              <Link to="/">
                <div className='add-topfold-button-back'>
                  <i class="fi fi-rr-angle-left"></i>
                  <label>Back</label>
                </div>  
              </Link>
              <Link to="/">
                <div className='add-topfold-button-cancel'>
                <label>Cancel</label>
                <i class="fi fi-rr-cross"></i>
                </div>
              </Link>
          </div>
        )}
    </div>
  )
}

export default Topfold