"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { MeunData } from "./menuData";
import image1 from '../../public/images/logo.png'




const Header = () => {
  
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };
  const {menuData} = MeunData()





  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };


  return (
    <>
      <header
        className={`header top-0 ltr:left-0  rtl:right-0 z-40 flex w-full items-center bg-transparent ${
          sticky
            ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
            : "absolute"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className={`w-60 max-w-full px-4  ltr:xl:mr-12 rtl:xl:ml-12 `}>
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                <Image
                  src={image1}
                  alt="logo"
                  width={150}
                  height={30}
                  className={`w-full ltr:lg:mr-24  rtl:lg:ml-48   dark:hidden`}
                />
                <Image
                  src={image1}
                  alt="logo"
                  width={150}
                  height={30}
                  className={`hidden ltr:lg:mr-24  rtl:lg:ml-48   w-full dark:block`}
                />
              </Link>
            </div>
            
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className={`absolute  ltr:right-4 rtl:left-4   top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px]
                   ring-primary focus:ring-2 lg:hidden`}
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>

                <nav
                  id="navbarCollapse"
                  className={`navbar absolute ltr:right-0  rtl:left-0   z-30 w-[250px]
                   rounded border-[.5px] border-body-color/50 bg-white py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex  lg:gap-x-12   ">
                    {menuData.map((menuItem, index) => (
                      <li key={menuItem.id} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base text-dark group-hover:opacity-70
                             dark:text-white ltr:lg:mr-0  rtl:lg:ml-0  lg:inline-flex lg:py-6 lg:px-0`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <a
                              onClick={() => handleSubmenu(index)}
                              className={`flex cursor-pointer items-center justify-between py-2 text-base
                              text-dark group-hover:opacity-70 dark:text-white
                              ltr:lg:mr-0 rtl:lg:ml-0 lg:inline-flex lg:py-6 lg:px-0`}
                            >
                              {menuItem.title}
                            <span className={ ` ltr:pl-3 rtl:pr-3  `}>
                                <svg width="15" height="14" viewBox="0 0 15 14">
                                  <path
                                    d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477
                                     4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308
                                      2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941
                                       3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 
                                       13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </a>

                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>

              </div>

              <div className={`flex items-center justify-end ltr:pr-16 rtl:pl-16 ltr:lg:pr-0 rtl:lg:pl-0 
               `}>


                   <div className="xl:mx-3.5 mx-2.5">
                     <LanguageSwitcher/> 
                  </div>



                {/* <Link
                  href="/signup"
                  className="ease-in-up hidden rounded-md bg-primary py-3 px-8 text-base font-bold
                   text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                >
                  Sign Up
                </Link> */}
                <div>
                  <ThemeToggler />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
