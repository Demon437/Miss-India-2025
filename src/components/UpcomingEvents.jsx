import React from 'react';
import { Link } from 'react-router-dom';

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Business Conference",
      date: "Wed, Mar 21",
      venue: "Conference Center",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      description: "Join industry leaders for insights and networking"
    },
    {
      id: 2,
      title: "Cocktail Party",
      date: "Fri, Mar 23",
      venue: "Party Venue",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop",
      description: "Elegant evening with premium cocktails and networking"
    },
    {
      id: 3,
      title: "Music Concert",
      date: "Sat, Mar 24",
      venue: "Concert Hall",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      description: "Live music performance by renowned artists"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-ecruWhite-500 via-oldGold-200 to-ecruWhite-500 text-celtic-500">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-oldGold-500 via-korma-500 to-oldGold-500 bg-clip-text text-transparent font-display">UPCOMING EVENTS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-gradient-to-br from-ecruWhite-500/90 via-oldGold-200/90 to-ecruWhite-500/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-oldGold-500/20 hover:border-oldGold-400/40">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-celtic-500/60 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-celtic-500">{event.title}</h3>
                <p className="text-oldGold-500 mb-2">{event.date} | {event.venue}</p>
                <p className="text-celtic-500 text-sm mb-4">{event.description}</p>
                
                <div className="flex items-center justify-between">
                  <Link 
                    to="/events" 
                    className="text-oldGold-500 hover:text-oldGold-400 underline text-sm transition-colors duration-300"
                  >
                    More info
                  </Link>
                  <button className="font-bold px-4 py-2 rounded transition-all duration-300 transform hover:scale-105 shadow-md" style={{backgroundColor: '#1b3521', color: '#d6ac45'}}>
                    Buy Tickets
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
