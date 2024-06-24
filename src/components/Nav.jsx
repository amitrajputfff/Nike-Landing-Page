import React, { useState, useEffect } from 'react';
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when resizing to larger devices
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className='padding-x py-8 absolute z-20 w-full '>
      <nav className='flex justify-between items-center max-container '>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray hover:text-black transition-all duration-300 hover:font-medium'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/' className='btn-primary'>Sign in</a>
          <a href='/' className='btn-secondary'>Explore now</a>
        </div>
        <div className='relative flex items-center gap-4 max-lg:block'>
          
          <img
            src={hamburger}
            alt='hamburger icon'
            width={25}
            height={25}
            onClick={toggleMenu}
            className='cursor-pointer lg:hidden'
          />
          {isMenuOpen && (
            <div 
              className='absolute top-8 right-0 w-64 bg-white z-30 flex flex-col items-start gap-4 py-4 px-4 shadow-lg rounded-2xl transition-transform transform duration-300 ease-in-out'
              onMouseLeave={toggleMenu}
            >
              <ul className='flex flex-col items-center gap-4 w-full'>
                {navLinks.map((item) => (
                  <li key={item.label} className='w-full'>
                    <a
                      href={item.href}
                      className='font-montserrat leading-normal text-lg text-slate-gray hover:text-white hover:bg-coral-red transition-all duration-300 hover:font-medium block px-4 py-2 w-full rounded-xl'
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
