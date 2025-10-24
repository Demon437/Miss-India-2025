import React from 'react';

const GovernmentCultural = () => {
  return (
    <div className="text-left mb-8 p-8 bg-white rounded-xl shadow-lg border-2 border-[#d6ac45]/20 hover:border-[#d6ac45]/40 hover:shadow-xl transition-all duration-300 w-full group">
      <h3 className="text-3xl font-bold text-dark mb-6 group-hover:text-[#d6ac45] transition-colors duration-300">
        Government & Cultural Grandeur - Tradition Meets Transformation
      </h3>
      <p className="text-xl text-gray-700 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
        From festivals that echo heritage to public ceremonies that mark history, We give communities not just events, but memories they proudly belong to.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6 text-lg group-hover:text-gray-800 transition-colors duration-300">
        <li>State-Sponsored Ceremonies & National Events</li>
        <li>Cultural Festivals, Lok Utsavs & Awareness Campaigns</li>
        <li>Melas, Trade Expos & Record-Making Events</li>
        <li>& more</li>
      </ul>
      <p className="italic text-gray-600 text-lg group-hover:text-[#d6ac45] transition-colors duration-300">
        We bring people together, honoring the past while celebrating progress.
      </p>
    </div>
  );
};

export default GovernmentCultural;
