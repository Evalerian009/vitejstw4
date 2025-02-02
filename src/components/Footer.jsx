import { styles } from "../constants/styles"

const Footer = () => {
  return (
    <div className={`${styles.padX} ${styles.padY} bg-blue text-white`}>
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-y-7">
            <div>
                <div className="flex items-center gap-x-3">
                    <a href='/'>Logo</a>
                    <div className="relative">
                        <img src="./cloudflare.png" alt="" className="w-[55px]" />
                        <p className="text-[0.4rem] -right-[105%] absolute w-full uppercase font-semibold top-[50%] -translate-y-[50%]">Protected by cloudflare.</p>
                    </div>
                </div>

                <ul className="flex gap-4 font-semibold mt-5">
                    <li className="hover:text-indigo-200 duration-200"><a href='#'>Pricing</a></li>
                    <li className="hover:text-indigo-200 duration-200"><a href='#'>Testimonials</a></li>
                </ul>
            </div>

            <div>
                <form action="" className="flex">
                    <label className="border block bg-white w-[200px] lg:w-[240px] py-1.5 rounded-l-lg h-fit">
                        <input type="text" className="bg-transparent placeholder:text-gray-400 indent-2 w-full outline-0" placeholder="Enter your email" />
                    </label>
                    <button className="border h-fit py-1.5 px-3 rounded-r-lg font-semibold hover:bg-indigo-500 cursor-pointer duration-200">Subscribe</button>
                </form>
                <p className="mt-2 ml-1 text-xs">We care about your data in our privacy policy.</p>
            </div>
        </div>

        <p className="text-indigo-200 text-xs mt-12">© 2025 CryptoAssetRecovery.com, LLC. All rights reserved.</p>
    </div>
  )
}

export default Footer