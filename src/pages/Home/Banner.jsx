import React from 'react';
import { motion } from "motion/react"
import team1 from '../../assets/image/law1.jpg'
import team2 from '../../assets/image/image9.jpg'

const Banner = () => {
    return (
     <div className="hero bg-blue-300 min-h-96">
  <div className="hero-content flex flex-col lg:flex-row-reverse justify-between items-center">
  <div>
     <div className='flex-1'> <motion.img
    animate={{y:[ 100,150,100]}}
      transition={{duration: 6, repeat: Infinity}}
      src={team1}
      className="max-w-sm rounded-t-[40px] shadow-2xl"
    /></div>
   <div className='flex-1'> <motion.img
      src={team2}
      animate={{x:[ 100,150,100]}}
      transition={{duration: 10,delay:4, repeat: Infinity}}
      className='max-w-sm rounded-t-[40px] rounded-b-[40px] shadow-2xl'
    /></div>
  </div>
    <div>
      <motion.h2 className='text-5xl font-bold'>We Provide Effective <br /> Legal Solutions</motion.h2>
      <p className="py-6">
       Get reliable legal support for personal or business matters. Our experts <br /> provide clear guidance, protect your rights, and help resolve <br /> issues efficiently with professionalism and confidentiality.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;