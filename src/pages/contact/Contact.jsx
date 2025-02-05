import {styles} from '../../constants/styles'
import Title from '../../components/Title'
import Faqs from '../../components/Faqs'
import { services } from './constants/constants'
import Form from './components/Form'

const Contact = () => {
  return (
    <div className={`${styles.padX} ${styles.padY}`}>
        <Title lgheader='Talk to our support team' smHeader={'Contact us'} txt={'Contact us to recover the password or seed phrase to your locked crypto wallet. Our friendly team would love to hear from you.'} />

        <div className='flex flex-col lg:flex-row gap-x-14 gap-y-28 items-start mt-24'>
          <ul className='gap-10 flex flex-col lg:w-1/2'>
            {services.map(item => {
              const Icon = item.icon
              return(
                <li className='flex gap-7 items-center' key={item.id}>
                  <span className="text-blue text-[1.5rem] bg-indigo-100 min-w-[70px] h-[70px] rounded-full grid place-content-center relative">
                      <span className="absolute w-[50px] h-[50px] bg-indigo-300 rounded-full top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]" />
                      <Icon className="relative" />
                  </span>
                  <div>
                    <h3 className='text-lg text-gray-700 font-semibold'>{item.txtLg}</h3>
                    <h3 className='mt-1 text-gray-600'>{item.txtSm}</h3>
                  </div>
                </li>
              )
            })}
          </ul>

          <Form />
        </div>
        
        <div className='mt-24' />
        <Faqs />
    </div>
  )
}

export default Contact