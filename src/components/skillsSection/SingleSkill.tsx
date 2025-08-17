import React from 'react'

interface Props {
  text: string;
  imgSvg: React.ReactNode;
}

const SingleSkill:React.FC <Props> = ({ text, imgSvg }) => {
  return (
    <div className='hover:-translate-y-10 transition-all duration-500'>
        <div className='flex flex-col items-center gap-2 relative'>
            <div className='bg-white text-darkCyan h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-grey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-darkPink'>{imgSvg}</div>
            <p className='text-white font-bold'>{text}</p>
        </div>

        <div className='w-[100px] h-[180px] bg-cyan absolute top-[50px] -z-10 rounded-b-full '></div>

    </div>
  )
}

export default SingleSkill