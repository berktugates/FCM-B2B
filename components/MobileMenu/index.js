"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { FaTimes } from "react-icons/fa";

const MobileMenu = ({ header }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedMainMenu, setSelectedMainMenu] = useState(null);
  const [selectedSubMenu, setSelectedSubMenu] = useState(null);

  const toggleMainMenu = (index) => {
    if (selectedMainMenu === index) {
      setSelectedMainMenu(null);
    } else {
      setSelectedMainMenu(index);
    }
    setSelectedSubMenu(null);
  };

  const toggleSubMenu = (index) => {
    if (selectedSubMenu === index) {
      setSelectedSubMenu(null);
    } else {
      setSelectedSubMenu(index);
    }
  };
  

  return (
    <div className="block xl:hidden">
      <button className="w-[50px] h-[50px]" onClick={() => setIsMenuOpen(true)}>
        <GiHamburgerMenu className="text-CustomGray w-[20px] h-[20px]" />
      </button>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          
          <div className="absolute left-0 top-0 h-full w-64 bg-white w-[300px] overflow-y-auto">
          <div className=" mt-2 mr-4 h-[70px] flex justify-end">
            <button onClick={() => setIsMenuOpen(false)}>
            <FaTimes className=" w-[20px] h-[20px] text-[#555555] hover:text-red-600 hover:scale-110 transition duration-300 ease-in-out transform " />
            </button>
          </div>
            <div id="mainmenuitem">
              <ul className="flex flex-col text-CustomGray">
                {header.mainMenuItems.map((mainMenuItem, index) => (
                  <li
                    key={mainMenuItem.id}
                    className="relative mr-[25px] leading-[1.3] mx-2"
                  >
                    <div
                      className="flex flex-row items-center justify-center "
                      onClick={() => toggleMainMenu(index)}
                    >
                      <div className="py-[15px] flex flex-row items-center justify-center">
                      <span className="w-[53px] h-[53px] flex flex-row items-center justify-center">
                        {mainMenuItem.icon}
                      </span>
                      <span className="uppercase text-[13px] font-extrabold tracking-[1px] pl-[15px] hover:text-LightBlue transition duration-300 ease-in-out transform uppercase ">
                        {mainMenuItem.text}
                      </span>
                      </div>
                      {mainMenuItem.subMenus.length > 0 && (
                        <IoIosArrowForward className="w-4 h-4 text-black " />
                      )}
                    </div>
                    {selectedMainMenu === index && (
                      <ul>
                        {mainMenuItem.subMenus.map((subMenu) => (
                          <li key={subMenu.id}>
                            <Link href={subMenu.href}>{subMenu.text}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="my-[30px]">
            <ul>
              {header.menus.map((menu, index) => (
                <li className="flex flex-row items-center py-[15px] px-[30px] text-LightBlue text-[13px] font-extrabold uppercase flex justify-between " key={menu.id}>
                  <Link href={menu.href}>{menu.text}</Link>
                  {menu.subMenus.length > 0 && (
                    <div
                      onClick={() => toggleSubMenu(index)}
                      className="cursor-pointer"
                    >
                      <IoIosArrowForward className="w-4 h-4 text-black fill-LightBlue" />
                    </div>
                  )}
                  {selectedSubMenu === index && (
                    <ul>
                      {menu.subMenus.map((subMenu) => (
                        <li key={subMenu.id}>
                          <Link href={subMenu.href}>{subMenu.text}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
