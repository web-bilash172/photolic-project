import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
// register component 
const Register = () => {
    const [
        // creating user for registration 
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    };
    if (user) {

    }
    // this function will submit the information when you will click submit button 
    const handleRegister = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email);

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');
        navigate('/home');

    }
    return (
        <div className='register-form'>
            <h1 className='text-center mt-5 mb-3'>Please Register..!!</h1>
            {/* register form  */}
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='Password' required />

                <input

                    className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" onClick={navigateLogin} className='text-primary pe-auto text-decoration-none'>Please Login</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;