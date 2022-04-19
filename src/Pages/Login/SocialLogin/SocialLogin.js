import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
// social media(google) login option 
const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>

    }
    if (user) {
        navigate('/home')

    }
    return (
        <div>
            <div>
                <button onClick={() => signInWithGoogle()} style={{ height: '40px', width: '200px' }} className='btn btn-secondary m-auto'>
                    <img style={{ height: '30px', width: '30px' }} src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
                    Google Sign In
                </button>
                {errorElement}

            </div>
        </div>
    );
};

export default SocialLogin;