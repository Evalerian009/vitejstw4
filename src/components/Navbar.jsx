import { useState } from "react";
import { navLinks } from "../constants/constants"
import { styles } from "../constants/styles"
import { RxHamburgerMenu } from "react-icons/rx";
import { GoX } from "react-icons/go";
import Button from "./Button";

const Navbar = () => {
    const [isactive, setIsactive] = useState(false);
  return (
    <nav className='relative z-[20]'>
        <div className={`bg-blue relative z-[12] text-white ${styles.padX} flex justify-end items-center gap-3 py-3 text-[0.85rem]`}>
            <p>info@company.mail</p>
            <span className="w-[1px] h-5 bg-white" />
            <p>Call Us Now: +1 44-424-442</p>
        </div>

        <div className={`relative z-[11] bg-white flex justify-between items-center py-5 ${styles.padX} border-b border-gray-200`}>
            <a href="/">Logo</a>

            {/* desktop nav */}
            <div className="hidden lg:flex gap-12 items-center">
                <ul className="flex font-semibold">
                    {navLinks.map((link) => ((
                        <li key={link.id}>
                            <a href={link.url} className="block px-5">{link.name}</a>
                        </li>
                    )))}
                </ul>
                
                <Button color='blue' title='Contact Us' />
            </div>

            {/* mobile menu button */}
            <button className="text-[2rem] cursor-pointer lg:hidden" onClick={() => setIsactive(!isactive)}>
                {isactive ? <GoX /> :<RxHamburgerMenu />}
            </button>
            
            {/* mobile menu */}
            <ul className={`${styles.padX} flex flex-col absolute top-[81px] w-full bg-white left-0 z-[9] text-lg font-semibold border-gray-200 ${isactive ? 'h-[400px] py-8 border-b ' : 'h-0'} overflow-hidden lg:hidden duration-300`}>
                {navLinks.map((link) => ((
                    <li key={link.id}>
                        <a href={link.url} className="block py-4">{link.name}</a>
                    </li>
                )))}
                <li className="w-full mt-7">
                    <Button color='blue' title='Contact Us' custStyles={'block'} />
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar