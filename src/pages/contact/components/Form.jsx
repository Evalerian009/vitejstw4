import { countries, recoveryTypes, walletTypes } from "../constants/constants"
import { InputField, SelectField } from "./FormFields"

const Form = () => {
  return (
    <form className="flex flex-col sm:grid grid-cols-1 lg:w-1/2 sm:grid-cols-2 gap-x-7 gap-y-10 w-[95%] md:w-[90%] mx-auto">
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
          name={'Phone Number'} 
          title={'phone number'}
          placeholder={'+1 234-567-89'}
          type={'text'}
        />

        <SelectField 
          custStyles={'col-span-2'}
          name={'country'}
          optionsList={recoveryTypes}
          title={'Recovery type'}
        />

        <SelectField 
          custStyles={''}
          name={'country'}
          optionsList={walletTypes}
          title={'Choose you wallet type'}
        />
        
        <InputField 
          name={'Phone Number'} 
          title={'Wallet Value'}
          placeholder={'100.00'}
          type={'number'}
        />

        <label className="col-span-2 flex gap-2 font-semibold text-sm text-gray-500">
          <input type="checkbox" />
          <span>You agree to our friendly terms and conditions</span>
        </label>

        <button className="border px-8 border-gray-300 font-semibold py-2.5 rounded-lg duration-300 bg-blue hover:bg-indigo-800 text-white col-span-2">Send Message</button>
    </form>
  )
}

export default Form