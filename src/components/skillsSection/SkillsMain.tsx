import React from 'react'
import SkillsText from './SkillsText'
import AllSkills from './AllSkills'
import AllSkillsSM from './AllSkillsSM'
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variants'

const SkillsMain:React.FC = () => {
  return (
    <div id='skills'>
        <div className='max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden'>
            <motion.div
                variants={fadeIn('down', 0.3,)}
                initial = 'hidden'
                whileInView ='show'
                viewport={{once: false, amount:0}}
            >
                <SkillsText/>
            </motion.div>
             <div className='mt-8 absolute left-[50%] -translate-x-[50%] lg:block sm:hidden'>
                <AllSkills/>
            </div>
        </div>
        <div className='sm:block lg:hidden'>
            <AllSkillsSM/>
        </div>
    </div>
    )
}

export default SkillsMain