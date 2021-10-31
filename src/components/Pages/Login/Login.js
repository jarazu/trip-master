import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import useAuth from '../../context/useAuth';
import { useHistory, useLocation } from 'react-router';
import './Login.css'

const Login = () => {
    // get auth value
    const {signInUsingGoogle, signInAfterGoogle} = useAuth();

    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/';

    // login button handle
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then((result) => {
                signInAfterGoogle(result, false);
                history.push(redirect_uri)
            }).finally(()=>{
            })
    }
    return (
        <div className="login-area">
            <Button className="fw-bold" variant="primary" onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} /> Login With Google</Button>
        </div>
    );
};

export default Login;