import React from 'react';
import img5 from '../../assets/image/lawer1.jpg'
import img6 from '../../assets/image/lawer2.jpg'
import img7 from '../../assets/image/lawer8.jpg'
import img8 from '../../assets/image/lawer6.jpg'

const OtherMember = () => {
    return (
        <div className='mt-5'>
            <h2 className='text-3xl font-bold mb-4'>Our Most Ranking Lawyers</h2>
           <div>
             <div className="timeline-item flex left fadeUp items-center">
                <div className="timeline-img">
                    <img className='h-72 w-64' src={img5} alt="" />
                </div>
                <div className="timeline-content ">
                    <h4 className='timeline-label'>Journy was started</h4>
                    <h2 className='timeline-year'>1990</h2>
                    <p>While the adoption of crycptocurrency for everyday transaction is growing</p>
                </div>
               
            </div>
            <div className="timeline-item flex right fadeUp">
                <div className="timeline-content content-right">
                    <h4 className='timeline-label'>Get Rewards</h4>
                    <h2 className='timeline-year'>2015</h2>
                    <p>While the adoption of cryptocurrency for everyday </p>
                </div>
                 <div className='timeline-img'>
            <img className='h-72 w-64' src={img6} alt="" />
                </div>
            </div>
            <div className="timeline-item flex left fadeUp">
                <div className="timeline-img">
                    <img className='h-72 w-64' src={img7} alt="" />
                </div>
                <div className="timeline-content">
                    <h4 className='timeline-label'>Journy was started</h4>
                    <h2 className='timeline-year'>1990</h2>
                    <p>While the adoption of crycptocurrency for everyday transaction is growing</p>
                </div>
               
            </div>
            <div className="timeline-item flex right fadeUp">
                <div className="timeline-content content-right">
                    <h4 className='timeline-label'>Get Rewards</h4>
                    <h2 className='timeline-year'>2015</h2>
                    <p>While the adoption of cryptocurrency for everyday </p>
                </div>
                 <div className='timeline-img'>
            <img className='h-72 w-64' src={img8} alt="" />
                </div>
            </div>
           </div>
          
        </div>
    );
};

export default OtherMember;