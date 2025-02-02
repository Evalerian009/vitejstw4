import Title from "../../../components/Title"
import { styles } from "../../../constants/styles"
import { BsArrowRight } from "react-icons/bs"
import { supportData } from "../../../constants/constants"

const Support = () => {
  return (
    <div className={`${styles.padX} ${styles.padY}`}>
        <Title lgheader="When we can help" smHeader={'Support'} txt={'While not every lost wallet is recoverable, many of the most common issues are recoverable.'} />

        <ul className="mt-14 lg:mt-14 grid grid-cols-1 md:grid-cols-2">
            {supportData.map((card,idx)=>{
                const CardIcon = card.icon
                return(
                    <li key={card.id} className="text-center h-[375px] lg:h-[325px] flex flex-col p-8">
                        <span className="text-blue text-[1.5rem] bg-indigo-100 w-[70px] h-[70px] rounded-full grid place-content-center relative mx-auto">
                            <span className="absolute w-[50px] h-[50px] bg-indigo-300 rounded-full top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]" />
                            <CardIcon className="relative" />
                        </span>
                        <h4 className="text-[1.45rem] text-gray-700 mt-4 font-semibold">{card.textlg}</h4>
                        <p className="mt-1 leading-relaxed text-gray-700">{card.textSm}</p>
                        <button className="text-indigo-500 flex gap-1.5 mx-auto items-center font-semibold mt-4 text-[1.05rem]">
                            {card.linkTxt}
                            <BsArrowRight />
                        </button>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Support