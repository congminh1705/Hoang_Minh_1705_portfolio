import React from 'react'

const SkillsText:React.FC = () => {
  return (
    <div className='flex flex-col items-center mt-[100px]'>
        <h2 className='text-6xl text-darkPink mb-10'>My Skills</h2>
        <p className='text-lg text-center text-white'>
            My technical skill set spans both frontend and backend development. On the frontend, I have experience using TypeScript, JavaScript, and ReactJS. On the backend, I have worked with Node.js, C++, and Java. In addition, I am comfortable with tools and technologies such as Docker, Git, and MySQL. I focus on delivering high-quality software solutions that meet user needs while ensuring long-term performance and reliability.
        </p>
    </div>
  )
}

export default SkillsText