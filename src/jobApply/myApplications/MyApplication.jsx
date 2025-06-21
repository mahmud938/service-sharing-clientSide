import React, { Suspense } from 'react';
import ApplicationList from './ApplicationList';
import useAuth from '../../Hook/useAuth';
import { myApplicationPromise } from '../../API/ApplicationsApi';



const MyApplication = () => {

const {user} = useAuth();
    return (
        <div>
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                <ApplicationList myApplicationPromise={myApplicationPromise(user.email)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplication;