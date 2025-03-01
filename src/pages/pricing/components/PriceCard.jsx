import Button from '../../../components/Button'
import { GoXCircle } from 'react-icons/go'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import PropTypes from 'prop-types'

const PriceCard = ({card}) => {
  return (
    <li key={card.id} className='p-6 border rounded-xl border-gray-300 shadow-md lg:w-1/2 h-fit'>
    <p className='flex gap-1.5 items-baseline '>
      <span className={`${card.valuePrefix.style == 'lg' ? 'font-semibold text-[3.25rem]' : 'font-semibold'} `}>{card.valuePrefix.value}</span>
      <span className={`${card.valuePrefix.style == 'sm' ? 'font-semibold text-[3.25rem]' : 'font-semibold'} `}>{card.valueSuffix.value}</span>
    </p>
    <h5 className='text-xl mt-5 font-semibold'>Password recovery</h5>
    <p className='text-gray-500'>{card.txt}</p>

    <hr className='mt-7 text-gray-300' />

    <h6 className='font-semibold uppercase mt-12'>Features</h6>
    <ul className='mt-5 flex flex-col gap-3 lg:h-[200px] flex-wrap'>
      {card.features.map((feature, idx) => ((  
        <li key={feature} className='flex gap-1'>
          {card.id == '02' && idx == 8 ?  <GoXCircle className='text-[1.5rem] text-red-500' /> : <IoMdCheckmarkCircleOutline className='text-[1.5rem] text-green-500' />}
          <span className='ml-2'>{feature}</span>
        </li>
      )))}
    </ul>

    <hr className='mt-14 text-gray-300' />

    <Button color={'blue'} title={`I'm interested`} custStyles={'block mt-5 text-center'}  />
  </li>
  )
}
PriceCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    txt: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}

export default PriceCard