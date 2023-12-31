import React from 'react'
import './header.css'


const Header = () => {
  return (
    <div className="header-container">
        <div className='header'>
            <div className='header-logo'>
                Xpensr <i class="fi fi-rr-credit-card"></i>
            </div>
            <div className='header-button'>
                <a href='https://www.google.com' target='_blank' rel='noopener noreferer'> 
                  <i class="devicon-github-original colored"></i>Star
                </a>
            </div>
        </div>

    </div>   
  )
}
export default Header;