import React from 'react';
import { Link, useLoaderData } from 'react-router';

const LawyerDetails = () => {
    const {_id,serviceName, providerName, providerImage} = useLoaderData()
    
    return (
        <div className='flex justify-between items-center p-4 mt-5 mb-5'>
          <div><img className='h-96 w-96' src={providerImage} alt="" /></div>
          <div>
            <h2 className='text-4xl'>Service Name: {serviceName}</h2>
            <h2 className='text-2xl font-bold'>Name: {providerName}</h2>
           <Link to={`/clientApply/${_id}`}> <button className='btn w-full btn-primary mt-5'>Appointment Now</button></Link>
          </div>
        </div>
    );
};

export default LawyerDetails;