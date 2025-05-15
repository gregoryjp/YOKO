import React from 'react'
import logo from '../../assets/logoY-degradado.png'
import './Logo.css'
const Logo = () => {
  return (
     <div className='container'>
    
    <img src={logo} alt="logo-yoko" />
   <h1 style={{ fontFamily: 'var(--font-logo)', fontSize: '2.5rem' }}>
     YOKO
    </h1>
      
    </div>


  )
}

export default Logo