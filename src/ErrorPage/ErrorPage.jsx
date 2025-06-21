import React from 'react';
import errorPage from '../assets/lotties/error Page.json'
import Lottie from 'lottie-react';
const ErrorPage = () => {
    return (
        <div>
             <Lottie style={{width:'full', height:'500px'}} animationData={errorPage} loop={true}></Lottie>
            
        </div>
    );
};

export default ErrorPage;