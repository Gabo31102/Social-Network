import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import {firebase} from '../firebase/firebase-config';
import { AuthRouter } from './AuthRouter';
import { PostsScreen } from '../components/posts/PostsScreen';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoutes';
import { PublicRoute } from './PublicRoutes';


export const AppRouter = () => {

  const dispatch = useDispatch();

  const [ checking, setChecking ] = useState(true);
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);


  useEffect(() => {
        
    firebase.auth().onAuthStateChanged( (user) => {

        if ( user?.uid ) {
            dispatch( login( user.uid, user.displayName ) );
            setIsLoggedIn( true );
        } else {
            setIsLoggedIn( false );
        }

        setChecking(false);

    });
    
}, [ dispatch, setChecking, setIsLoggedIn ])


if ( checking ) {
    return (
        <h1>Espere...</h1>
    )
}


return (
    <Router>
        <div>
            <Switch>
                <PublicRoute
                    path="/auth"
                    component={ AuthRouter }
                    isAuthenticated={ isLoggedIn }
                />

                <PrivateRoute
                    exact
                    isAuthenticated={ isLoggedIn }
                    path="/posts"
                    component={ PostsScreen }
                />

                
            
                <Redirect to="/auth/login" />

            </Switch>
        </div>
    </Router>
)
}
