import React from 'react';

import { Link } from 'react-router';
const ServiceCard = ({service}) => {

    const {_id,serviceName,serviceDescription,providerImage,providerName,servicePrice} = service;
    return (

        <div>

       
        <div className="card bg-base-100 w-96 shadow-sm mb-6">
  <figure>
    <img
    className='h-72 w-76'
      src={`${providerImage}`}
      alt="image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {providerName}
      <div className="badge badge-secondary">charge: {servicePrice}</div>
    </h2>
    <p className='font-bold'>Service Name: {serviceName}</p>
    <p>{serviceDescription}</p>
    <div className="card-actions justify-end">
      <Link to={`/lawers/${_id}`}><button className="btn btn-primary">Show Details</button></Link>
    </div>
  </div>
</div>
</div>
    );
};

export default ServiceCard;