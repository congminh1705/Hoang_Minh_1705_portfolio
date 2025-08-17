import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variants'

interface MyComponentProps {
  name: string;
  year: string;
  align: string;
  image: string;
  link: string;
}
const projects = [
    {
        name: "Troy Course Lab",
        year: "Founder & Project Executive • 2025",
        align: "left",
        image: "../../public/images/TRLC.png",
        link: "#",
    },

    {
        name: "Troy Tracker",
        year: "Founder & Project Executive • 2025",
        align: "right",
        image: "../../public/images/TroyTracker.png",
        link: "#",
    },

    {
        name: "Imacall",
        year: "BA & DEV • 2025",
        align: "left",
        image: "../../public/images/Imacall.png",
        link: "#",
    },
]


const ProjectsMain:React.FC <MyComponentProps> = () => {
  return (
    <div id = 'projects' className='max-w-[1200px] mx-auto px-4'>
        <motion.div
            variants={fadeIn('up', 0.3,)}
            initial = 'hidden'
            whileInView ='show'
            viewport={{once: false, amount:0}}
        >
            <ProjectsText/>
        </motion.div>
        <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
            {projects.map((item, index) =>{
                return <SingleProject key={index} name={item.name} year={item.year} align={item.align} image={item.image} />
            })}
        </div>
    </div>
  )
}

export default ProjectsMain