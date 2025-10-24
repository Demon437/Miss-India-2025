import React from 'react';
import Header from '../components/Header';

const Event = () => {
  const events = [
    {
      id: 1,
      title: "Business Conference 2024",
      date: "Wednesday, March 21, 2024",
      time: "9:00 AM - 5:00 PM",
      venue: "Grand Conference Center",
      address: "123 Business District, City",
      price: "$299",
      description: "Join industry leaders, entrepreneurs, and innovators for a day of insightful discussions, networking opportunities, and cutting-edge presentations. This conference will cover the latest trends in technology, business strategy, and market opportunities.",
      speakers: ["John Smith", "Sarah Johnson", "Mike Chen"],
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Elegant Cocktail Evening",
      date: "Friday, March 23, 2024",
      time: "7:00 PM - 11:00 PM",
      venue: "Sky Lounge",
      address: "456 High Street, Downtown",
      price: "$149",
      description: "An exclusive cocktail evening featuring premium spirits, gourmet appetizers, and live jazz music. Dress code: Cocktail attire. Perfect for networking and celebrating special occasions.",
      speakers: ["DJ Alex", "Chef Maria", "Sommelier David"],
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Summer Music Festival",
      date: "Saturday, March 24, 2024",
      time: "6:00 PM - 12:00 AM",
      venue: "Riverside Park",
      address: "789 Park Avenue, Riverside",
      price: "$199",
      description: "Experience an unforgettable night of live music featuring top artists from around the world. Food trucks, beverage stations, and an amazing atmosphere await you.",
      speakers: ["The Rockers", "Jazz Ensemble", "Electronic Beats"],
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-black">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">OUR EVENTS</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Discover amazing events and create unforgettable memories
            </p>
          </div>
        </section>

        {/* Events List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {events.map((event) => (
                <div key={event.id} className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    
                    <div className="md:w-1/2 p-8">
                      <h2 className="text-3xl font-bold mb-4">{event.title}</h2>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          <span>{event.date}</span>
                        </div>
                        
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          <span>{event.time}</span>
                        </div>
                        
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          <span>{event.venue}, {event.address}</span>
                        </div>
                        
                        <div className="flex items-center">
                          <svg className="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.346 1.076.933 0 1.784-.427 2.346-1.076a1 1 0 00-1.51-1.31c-.163.187-.452.377-.843.504v-1.941a4.535 4.535 0 001.676-.662C13.398 9.765 14 8.99 14 8c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 5.092V4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-2xl font-bold text-yellow-400">{event.price}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-6">{event.description}</p>
                      
                      <div className="flex flex-wrap gap-4">
                        <button className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-lg hover:bg-yellow-300 transition-colors">
                          Buy Tickets
                        </button>
                        <button className="border border-yellow-400 text-yellow-400 font-bold px-8 py-3 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors">
                          Add to Calendar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Event;
