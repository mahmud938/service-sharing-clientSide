import React, { use } from 'react';
import ServiceCard from '../../Shared/ServiceCard';

const HotService = ({servicePromise}) => {

    const service = use(servicePromise)
    return (
        <div className=''>
             <h2
        className='text-center text-3xl font-bold mb-6 mt-6'>Our most demanding services</h2>
           <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4'>
             {service.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)}
           </div>
        </div>
    );
};

export default HotService;