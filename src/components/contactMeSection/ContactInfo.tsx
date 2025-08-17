import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import SingleInfo from './SingleInfo';

const ContactInfo:React.FC = () => {
  return (
    <div>
        <SingleInfo text='congminh17052003@gmail.com' Image={MdOutlineMail} />
        <SingleInfo text='+84 911099155' Image={MdOutlinePhoneIphone} />
        <SingleInfo text='Hanoi, Vietnam' Image={GrLocation} />
    </div>
  )
}

export default ContactInfo