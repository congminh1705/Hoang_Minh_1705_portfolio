import React from 'react'
import ContactForm from './ContactForm'

const ContactMeLeft:React.FC = () => {
  return (
    <div className='flex flex-col gap-8 w-full'>
        <div>
            <h2 className='text-cyan text-center text-3xl mb-4'>Get In Touch</h2>
            <p className='text-center'>Feel free to reach out if you'd like to collaborate 
                <br />
                you are just a few click away!
            </p>
        </div>
        <div>
            <ContactForm/>
        </div>
    </div>
  )
}

export default ContactMeLeft