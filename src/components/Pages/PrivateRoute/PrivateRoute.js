import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Redirect } from 'react-router';
import useAuth from '../../context/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {users, isLoading} = useAuth();
    if(isLoading){
        return <Spinner animation="border" variant="danger"/>
    }
    return (
        <Route
            {...rest}
            render={({location}) => users?.email? children : <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />}
        >
            
        </Route>
    );
};

export default PrivateRoute;