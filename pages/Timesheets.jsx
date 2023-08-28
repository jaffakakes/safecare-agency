import React, { useRef } from 'react';
import Navbar from './Navbar';
import { storage } from '@/utils/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const Timesheets = () => {
    const fileInputRef = useRef(null);
    const nameInputRef = useRef(null);
    const downloadUrl = "https://firebasestorage.googleapis.com/v0/b/safetouchcare-df016.appspot.com/o/Timesheet.docx?alt=media&token=3b1d6c45-d5ee-40b5-8d76-b2fe321a0309";

    async function handleUpload() {
      const file = fileInputRef.current?.files[0];
      const name = nameInputRef.current?.value;
  
      if (!file || !name) {
          alert('Please ensure you attached your timesheet and entered your name.');
          return;
      }
  
      const storageRef = ref(storage, `timesheets/${file.name}`);
  
      uploadBytes(storageRef, file).then(async (snapshot) => {
          console.log('Uploaded a blob or file!');
  
          // Get the download URL
          const downloadURL = await getDownloadURL(storageRef);
          console.log('File available at', downloadURL);
  
          // Now, send the download URL in an email
          try {
              const emailResponse = await fetch('/api/SendEmail', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ name, fileUrl: downloadURL })
              });
  
              if (emailResponse.ok) {
                  const emailResult = await emailResponse.json();
                  if (!emailResult.error) {
                      alert('Email sent successfully!');
                  } else {
                      console.error('Error sending email:', emailResult.data);
                      alert('Error sending email. Please try again later.');
                  }
              } else {
                  console.error('Error sending email:', await emailResponse.text());
                  alert('Error sending email. Please try again later.');
              }
          } catch (error) {
              console.error('Error sending email:', error);
              alert('Error sending email. Please try again later.');
          }
  
      }).catch((error) => {
          console.error('Error uploading file:', error);
      });
  }

    return (
        <>
            <Navbar />
            <div className="max-w-5xl mx-auto mt-12 bg-white min-h-screen p-8 font-roboto">
                <h1 className="text-3xl font-bold mb-6 text-contrastColor">Timesheets</h1>
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">Upload your timesheet:</h2>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name:</label>
                        <input ref={nameInputRef} type="text" id="name" placeholder="Enter your name" className="border rounded p-2 w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="timesheet" className="block text-sm font-medium mb-2">Select your timesheet:</label>
                        <input ref={fileInputRef} type="file" id="timesheet" className="border rounded p-2 w-full" />
                    </div>
                    <button className="py-2 px-4 bg-accentLight text-white rounded hover:bg-blue-700 transition-transform transform hover:scale-105" onClick={handleUpload}>
                        Upload Timesheet
                    </button>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Download the latest timesheet template:</h2>
                    <a href={downloadUrl} download="TimesheetTemplate.docx" className="py-2 px-4 bg-accentLight text-white rounded hover:bg-blue-700 transition-transform transform hover:scale-105">
                        Download Timesheet Template
                    </a>
                </section>
            </div>
        </>
    );
};

export default Timesheets;
