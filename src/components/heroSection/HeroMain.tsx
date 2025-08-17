import React from 'react'
import HeroText from "./HeroText"
import HeroPic from "./HeroPic"

const HeroMain:React.FC = () => {
  return (
    <div className='pt-40 pb-16'>
      <div className='flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative p-4'>
        <HeroText />
        <HeroPic />
      </div>
    </div>
  )
}

export default HeroMain