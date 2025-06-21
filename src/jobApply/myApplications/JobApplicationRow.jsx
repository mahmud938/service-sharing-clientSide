import React from 'react';

const JobApplicationRow = ({application, index}) => {
    const {providerName,serviceName,description,serviceArea,serviceImage} = application
    return (
 
    <tr>
        <th>{index+1}</th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={serviceImage} />
              </div>
            </div>
           
          </div>
        </td>
          <td>{providerName}</td>
          <td>{serviceName}</td>
         <td>{description}</td>
         <td>{serviceArea}</td>
        </tr>
     
    );
};

export default JobApplicationRow;