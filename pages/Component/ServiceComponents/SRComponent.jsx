import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SRComponent({ imageSrc, headerText, text, buttonColor, buttonText }) {
  return (
    <section className="flex md:flex-row-reverse flex-col-reverse md:py-20 py-10">

 <div className="flex-1 flex items-center justify-center md:my-0 my-10 md:px-20 px-10">
        <Image src={imageSrc} alt={headerText} width={300} height={300} className="md:w-2/3 w-3/4" />
      </div>
            <div className="flex-1 flex flex-col items-start justify-center md:px-0 px-6">
        <div className="flex flex-col items-center md:items-start py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 md:space-y-4 space-y-2 md:px-20 px-10">
          <h2 className="md:text-6xl text-4xl font-bold text-white mb-2">{headerText}</h2>
          <p className="md:text-2xl text-xl text-white">{text}</p>
          <button style={{ backgroundColor: buttonColor }} className="md:text-2xl text-xl text-black font-semibold px-4 py-2 mt-4">
          <Link href="/Contactus">
          {buttonText}
        </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
