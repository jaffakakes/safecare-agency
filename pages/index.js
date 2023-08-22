import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from './Navbar';
import Hero from './Component/Hero';
import Services from './Component/Services';
import styles from '@/utils/style';
import Footer from './Component/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="bg-accentDark w-full overflow-hidden font-inter">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      
      <div className={`bg-accentDark ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Services/>
        </div>
      </div>
      
      <div className={`bg-accentDark ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer/>
        </div>
      </div>
    </div>
  );
}
