import React, { useState } from 'react';
import Header from './Component/Header';
import { useRouter } from 'next/router';
import Navbar from './Navbar';
import Footer from './Component/Footer';
import axios from 'axios';
import styles from '@/utils/style';

const headersDictionary = {
    '/Contactus': 'Contact Us',
    '/services': 'Our Services',
   
  }; 
export default function ContactUs() {
    const router = useRouter();
    const currentPage = router.pathname; // get the current page
    const headerText = headersDictionary[currentPage]; // look up the text in your dictionary
    const [messageSent, setMessageSent] = useState(false);

  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    postcode: "",
    email: "",
    enquiry: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Send a POST request to your API
    axios({
      method: 'post',
      url: '/api/contact',
      data: formData
    })
    .then(response => {
      // handle success
      console.log(response);
      setMessageSent(true); // Set the messageSent state to true
  })
    .catch(error => {
      // handle error
      console.log(error);
    });
  };

  return (
    <>
      <div className="bg-accentDark w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      </div>
    <Header headerText={headerText}/>
    <div className="container mx-auto py-10 ">
    {
    messageSent && 
    <div className="container mx-auto py-4 text-center bg-green-100 border border-green-400 text-green-700 px-4 rounded">
        Message has been sent successfully!
    </div>
}

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="postcode">
           Post Code
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="postcode"
            value={formData.postcode}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="enquiry">
            Your Enquiry
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="enquiry"
            value={formData.enquiry}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </div>
      </form>
      <section className="mb-8">
<h2 className="text-xl font-bold mb-4">HOW TO FIND US</h2>

<div className="mb-4">
    <h3 className="text-lg font-semibold">Location Map</h3>
    <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2400.8207692360465!2d-2.168570823044055!3d53.00560700016347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a69c9c230ee39%3A0x5b7c41d34ac51c10!2sTrent%20House%2C%20234%20Victoria%20Rd%2C%20Stoke-on-Trent%20ST4%202LW!5e0!3m2!1sen!2suk!4v1692666235398!5m2!1sen!2suk"
        width="600" 
        height="450" 
        style={{border: '0'}}
        allowFullScreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
    </iframe>
</div>

        <p className="mb-4">
            <strong>Areas we cover:</strong> Staffordshire & Derbyshire and still expanding our area of coverage
        </p>
        <p className="mb-4">
            <strong>How to find us:</strong> We are located off A50 Motorway and less than 5 minutes’ drive from Stoke-on-Trent City Centre
        </p>
        <p className="mb-4">
            <strong>Driving:</strong> We have secure parking on site for all our Visitors and everything is well sign posted.
        </p>
        <p className="mb-4">
            <strong>Public transport:</strong> Most of the buses from the City Centre pass through our Premises. The closest train station is Stoke-on-Trent Station.
        </p>
    </section>
    </div>
    <Footer/>
    
    </>
  );
}