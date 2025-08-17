import React from 'react'
import { BsArrowDownRightSquareFill } from "react-icons/bs";

const NavbarBtn:React.FC = () => {
  return <button className='px-4 py-2 rounded-full text-xl font-bold border-cyan border flex items-center gap-2 bg-gradient-to-r from-cyan to-pink hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow'>
    Hire Me 
    <div className='sm:hidden md:block'>
      <BsArrowDownRightSquareFill/>
    </div>
  </button>
}
 
export default NavbarBtn      