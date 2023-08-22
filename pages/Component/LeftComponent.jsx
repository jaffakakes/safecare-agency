import React from 'react';
import Image from 'next/image';

export default function LeftComponent({ imageSrc, headerText, text }) {
  return (
    <section className="flex md:flex-row flex-col-reverse md:py-20 py-10">
      <div className="flex-1 flex items-center justify-center md:my-0 my-10 md:px-20 px-10">
        <Image src={imageSrc} alt={headerText} width={300} height={300} className="md:w-2/3 w-3/4" />
      </div>
      <div className="flex-1 flex flex-col items-start justify-center md:px-0 px-6">
        <div className="flex flex-col items-center md:items-start py-[6px] px-4 bg-white rounded-[10px] mb-2 md:space-y-4 space-y-2 md:px-20 px-10">
          <h2 className="md:text-6xl text-4xl font-bold text-accentLight mb-2">{headerText}</h2>
          <p className="md:text-2xl text-xl text-gray-600">{text}</p>
        </div>
      </div>
    </section>
  );
}
