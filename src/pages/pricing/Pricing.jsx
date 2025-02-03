import {styles} from '../../constants/styles'
import Title from '../../components/Title'
import { pricing } from './constants/constants';
import Cta from '../../components/Cta'
import PriceCard from './components/PriceCard';

const Pricing = () => {
  return (
    <div className={`${styles.padY} text-gray-700`}>
      <div className={`${styles.padX}`}>
        <Title 
          lgheader={'Locked Wallet Recovery and Scam Tracing'} 
          smHeader={'Pricing'} 
          txt={'Simple, transparent pricing. Explore our pricing for wallet recoveries and scam investigations below. Contact us now for a free consultation.'} 
        />

        <ul className='mt-16 flex flex-col md:flex-row gap-7'>
          {pricing.map(card => ((
           <PriceCard key={card.id} card={card} />
          )))}
        </ul>

        <h5 className='mt-32 text-center font-semibold text-[1.85rem]'>Understanding our Pricing</h5>
        <div className='flex flex-col gap-5 leading-relaxed mt-5 max-w-[960px] mx-auto'>
          <p>We understand that entrusting us with your assets is a big deal. That’s why we take our job of recovering your lost assets very seriously. Our expertise and knowledge in the field of crypto asset recovery is what sets us apart, and it’s what allows us to crack wallet passwords so that you can retrieve your assets.</p>
          <p>We also know that the process of crypto asset recovery often involves sensitive personal and financial information, that’s why we handle every case with the highest level of security and confidentiality.</p>
          <p>For password recoveries, we charge a fee of 20% of tokens recovered, which is a reflection of the value we bring to the table through our expertise and secure handling of each case.</p>
          <p>And here’s the best part: our service is risk-free! That means you only pay us if we successfully recover your assets. If we can’t crack the wallet, you don’t pay a dime. We believe in putting our money where our mouth is, and that’s why we are confident in our abilities to recover your assets.</p>
        </div>
      </div>

      <Cta />
    </div>
  )
}

export default Pricing