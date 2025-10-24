import React from 'react';

const CSREducational = () => {
  return (
    <div className="text-left mb-8 p-8 bg-white rounded-xl shadow-lg border-2 border-[#d6ac45]/20 hover:border-[#d6ac45]/40 hover:shadow-xl transition-all duration-300 w-full group">
      <h3 className="text-3xl font-bold text-dark mb-6 group-hover:text-[#d6ac45] transition-colors duration-300">
        CSR & Educational Impact - Events That Matter
      </h3>
      <p className="text-xl text-gray-700 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
        When purpose meets creativity, impact multiplies. We help brands and organizations make their good work unforgettable through events that touch lives.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6 text-lg group-hover:text-gray-800 transition-colors duration-300">
        <li>NGO Collaborations & Fundraising Galas</li>
        <li>Youth Festivals & Educational Seminars</li>
        <li>Green Drives, Sustainability Programs & Awareness Campaigns</li>
        <li>& more</li>
      </ul>
      <p className="italic text-gray-600 text-lg group-hover:text-[#d6ac45] transition-colors duration-300">
        Because the best events don't just entertain they inspire change.
      </p>
    </div>
  );
};

export default CSREducational;
