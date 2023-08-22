import React, { useRef } from 'react';
import Navbar from './Navbar';

const Timesheets = () => {
    const fileInputRef = useRef(null);
    const nameInputRef = useRef(null);
    const downloadUrl = "https://firebasestorage.googleapis.com/v0/b/safetouchcare-df016.appspot.com/o/Timesheet.docx?alt=media&token=3b1d6c45-d5ee-40b5-8d76-b2fe321a0309"; // replace with your direct link

    const handleUpload = async () => {
        const file = fileInputRef.current?.files[0];
        const name = nameInputRef.current?.value;
        
        if (!file || !name) {
          alert('Please ensure you attached your timesheet and entered your name.');
          return;
        }
      
        const formData = new FormData();
        formData.append("timesheet", file);
      
        try {
            const response = await fetch("/api/uploadToS3", {
              method: 'POST',
              body: formData,
            });
        
            const uploadData = await response.json();
        
            if (uploadData.error) {
              alert('Error uploading file to storage.');
              return;
            }
        
            // Once the file is uploaded, send an email with the file URL
            const emailResponse = await fetch("/api/timesheet", {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                name,
                timesheetUrl: uploadData.url
              })
            });
        
            const emailData = await emailResponse.json();
        
            if (!emailData.error) {
              alert('Timesheet uploaded and email sent successfully!');
            } else {
              alert('Error sending email');
            }
          } catch (error) {
            console.error("There was an error uploading the timesheet", error);
          }
      };


    return (
        <>
               <Navbar/>
        <div className="max-w-5xl mx-auto mt-12 bg-white min-h-screen p-8 font-roboto">
            <h1 className="text-3xl font-bold mb-6 text-contrastColor">Timesheets</h1>

            {/* Upload section */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Upload your timesheet:</h2>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name:</label>
                    <input 
                        ref={nameInputRef}
                        type="text" 
                        id="name" 
                        placeholder="Enter your name" 
                        className="border rounded p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="timesheet" className="block text-sm font-medium mb-2">Select your timesheet:</label>
                    <input ref={fileInputRef} type="file" id="timesheet" className="border rounded p-2 w-full" />
                </div>
                <button 
                    className="py-2 px-4 bg-accentLight text-white rounded hover:bg-blue-700 transition-transform transform hover:scale-105"
                    onClick={handleUpload}
                >
                    Upload Timesheet
                </button>
            </section>

            {/* Download section */}
            <section>
    <h2 className="text-2xl font-semibold mb-4">Download the latest timesheet template:</h2>
    <a 
        href={downloadUrl} 
        download="TimesheetTemplate.docx" 
        className="py-2 px-4 bg-accentLight text-white rounded hover:bg-blue-700 transition-transform transform hover:scale-105"
    >
        Download Timesheet Template
    </a>
</section>

        </div>
        </>
 
    );
};

export default Timesheets;
