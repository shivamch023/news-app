import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { assets } from '@/Assets/assets'; // Adjust path as necessary
import About from '../components/about'

const Footer = () => {

  

  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <Link href="/">
        
          <Image src={assets.logo} alt="" className="bg-white rounded" width={120} />
       
      </Link>
      <p className="text-sm text-white">
        All rights reserved. Copyright @shivamchauhan (Bharat World News) - 2024
      </p>
      <div className="flex gap-3">
        <Image src={assets.facebook_icon}  />
        <Image src={assets.linkin} width={50}  />
        <Image src={assets.yt} width={50}  />
      </div>
        <About />
      
    </div>
  );
};

export default Footer;
