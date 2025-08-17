import React from 'react'
import { TiHtml5 } from "react-icons/ti";
import { FaCss3 } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import SingleSkill from './SingleSkill';
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variants'

interface Props {
  text: string;
  imgSvg: React.ReactNode; 
}

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

const AllSkills:React.FC <Props> = () => {
  return (
    <div>
        <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
            {skills.map((item,index) => {
              return (
                <motion.div
                  variants={fadeIn('up', Number(`0.${index+2}`))}
                  initial = 'hidden'
                  whileInView ='show'
                  viewport={{once: false, amount:0}}
                > 
                  <SingleSkill key={index} text={item.skill} imgSvg = {<item.icon/>}/>
                </motion.div>
              )
            
            })}
        </div>
    </div>
  )
}

export default AllSkills