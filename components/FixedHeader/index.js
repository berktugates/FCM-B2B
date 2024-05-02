import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "../MobileMenu";
import SearchPanel from "../SearchPanel";
import { FaSearch } from "react-icons/fa";

const FixedHeader = ({ header }) => {
  const [hoveredMainMenu, setHoveredMainMenu] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearchPanel = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 210) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-lg h-[165px] lg:h-[78px]   ${
        isVisible ? " transition-all  opacity-100 transform translate-y-0 duration-1000" : "transition-all  opacity-0 transform -translate-y-full duration-1000"
      }`}
    >
      <div className="container mx-auto px-[80px] h-[78px] hidden lg:flex items-center justify-between">
          <div className="flex items-center">
            <div>
              <Image
                src={header.mainMenuLogo[0].logosrc}
                width={45}
                height={50}
                alt="Çalışkan Arı Mağaza"
              />
            </div>
          </div>
          <div className="flex flex-row hidden lg:flex " id="mainmenuitem">
            <ul className="flex flex-row items-center text-center justify-center text-CustomGray hidden lg:flex ml-[8px] md:ml-[36px]">
              {header.mainMenuItems.map((mainMenuItem) => (
                <li
                  key={mainMenuItem.id}
                  className="relative mr-[25px] leading-[1.3] w-[117px] mx-2"
                >
                  <Link
                    className="flex flex-col items-center justify-center"
                    href={mainMenuItem.href}
                   
                  >
                    <span className="w-[53px] h-[53px] flex items-center justify-center
                    text-CustomGray/75 hover:text-LightBlue hover:animate-bounce transition duration-300 ease-in-out transform cursor-pointer"
                     onMouseEnter={() => setHoveredMainMenu(mainMenuItem.id)}
                     onMouseLeave={() => setHoveredMainMenu(null)}>
                      {mainMenuItem.icon}
                    </span>
                  </Link>
                  {mainMenuItem.subMenus &&
                    mainMenuItem.subMenus.length > 0 && (
                      <div
                        className={`absolute top-14 -left-4 z-20 w-[215px] bg-LightBlue shadow-[0_5px_20px_rgba(0,0,0,0.3)] py-[15px] rounded-md text-white   ${
                          hoveredMainMenu === mainMenuItem.id
                            ? "transition-all opacity-100  duration-1000 ease-in-out transform translate-y-0"
                            : " transition-all opacity-0  duration-1000  translate-y-full ease-in-out transform"
                        }`}
                      >
                        <ul>
                          {mainMenuItem.subMenus.map((subMenu) => (
                            <li
                              key={subMenu.id}
                              className="mx-[20px] py-[11px] text-[15px] font-bold leading-[14px] cursor-pointer hover:text-HoverGray transition duration-300 ease-in-out transform text-left"
                            >
                              <Link href={subMenu.href}>{subMenu.text}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex items-center ">
            {header.mainMenuButtons.map((button) => (
              <div
                key={button.id}
                className="flex flex-row items-center justify-center"
              >
                <button onClick={toggleSearchPanel}>
                  <FaSearch className="w-[20px] h-[20px] text-CustomGray hover:text-LightBlue hover:scale-110 transition duration-300 ease-in-out transform mr-[36px]" />
                </button>
                <Link href={button.href} className="flex items-center justify-center">
                  <button className="text-CustomGray hover:text-LightBlue hover:scale-105 transition duration-300 ease-in-out transform cursor-pointer">
                    {button.icon}
                  </button>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex lg:hidden">
            <MobileMenu header={header} />
          </div>
      </div>
      
      <div
        id="altmenu"
        className="p-[23px] lg:p-0 bg-white w-screen lg:w-full flex items-center justify-between lg:hidden h-[165px]"
      >
       
          <div className="flex lg:hidden ">
            {/* Hamburger Menü */}
            <MobileMenu header={header} />
          </div>
          <div>
            <Image
              src={header.mainMenuLogo[0].logosrc}
              width={93}
              height={105}
              alt="Çalışkan Arı Mağaza"
            />
          </div>
          
          <div className="flex flex-row items-center text-center justify-center text-CustomGray">
            {header.mainMenuButtons.map((mainMenuButtons) => (
              <div
                key={mainMenuButtons.id}
                className="flex flex-row items-center"
              >
                <button onClick={toggleSearchPanel}>
                  <FaSearch className="w-[20px] h-[20px] hover:text-LightBlue hover:scale-110 transition duration-300 ease-in-out transform mr-[36px]" />
                </button>
                <Link
                  className="flex flex-col items-center justify-center  hover:text-LightBlue hover:scale-110 transition duration-300 ease-in-out transform "
                  href={mainMenuButtons.href}
                >
                  <span>{mainMenuButtons.icon}</span>
                </Link>
              </div>
            ))}
          </div>
      </div>
      {isSearchOpen && <SearchPanel toggleSearchPanel={toggleSearchPanel} />}
    </div>
  );
};

export default FixedHeader;
