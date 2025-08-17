import React from 'react'
import ContactInfo from './ContactInfo'
import ContactSocial from './ContactSocial'

const ContactMeRight:React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
        <img src="../../public/images/ContactMe.png" alt="Contact Me" className='max-w-[300px]' />
        <ContactInfo/>
        <ContactSocial/>
    </div>
  )
}

export default ContactMeRight