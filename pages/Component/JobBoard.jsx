import React from 'react';

const JobsBoard = () => {
    return (
        <div className="max-w-5xl mx-auto mt-12 bg-white min-h-screen p-8 font-roboto">
            
            {/* HealthCare Assistant Job */}
            <div className="mb-10 border-b pb-6">
                <h2 className="text-3xl font-bold mb-4 text-contrastColor">HealthCare Assistant Job:</h2>
                <p className="mb-6 leading-relaxed">he role of a healthcare assistant is crucial to the kind of care we aim to
deliver at Safetouch Care. Your duties and responsibilities include assisting
people with personal care, such as washing and dressing, or social needs
such as taking part in activities and attending appointments. The job
description of a healthcare assistant can vary from day to day, what’s more

important to us is your professional and passionate approach to care. If you
generally have a friendly, caring, and positive then there will be plenty of care
agency jobs for you to choose from at Safetouch Care, and the HCA job will be
suitable for you
If Interested in a HCA role please use the Link below to Upload your Latest CV</p>
                <button 
                    className="py-2 px-4 bg-accentLight text-white rounded hover:bg-blue-700 transition-transform transform hover:scale-105"
                    onClick={() => window.open("URL_TO_CV_UPLOAD_FORM", "_blank")}
                >
                    Upload CV
                </button>
            </div>

            {/* Support Worker Job */}
            <div className="mb-10 border-b pb-6">
                <h2 className="text-3xl font-bold mb-4 text-contrastColor">Support Worker Job:</h2>
                <p className="mb-6 leading-relaxed">Support work involves assisting people with learning disabilities, complex
care needs, and mental health problems. You will work in a variety of Mental
Healthcare and Learning Disability settings within England and will provide
support and assistance to those you care for and the healthcare professionals
you work with. This is a rewarding career that gives you a great opportunity to
work alongside other Healthcare Professionals within the health care sector.</p>
                <button 
                    className="py-2 px-4 bg-accentLight text-white rounded hover:bg-blue-700 transition-transform transform hover:scale-105"
                    onClick={() => window.open("URL_TO_CV_UPLOAD_FORM", "_blank")}
                >
                    Upload CV
                </button>
            </div>

            {/* Why Register */}
            <div className="mb-10">
                <h2 className="text-3xl font-bold mb-4 text-contrastColor">Why Register with Safetouch Care:</h2>
                <ul className="list-disc pl-5 leading-relaxed">
                <li className="mb-2">A choice of Longdays, Early &amp; Late Shifts to suit your family &amp; Childcare
needs</li>
                    <li className="mb-2">Competitive rates of Pay</li>
                    <li className="mb-2">Free Transport to Work on all Clients outside Stoke-on-Trent</li>
                    <li className="mb-2">Temporary &amp; Temp-Permanent roles</li>
                    <li className="mb-2">Great working environment with our reputable Clients</li>
                    <li className="mb-2">Quality Uniform provided free of charge</li>
                    <li className="mb-2">Full &amp; friendly support from our professional Office Staff</li>
                    <li className="mb-2">Various roles available as Healthcare Assistants, Support Workers &amp;
Registered Nurses</li>
                </ul>
            </div>

        </div>
    );
};

export default JobsBoard;
