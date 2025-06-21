import React, { use } from 'react';


import { AuthContext } from '../context/AuthContext/AuthContext';
import { useParams } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';


const ClientApply = () => {
    const {id: clientId}= useParams();
    const {user} = use(AuthContext)
    console.log(clientId,user)

    const handleApplyFrom = e => {
        e.preventDefault();
        const form = e.target;
        const serviceImage=form.serviceImage.value;
        const providerName=form.providerName.value;
        const serviceArea=form.serviceArea.value;
        const serviceName=form.serviceName.value;
        const description=form.description.value;
        console.log(serviceArea,serviceImage,serviceName,description)


        const application = {
            clientId,
            applicant: user.email,
            serviceImage,
            providerName,
            serviceName,
            serviceArea,
            description
        }
        console.log(application)

        axios.post('https://service-sharing-server-lovat.vercel.app/applications', application)
        .then(res => {
            console.log(res)
            if(res.data.insertedId){
                Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
            }
        })
        .catch(error => {
            console.log(error)
        })

   
        
    }
    return (
        <div>
            <h3 className='text-4xl mb-5 mt-4'>Add your details and problem</h3>
           <form onSubmit={handleApplyFrom}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  

  <label className="label">Service Image</label>
  <input name='serviceImage' type="url" className="input" placeholder="Enter your service url" />

  <label className="label">provider Name</label>
  <input name='providerName' type="text" className="input" placeholder="Enter your provider name" />
  <label className="label">Service Name</label>
  <input name='serviceName' type="text" className="input" placeholder="Enter your service name" />

  <label className="label">Service Area</label>
  <input name='serviceArea' type="text" className="input" placeholder="Enter Your service area" />
  <label className="label">Description</label>
  <input name='description' type="text" className="input" placeholder="Enter Your description" />

  <input type="submit" className='btn' value='Add Now' />
</fieldset>
           </form>
        </div>
    );
};

export default ClientApply;