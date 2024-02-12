import React from 'react';
import logo from '../utils/netflix-logo.png';

const Header = () => {
  return (
   <div className='absolute pl-8 pt-7 '>
       <img className=' h-14 ml-20 ' 
       src={logo} 
       alt='logo'/>
    </div>
  )
}

export default Header