import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../../pages/loading/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext);
    const location = useLocation();
    console.log(user)

    if(loading){
        return <Loading></Loading>
    }

    if(user && user?.email){

        return children;
    }
    return <Navigate to='/signIn' state={location.pathname}></Navigate>
};

export default PrivateRoute;