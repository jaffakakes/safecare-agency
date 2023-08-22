import React, { useState } from 'react';
import Navbar from './Navbar';
import { useRouter } from 'next/router';
import Header from './Component/Header';
import SLComponent from './Component/ServiceComponents/SLComponent';
import SRComponent from './Component/ServiceComponents/SRComponent';
import Footer from './Component/Footer';
import styles from '@/utils/style';

const headersDictionary = {
    'health-social-care': [
        'Health And Social Care', 
        `At Safetouch Care Agency, our services transcend mere duty. We offer a comprehensive suite of health and social care solutions tailored to meet the unique needs of each individual. With a robust focus on delivering personalized care, we ensure that every client experiences a touch of warmth, compassion, and unparalleled professionalism.`,
        `We understand that the healthcare sector is dynamic and requires flexibility. Hence, we've instituted a range of shift options to cater to diverse needs. Whether it's the early dawn hours, bustling afternoons, or the tranquil cloak of night, our staff is always prepared to serve. By offering flexible Early Shifts, Afternoon Shifts, and Day & Night shifts, we ensure that our team can seamlessly integrate their work commitments with their personal schedules, fostering a balanced, fulfilling work environment.`,
        `Quality sits at the heart of Safetouch Care Agency's ethos. We invest heavily in the continual training of our healthcare professionals, ensuring they are equipped with the latest knowledge and best practices in the sector. This dedication to professional growth guarantees that our clients receive care from some of the best-trained hands in the industry. Beyond skills, we prioritize the cultivation of a caring and compassionate attitude, ensuring that the quality of care delivered isn't just impeccable—it's heartfelt.`,
        'https://firebasestorage.googleapis.com/v0/b/safetouchcare-df016.appspot.com/o/careservices.jpg?alt=media&token=178d4f37-0314-48f2-b55e-dabfb031d9c4',
        'https://firebasestorage.googleapis.com/v0/b/safetouchcare-df016.appspot.com/o/Time.jpg?alt=media&token=493ee3b2-802a-47d7-9de2-27bb64507ae2',
        'https://firebasestorage.googleapis.com/v0/b/safetouchcare-df016.appspot.com/o/Training.jpg?alt=media&token=37041957-0fe3-4148-8bc0-6a5022fecf69',
        "Comprehensive Care Services",
        "Flexible Scheduling for Our Team",
        "Training & Quality Assurance"

    ],
    'where-we-assign': [
        'Where we assign', 
        `Our team has the distinct privilege of serving in some of the most esteemed private nursing facilities across England. These settings, often a home away from home for many, require a specialized touch. With our highly-trained staff, we ensure that residents experience top-tier medical care combined with a genuine sense of belonging and companionship.`,
        `Safetouch Care Agency is proud to extend its services to the very pillars of England's healthcare system - the NHS hospitals and GP surgeries. In these critical environments, our professionals work tirelessly alongside dedicated NHS staff, ensuring patients receive prompt, comprehensive, and compassionate care. From emergency rooms to specialized clinics, our presence in these establishments stands as a testament to our commitment to quality and trustworthiness.`,
        `Understanding that healthcare isn't a one-size-fits-all solution, we've ventured into more specialized care settings. From Nursing & Residential Care Homes catering to the elderly and infirm, to Learning Disability Settings addressing the unique needs of individuals with cognitive challenges, our staff brings expertise and empathy. No matter the environment, our mission remains unchanged: deliver unparalleled care that genuinely touches lives.`,
        'https://firebasestorage.googleapis.com/v0/b/safetouchcare-df016.appspot.com/o/room.jpg?alt=media&token=4f43e2f2-64ed-4060-b832-697c6ff584c0',
        'https://firebasestorage.googleapis.com/v0/b/medport-global.appspot.com/o/hr%2Frecuitment_process.jpg?alt=media&token=1c173749-ccd6-462a-ad88-cefc3923985b',
        'https://firebasestorage.googleapis.com/v0/b/safetouchcare-df016.appspot.com/o/careenvironment.jpg?alt=media&token=fbafd361-3a92-4be7-861b-3fc23e084fad',
        'Premier Private Facilities',
        'NHS Hospitals & GP Surgeries',
        'Specialised Care Environments'
    ],
    
    'nursing-agency': [
        'Nursing & Residential Care Agency',
        `Safetouch Care Agency's expansive reach ensures that we provide impeccable care in a diverse array of environments. From traditional residential care homes, where seniors find comfort and community, to nursing homes that address more intricate health needs, our team is adept and ever-ready. Furthermore, our presence in specialized settings, such as those dedicated to individuals with learning disabilities, showcases our commitment to holistic care. No matter the setting, our professionals are equipped to deliver.`,
        `While the environment varies, our approach to care remains steadfastly consistent. At the very heart of our service lies a blend of compassionate understanding and clinical expertise. We believe in treating every individual with respect, dignity, and empathy, fostering an environment of trust. Simultaneously, our rigorous training ensures that our staff possesses the latest clinical knowledge, making them competent care providers in every setting.`,
        `At Safetouch Care Agency, mediocrity is never an option. We continually strive for excellence, setting the gold standard in the nursing and residential care sector. Our rigorous recruitment process, coupled with our extensive training programs, ensures that every member of our team stands as a beacon of professionalism. Whether it's a one-off shift or long-term care, our clients can rest assured knowing they are receiving the pinnacle of care services.`,
        'https://firebasestorage.googleapis.com/v0/b/safetouchcare-df016.appspot.com/o/nursingHome.jpg?alt=media&token=75ef8e83-fe72-41a9-b435-a4e1ffee0441',
        'https://firebasestorage.googleapis.com/v0/b/safetouchcare-df016.appspot.com/o/ethos.jpg?alt=media&token=b7a6e7e1-2109-477d-aa07-c5e80c04b557',
        'https://firebasestorage.googleapis.com/v0/b/safetouchcare-df016.appspot.com/o/standard.jpg?alt=media&token=418bf7fc-ed54-497c-ac40-c1da90adf4e3',
        'Broad Spectrum of Settings:',
        'Our Care Ethos',
        'Setting the Gold Standard'
    ],


}; 

export default function ServicePage() {
    const router = useRouter();
    const { service } = router.query; // get the current page
    const headerText = headersDictionary[service]; // look up the text in your dictionary

    // Check if the headerText array exists before trying to render the components
    if (!headerText) {
        const { service } = router.query; // get the current page
        const headerText = headersDictionary[service]; // look up the text in your dictionary
        return headerText
    }


    return (
<>
<div className="bg-accentDark w-full overflow-hidden">
<div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-accentDark ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Header headerText={headerText[0]}/>
        </div>
      </div>
      <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
<SLComponent buttonColor={'#0A74DA'} buttonText={'Contact us'} imageSrc={headerText[4]} headerText={headerText[7]} text={ headerText[1]}/>
</div>
      </div>
      <div className={`bg-accentDark ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
<SRComponent  buttonColor={'#FFFFFF'} buttonText={'Contact us'} imageSrc={headerText[5]} headerText={headerText[8]} text={ headerText[2]}/>
</div>
      </div>
      <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
<SLComponent  buttonColor={'#0A74DA'} buttonText={'Contact us'}  imageSrc={headerText[6]} headerText={headerText[9]} text={ headerText[3]}/>
</div>
      </div>
<Footer/>
</div>
</>
    );

}