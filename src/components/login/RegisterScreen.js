import React from 'react'
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator'
import {useForm} from '../../hooks/useForm'

import { removetError, setError } from '../../actions/ui';
import { startRegisterWithEmailAndPassword } from '../../actions/auth';

export const RegisterScreen = () => {

const dispatch = useDispatch ();

const {msgError} = useSelector(state => state.ui);


const [formValues, handleInputChange] = useForm();


const {name, email, password, password2} = formValues

const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()){
       dispatch( startRegisterWithEmailAndPassword( email, password, name))
    }
   
}

const isFormValid = () => {
    if (name.trim().length === 0 ){
        dispatch(setError('name is required'))
       
        return false;
    }else if (!validator.isEmail(email)){
        dispatch(setError('Email id not valid '))
        return false
    }else if (password !== password2 || password.length < 4){
        dispatch(setError('password incorrect '))
        return false
    }
    dispatch(removetError());
    return true;
}



  return (
    <div className="container">
    <div className="screen">
      <div className="screen__content">
     
              
        <form className="register" onSubmit={handleRegister}>
        {
              msgError &&
              (
                <div className='auth__alert-error'>
                   {msgError}
                </div>
              )
          }
         

            <h2>Social Network App </h2>
            <h3>Register</h3>
            
            <div className="login__field">
                <i className="login__icon fas fa-user"></i>

                <input 
                    type="text" 
                    className="login__input" 
                    placeholder="Name" 
                    name="name"
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                />
                
            </div>

            <div className="login__field">
                <i className="login__icon fas fa-user"></i>

                <input type="text" 
                    className="login__input" 
                    placeholder="Email" 
                    name='email'
                    value={email}
                    onChange={handleInputChange}
                />

            </div>
            
            <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input type="password" 
                    className="login__input" 
                    placeholder="Password" 
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                />

            </div>

            <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input type="password" 
                    className="login__input" 
                    placeholder="Confirm password" 
                    name="password2"
                    value={password2}
                    onChange={handleInputChange}
                />
            </div>
            
            
            <button className="button login__submit">
                <span className="button__text">Register</span>
                <i className="button__icon fas fa-chevron-right"></i>
            </button>		

        </form>
    
        <Link
                to="/auth/Login"
                className='link'
            >
                Already registered?      
        </Link>
      		
       
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
