import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {  Link  } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth';



export const LoginScreen = () => {

  const dispatch = useDispatch();

  const { loading } = useSelector( state => state.ui);

  const [ formValues, handleInputChange] = useForm()

  const {email, password} = formValues

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch( startLoginEmailPassword(email, password));
  }

 
  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  }



  return (

    <div className="container">
        <div className="screen">
          <div className="screen__content">
            
            <form className="login" onSubmit={ handleLogin }>
            <h2>Social Network App</h2>
            <h3>Login</h3>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>

                <input 
                  type="text"
                  className="login__input"
                  placeholder="Email" 
                  name="email"
                  autoComplete="off"
                  value={ email}
                  onChange={ handleInputChange }
                  />
              </div>
             
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>

                <input 
                type="password"
                className="login__input" 
                placeholder="Password"
                name="password"
                autoComplete="off"
                value={ password }
                onChange={ handleInputChange }
                />
              </div>
              <button
              type="submit"
      
              className="button login__submit"
              disabled={ loading}
              >
                <span className="button__text">Login</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>				
            </form>

            <div className="auth__social-networks"
            onClick={ handleGoogleLogin }
            >
              <div className='google-btn'>
                <div className="google-icon-wrapper">
                  <img className=".social-login__icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                </div>
                <p>
                    <b>Sign in with google</b>
                </p>
              </div>
                
              </div>    
           
            <div>
            <Link
                to="/auth/register"
                className='link'
            >
                Create a new account      
            </Link>

            </div>
      		
          </div>

        

          <div className="screen__background">        
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>		
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>		
        </div>
      </div>
  )
}
