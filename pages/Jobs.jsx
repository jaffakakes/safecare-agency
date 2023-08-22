import Navbar from "./Navbar";
import Header from './Component/Header';
import { useRouter } from "next/router";
import JobsBoard from "./Component/JobBoard";
import Footer from "./Component/Footer";
import styles from "@/utils/style";

const headersDictionary = {
    '/Jobs': 'JOB OPPORTUNITIES',
   
  }; 
export default function Jobs(){
    const router = useRouter();
    const currentPage = router.pathname; // get the current page
    const headerText = headersDictionary[currentPage]; // look up the text in your dictionary
    return(
        <>
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
        <JobsBoard/>
        </div>
      </div>
        <Footer/>
        </div>
        </>
    );

}