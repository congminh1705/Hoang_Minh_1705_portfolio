import React from 'react'
import { FaCircleArrowRight } from "react-icons/fa6";
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variants'

interface MyComponentProps {
  name: string;
  year: string;
  align: string;
  image: string;
  link: string;
}

const SingleProject:React.FC<MyComponentProps> = ({name, year, align, image, link}) => {
  return (
    <motion.div variants={fadeIn('up', 0.3,)} initial = 'hidden' whileInView ='show' viewport={{once: false, amount:0}} className={`flex w-full sm:flex-col-reverse items-center gap-8 ${align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
        } justify-end`}>
        <div>
            <h2 className='md:text-4xl sm:text-3xl text-purple'>{name}</h2>
            <h2 className={`text-xl font-thin text-white font-special sm:text-center ${align === 'left' ? 'md:text-right' : 'md:text-left'}`}>{year}</h2>
            <a href={link} className={`mt-4 text-2xl flex gap-3 item-center text-lightCyan hover:text-purple transition-all duration-500 cursor-pointer sm:justify-self-center ${align === 'left' ? 'md:justify-self-end' : 'md:justify-self-start'   
            }`}>
                View <FaCircleArrowRight />
            </a>
        </div>

        <div className='max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white'>
            <div className='w-full h-full bg-pink opacity-0 absolute top-0 left-0 hover:opacity-50 transition-all duration-500 md:block sm:hidden'></div>
            <img src={image} alt="Project Image" className='w-full h-full'/>
        </div>
    </motion.div>
  )
}

export default SingleProject