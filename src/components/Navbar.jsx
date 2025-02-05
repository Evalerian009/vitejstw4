import { useState, useCallback } from "react";
import PropTypes from 'prop-types';
import { navLinks } from "../constants/constants";
import { styles } from "../constants/styles";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoX } from "react-icons/go";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = useCallback(() => {
        setIsActive((prev) => !prev);
    }, []);

    return (
        <nav className="sticky top-0 z-50 shadow-md bg-indigo-50">
            {/* Top Info Bar */}
            <div className={`bg-blue text-white ${styles.padX} flex justify-end items-center gap-3 py-3 text-sm relative z-[999]`}>
                <p>info@company.mail</p>
                <span className="w-[1px] h-5 bg-gray-50" />
                <p>Call Us Now: +1 44-424-442</p>
            </div>

            {/* Main Navbar */}
            <div className={`bg-gray-50 flex justify-between items-center py-5 ${styles.padX} border-b border-gray-200`}>
                <Link to="/" className="text-lg font-bold">Logo</Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex gap-12 items-center">
                    <NavLinks setIsActive={setIsActive} /> {/* ✅ Pass setIsActive */}
                    <Button color="blue" title="Contact Us" href="contact" />
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="text-2xl cursor-pointer lg:hidden relative z-[100]" 
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    {isActive ? <GoX /> : <RxHamburgerMenu />}
                </button>
            </div>

            {/* Mobile Navigation Menu (Fixed Animation Conflict) */}
            <ul className={`${styles.padX} flex flex-col absolute top-[69px] w-full bg-gray-50 left-0 z-9 text-lg font-semibold border-gray-200
                transition-transform duration-300 ${isActive ? 'translate-y-[45px]' : '-translate-y-full'} lg:hidden h-[350px]`}>
                
                <NavLinks isMobile setIsActive={setIsActive} />
                <li className="w-full mt-7">
                    <Button color="blue" title="Contact Us" custStyles="block" href="contact" isMobile setIsActive={setIsActive} />
                </li>
            </ul>
        </nav>
    );
};

// Reusable Navigation Links Component
const NavLinks = ({ isMobile, setIsActive }) => (
    <ul className={`flex ${isMobile ? 'flex-col' : ''} font-semibold`}>
        {navLinks.map((link) => (
            <li key={link.id}>
                <Link 
                    to={link.url} 
                    className={`${isMobile ? 'block py-4' : 'px-5'}`} 
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
                        if (isMobile) setIsActive(false); // Close mobile menu if open
                    }}
                >
                    {link.name}
                </Link>
            </li>
        ))}
    </ul>
);

NavLinks.propTypes = {
    isMobile: PropTypes.bool,
    setIsActive: PropTypes.func, // ✅ Optional (can be undefined)
};

export default Navbar;
