import {styles} from '../../constants/styles'
import Title from '../../components/Title'

const Pricing = () => {
  return (
    <div className={`${styles.padX} ${styles.padY}`}>
      <Title lgheader={'Read our testimonials'} smHeader={'About Us'} />

      <div className='flex flex-col items-center mt-32'>
        <img src="currency-logo.png" alt="" className='max-w-[200px]' />
        <p className='text-xl md:text-2xl lg:text-[2rem] w-[85%] font-semibold text-gray-400 mt-8 text-center'>&quot;Losing the password to your wallet can cost you millions, but options for recovery exist.&quot;</p>

        <img src="user.png" alt="" className='w-[75px] mt-10' />
        <p className='mt-3 font-semibold'>William Farrington</p>
        <p className='mt-1 text-gray-500'>Journalist, Currency.com</p>
      </div>
    </div>
  )
}

export default Pricing