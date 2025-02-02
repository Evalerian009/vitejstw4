import { styles } from "../constants/styles"

const brands = ['./bbtc-logo.webp', './currency-logo.png', './forbes-logo.png', './hyperbeast-logo.webp', './motherboard-logo.webp', './the-block-logo.webp']

const TrustBrands = () => {
  return (
    <div className={`bg-gray-100 ${styles.padY}`}>
        <h4 className="text-center text-gray-500 text-[0.85rem]">Trusted by 100+ publications...</h4>
        <ul className={`grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6 mt-14 ${styles.padX} `}>
            {brands.map((item,idx) => ((
                <li key={item} className="grid place-content-center">
                    <img  src={item} alt={item} className={`grayscale-100 max-w-[100px] ${idx === 0 || idx == 2 ? 'max-w-[75px] lg:max-w-[90px]' : 'lg:max-w-[125px]'}  mx-auto object-fit`} />
                </li>
            )))}
        </ul>
    </div>
  )
}

export default TrustBrands