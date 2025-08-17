import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const ContactSocial:React.FC = () => {
  return (
    <div className='flex gap-4'>
        <SingleContactSocial link="#" Icon={FaFacebook}/>
        <SingleContactSocial link="#" Icon={FaGithub}/>
        <SingleContactSocial link="#" Icon={CiLinkedin}/>
    </div>
  )
}

export default ContactSocial