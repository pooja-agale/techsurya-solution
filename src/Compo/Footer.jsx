import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-12 font-kodchasan">
      <div className="flex flex-col lg:flex-row justify-between mb-12 gap-10">
        {/* Left: Logo + Address */}
        <div className="space-y-6">
          <img
            src="/tech_surya_logo-removebg-preview 3.png"
            alt="Tech Surya Logo"
            className="h-[50px]"
          />
          <div>
            <p className="font-medium mb-1">Address</p>
            <p className="text-sm leading-relaxed">
              office no 127,222 Golden city center<br />
              ,Beside prozon mall ,Chhatrapati<br />
              Sambhajinagar,431001
            </p>
          </div>
        </div>

        {/* Right: Contact Info + Socials */}
        <div className="space-y-6 text-left lg:text-right w-full lg:w-auto">
          <div>
            <p className="font-medium mb-1">Email</p>
            <a
              href="mailto:techsuryaitsolution@gmail.com"
              className="text-sm hover:underline break-words"
            >
              techsuryaitsolution@gmail.com
            </a>
          </div>
          <div>
            <p className="font-medium mb-1">Contact</p>
            <a href="tel:9621345050" className="text-sm hover:underline">
              9621345050
            </a>
          </div>
          <div className="flex justify-start lg:justify-end gap-4 pt-2">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-white text-xl cursor-pointer hover:text-blue-500" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white text-xl cursor-pointer hover:text-pink-500" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white text-xl cursor-pointer hover:text-sky-400" />
            </a>
            <a
              href="https://wa.me/919621345050"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-white text-xl cursor-pointer hover:text-green-400" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-white text-xl cursor-pointer hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-gray-600 mb-6" />

      {/* Bottom Footer */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm gap-4 text-left md:text-left">
        <p>@2025 All rights reserved</p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
          <a href="#" className="hover:underline underline-offset-4">
            About Us
          </a>
          <a href="#" className="hover:underline underline-offset-4">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline underline-offset-4">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
