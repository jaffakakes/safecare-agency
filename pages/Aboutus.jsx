import React, { useState } from 'react';
import Navbar from './Navbar';
import { useRouter } from 'next/router';
import Header from './Component/Header';
import LeftComponent from './Component/LeftComponent';
import RightComponent from './Component/RightComponent';
import Footer from './Component/Footer';
import styles from '@/utils/style';

const headersDictionary = {
    '/Aboutus': 'About Safetouch Care',
};

export default function Aboutus() {
    const router = useRouter();
    const currentPage = router.pathname; // get the current page
    const headerText = headersDictionary[currentPage]; // look up the text in your dictionary

    return (
        <div className="bg-accentDark w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar/>
                </div>
            </div>

            <div className={`bg-main ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Header headerText={headerText}/>
                </div>
            </div>

            <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <LeftComponent imageSrc={"https://firebasestorage.googleapis.com/v0/b/safetouchcare-df016.appspot.com/o/introduction.jpg?alt=media&token=fd9fd025-9687-473e-ac96-144dd70ceb21"} headerText={"Introduction"} text={`Safetouch Care Agency, nestled in the heart of Staffordshire, is a distinguished Care Recruitment Agency devoted to delivering unparalleled healthcare services across England. With over a decade of rich experience under our belt, we are spearheaded by dedicated professionals who bring expertise in safeguarding adults, mentorship, nursing, training, and finance. Our unwavering commitment lies in the heart of every service we offer, ensuring we touch lives with safety, care, and unwavering dedication.`}/>
                    </div>
            </div>
            <div className={`bg-accentDark ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                <RightComponent imageSrc={"https://firebasestorage.googleapis.com/v0/b/safetouchcare-df016.appspot.com/o/Team.jpg?alt=media&token=0041a44b-66f2-4048-9cd2-efa6558feca7"} headerText={"Team Experience"} text={ `At Safetouch Care Agency, our team stands as a testament to our legacy of excellence. With an aggregate experience spanning over 10 years in the healthcare sector, we harness the collective wisdom, insights, and best practices acquired over the years. Our seasoned professionals have navigated the intricacies of healthcare, constantly evolving and adapting to the changing needs. This decade-long journey has equipped us with invaluable knowledge and expertise, setting us apart as leaders in care recruitment and service delivery.`}/>
    
                </div>
            </div>
            <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <LeftComponent imageSrc={"https://firebasestorage.googleapis.com/v0/b/safetouchcare-df016.appspot.com/o/hearthands.jpg?alt=media&token=ed0eb56d-15c9-476a-933e-2fc2f63caae8"} headerText={"Areas of Specialisation:"} text={ `Safetouch Care Agency proudly embodies a diverse array of specializations, underscoring our commitment to comprehensive care. Our expertise in Safeguarding Adults ensures that the most vulnerable among us receive the utmost protection and advocacy. Through our Mentorship program, we foster a culture of continuous growth, nurturing the next generation of healthcare professionals. Our focus on Training stands as an emblem of our dedication to excellence, constantly equipping our team with the latest knowledge and best practices. With a solid foundation in Nursing, we bridge the gap between compassion and clinical precision, offering unmatched care services. Furthermore, our proficiency in Accounting & Finance guarantees the seamless operation of our agency, ensuring that both our clients and staff are catered to with transparency and efficiency.`}/>
                    </div>
            </div>

            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}
