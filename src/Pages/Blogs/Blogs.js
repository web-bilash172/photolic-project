import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blog-container'>
            <div>
                <h1>Difference between authorization and authentication</h1>
                <h3>Authentication is the identity of users. And Authorization determines what resources a user can access.
                    Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.--Authorization works through settings that are implemented and maintained by the organization.
                    Authentucation is the first steps of a good idnentity and access management system. but Authorization takes place after authentication.
                    Authentucation needs usually user’s login details. Authorization needs user’s privilege or security levels</h3>
            </div>
            <div>
                <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <h3>
                    I use firebase it's is easy to start a project with firebase or add a
                    firebase to my project. it is painless authentication with google,facebook,
                    twitter. github,email or phone.quick setup authentication Https by default -
                    secure http traffic without setting up certificates.Any static html/javascrip
                    t content can be hosted. there are some other option for auhtentication
                    back4app is one of them.

                </h3>
            </div>
            <div>
                <h1>What other services does firebase provide other than authentication</h1>
                <h3>
                    Firebase other services are-
                    Cloud Messaging
                    Cloud Firestore
                    Cloud Functions
                    Hosting
                    Google Analytics
                    Predictions
                    Storage
                </h3>
            </div>
        </div>
    );
};
