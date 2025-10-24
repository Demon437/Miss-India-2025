import React from 'react';
import { Link } from 'react-router-dom';
import concertImage from '../assets/concert 2.jpg';

const HeroBanner = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Concert Image and Theme Gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${concertImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-ecruWhite-500/80 via-oldGold-200/80 to-ecruWhite-500/80"></div>
        
        {/* Animated Confetti Effect with Theme Colors */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            >
              <div 
                className={`w-2 h-2 rounded-full ${
                  ['bg-oldGold-400', 'bg-oldGold-300', 'bg-korma-300', 'bg-oldGold-500'][Math.floor(Math.random() * 4)]
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* Stage and Crowd Silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3">
          <div className="absolute bottom-0 right-0 w-1/3 h-full">
            {/* Stage with speakers */}
            <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-r from-gold-800 to-gold-800 opacity-80"></div>
            <div className="absolute bottom-20 right-4 w-8 h-32 bg-gradient-to-t from-gold-700 to-gold-800 opacity-70"></div>
            <div className="absolute bottom-20 right-12 w-8 h-32 bg-gradient-to-t from-gold-700 to-gold-800 opacity-70"></div>
            <div className="absolute bottom-20 right-20 w-8 h-32 bg-gradient-to-t from-gold-700 to-gold-800 opacity-70"></div>
            
            {/* Stage lights with theme colors */}
            <div className="absolute top-0 right-8 w-4 h-4 bg-gold-300 rounded-full opacity-90 animate-pulse shadow-lg shadow-gold-300/50"></div>
            <div className="absolute top-0 right-16 w-4 h-4 bg-gold-300 rounded-full opacity-90 animate-pulse shadow-lg shadow-gold-300/50" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-0 right-24 w-4 h-4 bg-gold-300 rounded-full opacity-90 animate-pulse shadow-lg shadow-gold-300/50" style={{animationDelay: '1s'}}></div>
          </div>
          
          {/* Crowd Silhouette */}
          <div className="absolute bottom-0 left-0 w-2/3 h-full">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute bottom-0 bg-gradient-to-t from-gold-800 to-gold-900 rounded-t-full opacity-70"
                style={{
                  left: `${Math.random() * 100}%`,
                  width: `${20 + Math.random() * 30}px`,
                  height: `${40 + Math.random() * 60}px`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
    
        
     
      </div>
    </section>
  );
};

export default HeroBanner;
