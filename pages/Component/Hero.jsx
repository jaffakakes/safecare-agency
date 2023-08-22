import styles from '@/utils/style';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className={`flex md:flex-row flex-col-reverse ${styles.paddingY} bg-accentDark`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[8px] px-6 bg-opacity-90 bg-primary  mb-4">
          <div className="space-y-6 md:px-24">
            <h1 className="md:text-6xl text-4xl font-extrabold text-white mb-3">Safetouch Care</h1>
            <h3 className="md:text-4xl text-2xl font-semibold text-lightGrey">Crafting Brighter Futures in Healthcare</h3>
            <p className="md:text-2xl text-xl text-neutralGrey">A Trusted Staffordshire-based Care Recruitment Agency. Providing exceptional healthcare services throughout England.</p>
          </div>
        </div>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative md:px-20`}>
        <Image src="https://firebasestorage.googleapis.com/v0/b/safetouchcare-df016.appspot.com/o/carehomemain.jpg?alt=media&token=8a3bcc32-72ec-46ae-b81e-7750d503aead" alt="Hero" width={300} height={300} className="md:w-2/3 w-3/4" />
      </div>
    </section>
  );
}
