import React, { use } from 'react';
import JobApplicationRow from './JobApplicationRow';

const ApplicationList = ({myApplicationPromise}) => {
    const applications = use(myApplicationPromise)
    return (
        <div>
            <h3 className='text-3xl'>Client Applied so far: {applications.length}</h3>

            <div className="overflow-x-auto">
  <table className="table table-xs table-pin-rows table-pin-cols">
    <thead>
      <tr>
        <td>Serial</td>
        <td>service Image</td>
        <td>Name</td>
        <th>service Name</th>
       <td>Description</td>
       <td>Location</td>
       
      </tr>
    </thead>
    <tbody>
     {
        applications.map((application, index) => <JobApplicationRow
        key={application._id}
        index = {index}
        application={application}
        ></JobApplicationRow>)
     }
    </tbody>
   
  </table>
</div>
        </div>
    );
};

export default ApplicationList;