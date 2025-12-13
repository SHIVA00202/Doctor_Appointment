import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
        
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        
        {/* ------------ Left Section ------------ */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="Logo" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* ------------ Center Section ------------ */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <a href="/" className="hover:text-primary">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-primary">About us</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-primary">Contact us</a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-primary">Privacy policy</a>
            </li>
          </ul>
        </div>

        {/* ------------ Right Section ------------ */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <a href="tel:+250784652570" className="hover:text-primary">
                +250-784-652-570
              </a>
            </li>
            <li>
              <a
                href="mailto:elyseniyibizi502@gmail.com"
                className="hover:text-primary"
              >
                elyseniyibizi502@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ------------ Copyright ------------ */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright © 2024 ElyséeDev - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
