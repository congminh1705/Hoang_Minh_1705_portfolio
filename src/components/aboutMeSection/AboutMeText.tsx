import React from 'react'

const AboutMeText:React.FC = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
        <h2 className='text-6xl text-darkPink mb-10'>About Me</h2>
        <p className='text-white'>I am Hoang Cong Minh, a fourth-year Computer Science student in the Troy University (USA) joint program at Hanoi University of Science and Technology (Vietnam). I have founded and lead several academic and technical initiatives, including the Troy Research and Learning Club (a student-driven Troy-academic community ), Troy Course Lab (a curated resource platform of Troy University at Vietnam), and Troy Tracker (a course and GPA management tool).</p>
        <button className='border border-darkPink rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-pink bg-darkCyan'>My Projects</button>
    </div>
  )
}

export default AboutMeText