import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { startLogout } from '../../actions/auth';

import './navbar.css'



export const Navbar = () => {

  const dispatch = useDispatch();
  const { name } = useSelector( state => state.auth);

 


  const handleLogout = ()=>{
    dispatch(startLogout());
  }

  return (
  <nav className='topnav'>
        <div className="display-name"> {name}</div>
          <button
            className='logout'
            onClick={ handleLogout }
          >
              Logout

          </button>
        
    
  </nav>

  )
}

