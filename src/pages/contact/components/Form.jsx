import { countries, recoveryTypes, walletTypes } from "../constants/constants"
import { InputField, SelectField } from "./FormFields"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();

  const [ agree, setAgree ] = useState(false)
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccessMessage("Your message has been sent successfully!");
          setLoading(false)
          console.log('SUCCESS!');
        },
        (error) => {
          setErrorMessage("Failed to send message. Please try again.");
          console.log('FAILED...', error.text);
        },
      );
      
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col sm:grid grid-cols-1 lg:w-1/2 sm:grid-cols-2 gap-x-7 gap-y-10 w-[95%] md:w-[90%] mx-auto">
        <InputField 
          name={'firstname'} 
          title={'First Name'}
          placeholder={'First Name'}
          type={'text'}
        />

        <InputField 
          name={'lastname'} 
          title={'Last Name'}
          placeholder={'Last Name'}
          type={'text'}
        />

        <SelectField 
          custStyles={'col-span-2'}
          name={'country'}
          optionsList={countries}
          title={'Country'}
        />

        <InputField 
          name={'email'} 
          title={'Email'}
          placeholder={'yourcompany@company.com'}
          type={'email'}
        />

        <InputField 
          name={'phone_number'} 
          title={'phone number'}
          placeholder={'+1 234-567-89'}
          type={'text'}
        />

        <SelectField 
          custStyles={'col-span-2'}
          name={'recovery_type'}
          optionsList={recoveryTypes}
          title={'Recovery type'}
        />

        <SelectField 
          custStyles={''}
          name={'wallet_type'}
          optionsList={walletTypes}
          title={'Choose you wallet type'}
        />
        
        <InputField 
          name={'wallet_value'} 
          title={'Wallet Value'}
          placeholder={'100.00'}
          type={'number'}
        />

        <label className="cursor-pointer col-span-2 flex gap-2 font-semibold text-sm text-gray-500">
          <input type="checkbox" onClick={()=>setAgree(!agree)} />
          <span>You agree to our friendly terms and conditions</span>
        </label>

        <button className="border px-8 border-gray-300 font-semibold py-2.5 rounded-lg duration-300 disabled:opacity-35 du bg-blue cursor-pointer hover:bg-indigo-800 text-white col-span-2" disabled={!agree} onClick={()=>setloading(false)}>Send Message</button>
    </form>
  )
}

export default Form