
import React from 'react'

const links = [
  { link: "About Me", section:"about" },
  { link: "Skills", section:"skills" },
  { link: "Experience", section:"experience" },
  { link: "Projects", section:"projects" },
  { link: "Contact", section:"contact" },
];

const FooterMain:React.FC = () => {
  return (
    <div className='px-4'>
        <div className='w-full h-[1px] bg-lightBrown/50 mt-4'></div>
        <div className='md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto'>
            <p className='text-3xl text-lightBrown/50'>Hoang Cong Minh</p>
            <ul className='flex gap-4 text-lightBrown/50 text-xl'>
                {links.map((item, index) => {
                    return(
                        <li key = {index}>
                            <a href="#" className='hover:text-white transition-all duration-500 cursor-pointer'>{item.link}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
        <p className='max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown'>
            © 2025 Minh | All Rights Reserved
        </p>
    </div>
  )
}

export default FooterMain