import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {

  const [name, setName] = useState ('');
  const [email,setEmail] = useState ('');
  const [message,setMessage] = useState ('');
  const [success, setSucess] = useState ('');

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName (e.target.value);
  }
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail (e.target.value);
  }
  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage (e.target.value);
  }

  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_mh170503",   // Service ID
        "template_ubxkdqr",   // Template ID
        form.current,         // Form reference
        "iegicbPfG66r8wO9q"   // Public Key
      )
      .then(
        () => {
          setName ('')
          setEmail ('')
          setMessage ('')
          setSucess ('Message Sent!')
        },
        (error: any) => {
          alert("❌ Failed to send email: " + error.text);
        }
      );
  };

  return (
    <div>
        <p className="text-darkCyan">{success}</p>
      <form
        className="flex flex-col gap-4 text-darkGreen"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          name="from_name"
          type="text"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg px-2 border border-darkCyan"
          value = {name}
          onChange={handleName}
        />
        <input
          name="from_email"
          type="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg px-2 border border-darkCyan"
          value = {email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={10}
          required
          className="w-full min-h-[120px] rounded-lg px-2 py-2 resize-y border border-darkCyan focus:outline-none focus:ring-2 focus:ring-purple-400"
          value = {message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkGreen bg-red/45 transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
