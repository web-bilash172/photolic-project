import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const RequireAuth = ({ children }) => {
    const [user] = useAuthState(auth);
    return (
        <div>

        </div>
    );
};

export default RequireAuth;