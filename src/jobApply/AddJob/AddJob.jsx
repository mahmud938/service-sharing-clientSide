
import React from 'react';
import Swal from 'sweetalert2';

const AddJob = () => {
    const handleAddJob = e => {
        e.preventDefault();
        const form = e.target;
      const formData = new FormData(form);
      const newJob = Object.fromEntries(formData.entries())
      console.log(newJob)

 
 



      //   save job to the database 

      fetch('https://service-sharing-server-lovat.vercel.app/lawers/', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(newJob)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
            Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
        }
      })
     




    }
    return (
        <div className='mb-4'>
            <h2 className='mb-4 text-3xl mt-3'>Please add a lawyer</h2>
            <form onSubmit={handleAddJob}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 items-center justify-center">
                <label className="label">Candidate Name</label>
                <input name='providerName' type="text" className="input" placeholder="Enter your name" />
              
                <label className="label">serviceName</label>
                <input name='serviceName' type="text" className="input" placeholder="Enter your service name" />
              
                <label className="label">serviceDescription</label>
                <input name='serviceDescription' type="text" className="input" placeholder="Enter your service description" />
                <label className="label">Charge</label>
                <input name='price' type="text" className="input" placeholder="What your demand" />
                <label className="label">Service Area</label>
                <input name='serviceArea' type="text" className="input" placeholder="What your demand" />
                <label className="label">service image URL</label>
                <input name='serviceImage' type="url" className="input" placeholder="Enter your URL" />
              </fieldset>


              <input type="submit" className='btn mt-2' value="Add job" />


            </form>
        </div>
    );
};

export default AddJob;