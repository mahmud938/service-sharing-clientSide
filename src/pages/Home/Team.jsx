import React from 'react';
import img1 from '../../assets/image/lawer3.jpg'
import img2 from '../../assets/image/lawer4.jpg'
import img3 from '../../assets/image/lawer5.jpg'
import img4 from '../../assets/image/lawer7.jpg'

const Team = () => {
    return (
        <div className='mt-5 bg-base-300 mx-auto items-center'>
            <h2 className='text-3xl font-bold'>Our Management Team</h2>
            <p className='text-2xl font-semibold mt-2 mb-4'>OUR AVENGERS</p>
          <div className="team-members flex gap-4 mx-auto items-center ml-14 ">
            <div className="team-member">
                <img   src={img1} alt="" className='imageReveal h-72 w-64'/>
                <p className='font-bold text-green-400'>Lawyer</p>
                <h3 className='font-bold'>Alex Carter</h3>
            </div>
            <div className="team-member">
                <img src={img2} alt="" className='imageReveal h-72 w-64'/>
                <p className='font-bold text-green-400'>Lawyer</p>
                <h3 className='font-bold '>Linda Park</h3>
            </div>
            <div className="team-member">
                <img  src={img3} alt="" className='imageReveal h-72 w-64'/>
                <p className='font-bold text-green-400'>Lawyer</p>
                <h3 className='font-bold'>Robert King</h3>
            </div>
            <div className="team-member">
                <img src={img4} alt="" className='imageReveal h-72 w-64'/>
                <p className='font-bold text-green-400'>Lawyer</p>
                <h3 className='font-bold'>james Chain</h3>
            </div>
          </div>
        </div>
    );
};

export default Team;