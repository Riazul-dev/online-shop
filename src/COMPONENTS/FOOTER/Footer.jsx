import React from "react";
import { Link } from "react-router-dom";
import CardFooter from "./Card_Footer";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaGoogle,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <div className="">
        <CardFooter />
      </div>
      <div className="border py-14 text-center md:text-start px-8 lg:px-20">
        <p className="text-xl lg:text-3xl font-medium cursor-pointer hover:text-blue-600 duration-300">
          SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.
        </p>
      </div>

      {/* Footer Description */}
      <div className=" flex flex-col md:flex-row lg:justify-between gap-10 md:gap-4 py-10 md:px-6 lg:px-20">
        <div className="flex flex-col gap-10 md:w-1/4 lg:w-auto justify-center md:justify-normal items-center md:items-start">
          <Link
            className="text-4xl font-serif hover:text-blue-300 duration-200 text-nowrap"
            to="/"
          >
            E-SHOP
          </Link>
          <h3 className="text-xl lg:text-2xl">The best look anytime, anywhere.</h3>
        </div>


        <div className="flex flex-col md:flex-row md:gap-10 lg:gap-40 gap-6">
        <div className="flex flex-col gap-4">
            <h3 className="text-2xl text-center md:text-start">For Her</h3>
            <div className="flex flex-col items-center md:items-start gap-4 text-slate-400">
              <Link className="hover:text-blue-600 duration-300 text-nowrap">
                Women Jeans
              </Link>
              <Link className="hover:text-blue-600 duration-300 text-nowrap">
                Tops and Shirts
              </Link>
              <Link className="hover:text-blue-600 duration-300 text-nowrap">
                Women Jackets
              </Link>
              <Link className="hover:text-blue-600 duration-300 text-nowrap">
                Heels and Flats
              </Link>
              <Link className="hover:text-blue-600 duration-300 text-nowrap">
                Women Accessories
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl text-center md:text-start">For Him</h3>
            <div className="flex flex-col items-center md:items-start gap-4 text-slate-400">
              <Link className="hover:text-blue-600 duration-300 text-nowrap">
                Men Jeans
              </Link>
              <Link className="hover:text-blue-600 duration-300 text-nowrap">
                Men Shirts
              </Link>
              <Link className="hover:text-blue-600 duration-300 text-nowrap">
                Men Shoes
              </Link>
              <Link className="hover:text-blue-600 duration-300 text-nowrap">
                Men Accessories
              </Link>
              <Link className="hover:text-blue-600 duration-300 text-nowrap">
                Men Jackets
              </Link>
            </div>
          </div>
        </div>


          <div>
            <h3 className="text-2xl text-center">Subscribe</h3>
          </div>

      
      </div>

      {/* Footer bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-1 py-10 md:px-10 lg:px-20 lg:pb-20 border">
        <div>
          <p className="text-slate-800 text-md">
            Copyright © {new Date().getFullYear()} | All rights reserved E-SHOP.
          </p>
        </div>
        <div className="flex justify-center items-center text-xl gap-4">
          <Link
            to="https://www.facebook.com/"
            target="_blank"
            className="cursor-pointer hover:text-blue-600 duration-300 px-2 py-1"
          >
            <FaFacebookF />
          </Link>
          <Link
            to="https://www.youtube.com/"
            target="_blank"
            className="cursor-pointer hover:text-blue-600 duration-300 px-2 py-1"
          >
            <FaYoutube />
          </Link>
          <Link
            to="https://www.twitter.com/"
            target="_blank"
            className="cursor-pointer hover:text-blue-600 duration-300 px-2 py-1"
          >
            <FaTwitter />
          </Link>
          <Link
            to="https://www.instagram.com/"
            target="_blank"
            className="cursor-pointer hover:text-blue-600 duration-300 px-2 py-1"
          >
            <FaInstagram />
          </Link>
          <Link
            to="https://www.google.com/"
            target="_blank"
            className="cursor-pointer hover:text-blue-600 duration-300 px-2 py-1"
          >
            <FaGoogle />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
