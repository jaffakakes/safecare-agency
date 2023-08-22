import React from 'react';
import styles from "@/utils/style";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col bg-accentDark p-10`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start space-y-6">
        <h2 className="text-white text-[24px] font-extrabold mb-4">Contact Details:</h2>
        
        <div className="space-y-2">
          <p className={`font-outfits font-medium text-white text-[20px]`}>
            Company Email address: 
          </p>
          <span className="font-light text-white text-[18px]">info@safetouch-care.co.uk</span>
        </div>
        
        <div className="space-y-2">
          <p className={`font-outfits font-medium text-white text-[20px]`}>
            Email Address:
          </p>
          <span className="font-light text-white text-[18px]">admin@safetouch-care.co.uk</span>
        </div>

        <div className="space-y-2">
          <p className={`font-outfits font-medium text-white text-[20px]`}>
            Contact No:
          </p>
          <span className="font-light text-white text-[18px]">07853319957</span>
        </div>
        
        <div className="space-y-2">
          <p className={`font-outfits font-medium text-white text-[20px]`}>
            Address:
          </p>
          <span className="font-light text-white text-[18px]">
            Safetouch Care Agency, Trent House, <br/>234 Victoria Road,<br/> Stoke-on-Trent, Staffordshire, ST4 2LW
          </span>
        </div>

        <div className="space-y-2">
          <p className={`font-outfits font-medium text-white text-[20px]`}>
            Business Hours:
          </p>
          <span className="font-light text-white text-[18px]">Monday – Sunday (Open 24 hours)</span>
        </div>
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-10 border-t-[2px] border-t-white mt-10">
      <p className="font-outfits font-normal text-center text-[20px] leading-[27px] text-white pb-5">
        &copy; {new Date().getFullYear()} Safetouch Care Agency. All rights reserved.
      </p>
    </div>
  </section>
);

export default Footer;


