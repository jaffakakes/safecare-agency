import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '@/utils/firebase'; 

const EventsBoard = () => {
    const [events, setEvents] = useState([]);
  
    useEffect(() => {
      const fetchEvents = async () => {
        const snapshot = await getDocs(collection(db, "Events"));
        const eventsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setEvents(eventsData);
      };
  
      fetchEvents();
    }, []);
  
    return (
      
        <div className="max-w-5xl mx-auto mt-12 bg-white min-h-screen">
          {events.reverse().map((events) => (
            <div key={events.id} className="mb-10  p-8 rounded">
              <h2 className="text-3xl font-bold mb-2 text-main">{events.EventTitle}</h2>
              <h3 className="text-xl font-semibold mb-2">{events.Date}</h3>
              <p className="mb-6">{events.Description}</p>
              {events.Link ? (
          <button 
            className="py-2 px-4 bg-main text-white rounded hover:bg-blue-600 transition"
            onClick={() => window.open(events.Link, "_blank")}
          >
            Register
          </button>
        ) : (
          <button 
            className="py-2 px-4 bg-main text-white rounded hover:bg-blue-600 transition"
            disabled
          >
            Coming Soon
          </button>
        )}
            </div>
          ))}
        </div>
      );
      
};
  
export default EventsBoard;