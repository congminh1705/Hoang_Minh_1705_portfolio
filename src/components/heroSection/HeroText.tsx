import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerMotion/variants'
import WaveText from '../../components/WaveText'

const HeroText:React.FC = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center md:text-left sm:text-center'>
        <motion.h2 
          variants={fadeIn('down', 0.3,)}
          initial = 'hidden'
          whileInView ='show'
          viewport={{once: false, amount:0}}
          className='lg:text-2xl sm:text-xl uppercase text-orange'>Web Developer
        </motion.h2>
        <motion.h1 
          variants={fadeIn('right', 0.5,)}
          initial = 'hidden'
          whileInView ='show'
          viewport={{once: false, amount:0}}
          className='md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-darkPink'>Hoang Cong Minh</motion.h1>
        <motion.p
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="text-lg mt-4 text-white"
        >
            <div className="max-w-[700px] mx-auto text-center">
              <WaveText text="I’m a senior Computer Science student at HUST (Vietnam), in collaboration with Troy University (USA), specializing in web development, covering both front-end and back-end technologies." />
            </div>
        </motion.p>
    </div>
  )
}

export default HeroText