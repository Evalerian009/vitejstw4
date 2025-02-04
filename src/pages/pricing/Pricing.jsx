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
          lgheader={'Wallet Recovery and Scam Investigation Pricing'} 
          smHeader={'Pricing'} 
          txt={'Clear and straightforward pricing. Browse our pricing for wallet recovery services and scam investigations below. Reach out to us today for a free consultation.'} 
        />

        <ul className='mt-16 flex flex-col md:flex-row gap-7'>
          {pricing.map(card => ((
           <PriceCard key={card.id} card={card} />
          )))}
        </ul>

        <h5 className='mt-32 text-center font-semibold text-[1.85rem]'>Understanding our Pricing</h5>
        <div className='flex flex-col gap-5 leading-relaxed mt-5 max-w-[960px] mx-auto'>
          <p>We understand how important your assets are, and we take recovering them very seriously. Our deep expertise in crypto asset recovery enables us to effectively crack wallet passwords and help you retrieve your funds.</p>
          <p>We also recognize that this process involves highly sensitive personal and financial data, which is why we handle every case with the utmost confidentiality and security.</p>
          <p>For password recovery services, we charge a 20% fee on any recovered assets. This fee reflects the valuable expertise and secure approach we bring to each case.</p>
          <p>Best of all, our service is risk-free! You only pay if we successfully recover your assets. If we’re unable to crack your wallet, you won’t owe anything. We stand by our ability to recover your funds, and we’re confident in our results.</p>
        </div>
      </div>

      <Cta />
    </div>
  )
}

export default Pricing