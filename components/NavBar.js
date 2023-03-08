import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 120) {
        setColor("black");
        setTextColor("white");
      } else {
        setColor("transparent");
        setTextColor("white");
      }
    };
    window.addEventListener("scroll", changeBackground);
  }, []);

  const toggleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 className="font-bold text-4xl text-red-600">Trimax fitness</h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <Link href="/#about">
            <li className="p-4">About</li>
          </Link>
          <Link href="/#services">
            <li className="p-4">Services</li>
          </Link>
          <Link href="/#pricing">
            <li className="p-4">Pricing</li>
          </Link>
          <Link href="/#programs">
            <li className="p-4">Programs</li>
          </Link>
          <Link href="/#trainers">
            <li className="p-4">Our Team</li>
          </Link>
          <Link href="/" className="py-4 px-6 bg-red-600 text-white ">
            <li>Join Us</li>
          </Link>
        </ul>

        {/*Mobile button /> */}
        <div className="sm:hidden block z-10">
          {nav ? (
            <AiOutlineClose
              className="text-4xl text-red-600"
              onClick={toggleNav}
            />
          ) : (
            <AiOutlineMenu
              className="text-4xl text-red-600"
              onClick={toggleNav}
            />
          )}
        </div>
        {/*Mobile menu /> */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center  w-full h-screen bg-black/90 text-white duration-300 ease-in-out"
              : "sm:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-black/70 text-white duration-300 ease-in-out"
          }
        >
          <ul onClick={toggleNav} className="text-center">
            <Link href="/#about">
              <li className="p-4 text-4xl border-b border-red-600">About</li>
            </Link>
            <Link href="/#services">
              <li className="p-4 text-4xl border-b border-red-600">Services</li>
            </Link>
            <Link href="/#pricing">
              <li className="p-4 text-4xl border-b border-red-600">Pricing</li>
            </Link>
            <Link href="/#programs">
              <li className="p-4 text-4xl border-b border-red-600">Programs</li>
            </Link>
            <Link href="/#trainers">
              <li className="p-4 text-4xl border-b border-red-600">Our Team</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
