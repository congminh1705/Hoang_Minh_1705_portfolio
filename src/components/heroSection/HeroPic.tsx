import React from 'react'
import { RiHexagonLine } from "react-icons/ri";
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variants'

const HeroPic:React.FC = () => {
  return (
    <motion.div 
      variants={fadeIn('left', 0.3  ,)}
      initial = 'hidden'
      whileInView ='show'
      viewport={{once: false, amount:0}}
      className='h-full flex items-center justify-center sm:mt-16 md:mx-12'>
      <img src="/images/avatar-portfolio.jpg" alt="Hoang Cong Minh" className='max-h-[300px] w-auto hexagon'/>
      <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
        <RiHexagonLine className='md:w-[100%] sm:w-[150%] min-h-[550px] w-auto text-pink blur-md animate-[spin_20s_linear_infinite]'/>
      </div>
    </motion.div>
  )
}

export default HeroPic