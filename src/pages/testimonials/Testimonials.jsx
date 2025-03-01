import {styles} from '../../constants/styles'
import Title from '../../components/Title'
import { IoStarSharp } from 'react-icons/io5'
import Slider from "react-slick";
import { reviews, sliderSettings } from './constants/constants';
import Cta from '../../components/Cta'
const Testimonials = () => {
  return (
    <div className={`${styles.padY}`}>
      <Title lgheader={'Read our testimonials'} smHeader={'About Us'} />

      <div className={`flex flex-col items-center mt-32 ${styles.padX} `}>
        <img src="currency-logo.png" alt="" className='max-w-[200px]' />
        <p className='text-xl md:text-2xl lg:text-[2rem] w-[85%] font-semibold text-gray-400 mt-8 text-center'>&quot;Losing the password to your wallet can cost you millions, but options for recovery exist.&quot;</p>

        <img src="user.png" alt="" className='w-[75px] mt-10' />
        <p className='mt-3 font-semibold'>William Farrington</p>
        <p className='mt-1 text-gray-500'>Journalist, Currency.com</p>
      </div>

      <Slider {...sliderSettings} className={`${styles.padX}  slider-container mt-12`}>
        {reviews.map(review => ((
          <div key={review.id} className='px-1'>
            <div  className='bg-slate-200 p-7 rounded-2xl flex flex-col'>
              <div className='flex'>
                <IoStarSharp  className='text-yellow-400 text-2xl' />
                <IoStarSharp  className='text-yellow-400 text-2xl' />
                <IoStarSharp  className='text-yellow-400 text-2xl' />
                <IoStarSharp  className='text-yellow-400 text-2xl' />
                <IoStarSharp  className='text-yellow-400 text-2xl' />
              </div>
              <p className='text-lg h-[230px] md:h-[175px] lg:h-[200px] text-gray-700 font-semibold mt-4'>{review.txt}</p>
              <img src={review.imgSrc} alt="" className='w-[60px] mt-7' />
              <p className='font-semibold text-gray-700 mt-5'>{review.user}</p>
              <p className='text-sm italic text-gray-600'>{review.time}</p>
            </div>
          </div>
        )))}
      </Slider>

      <Cta />
    </div>
  )
}

export default Testimonials