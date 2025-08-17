import React from 'react'
import { TiHtml5 } from "react-icons/ti";
import { FaCss3 } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variants'

const skills = [
    {
    skill: 'HTML',
    icon: TiHtml5,
    },

    {
    skill: 'CSS',
    icon: FaCss3,
    },

    {
    skill:'JavaScript',
    icon: FaJsSquare,
    },

    {
    skill:'TypeScript',
    icon: BiLogoTypescript,
    },

    {
    skill:'React',
    icon: FaReact,
    },

    {
    skill:'Node.js',
    icon: FaNode,
    },

    {
    skill:'C++',
    icon: SiCplusplus,
    },

    {
    skill:'Java',
    icon: FaJava,
    },
]


const AllSkillsSM:React.FC = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
        {skills.map((item,index) => {
            return(
              <motion.div 
                variants={fadeIn('up', 0.3,)}
                initial = 'hidden'
                whileInView ='show'
                viewport={{once: false, amount: 0.7}}
                key= {index} className='flex flex-col items-center'>
                  <item.icon className='text-8xl text-purple/80'/>
                  <p className='text-center mt-4 text-white'>{item.skill}</p>
              </motion.div>
            )
        })}
    </div>
  )
}

export default AllSkillsSM