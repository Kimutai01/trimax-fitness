import React from "react";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";

import { AiFillInstagram } from "react-icons/ai";
import { SiTiktok } from "react-icons/si";
import { IoLocationSharp } from "react-icons/io5";
const Footer = () => {
  return (
    <div className="footer-img bg-cover bg-center bg-no-repeat   h-full">
      <div className="h-full  bg-black/70">
        <section className="flex flex-col md:flex-row justify-center md:items-center text-center  md:justify-around h-full">
          <div>
            <h1 className="text-2xl font-bold text-red-600">Useful Links</h1>
            <ul className="text-white">
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/#about">
                <li>About</li>
              </Link>
              <Link href="/#services">
                <li>Services</li>
              </Link>
              <Link href="/#trainers">
                <li>Our Team</li>
              </Link>
              <Link href="/#programs">
                <li>Programs</li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold text-red-600">Open Hours</h1>
            <ul className="text-white">
              <li>Monday - Friday</li>
              <li>(5:45am - 9:00pm)</li>
              <li>Saturday</li>
              <li>(8:00am - 12:00pm)</li>
              <li>Sunday - Closed</li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-red-600">Contact Us</h1>

            <div className="text-white flex flex-col md:items-start items-center">
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <IoLocationSharp className="mx-2" /> Juja square
                </Link>
              </div>
              <div className="flex items-center">
                <Link
                  href="https://wa.me/1234567890"
                  rel="noreferrer"
                  target="_blank"
                  className="flex items-center"
                >
                  <IoLogoWhatsapp className="mx-2" /> 123-456-7890
                </Link>
              </div>
              <div className="flex items-center">
                <Link
                  href="tel:1234567890"
                  rel="noreferrer"
                  className="flex items-center"
                  target="_blank"
                >
                  <IoCall className="mx-2" /> 123-456-7890
                </Link>
              </div>
              <div className="flex items-center">
                <Link
                  href="tiktok.com"
                  rel="noreferrer"
                  className="flex items-center"
                  target="_blank"
                >
                  <SiTiktok className="mx-2" /> Tiktok
                </Link>
              </div>
              <div className="flex items-center">
                <Link
                  href="instagram.com"
                  rel="noreferrer"
                  className="flex items-center"
                  target="_blank"
                >
                  <AiFillInstagram className="mx-2" /> Instagram
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
