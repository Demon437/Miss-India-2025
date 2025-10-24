import React from 'react';

const Contact = () => {
  return (
    <div className="p-8 bg-white rounded-xl shadow-lg border-2 border-[#d6ac45]/20 hover:border-[#d6ac45]/40 hover:shadow-xl transition-all duration-300 w-full group">
      <h3 className="text-3xl font-bold text-dark mb-8 text-center group-hover:text-[#d6ac45] transition-colors duration-300">Contact Information</h3>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Address Section */}
        <div className="text-left">
          <h4 className="text-2xl font-bold text-dark mb-4 flex items-center group-hover:text-[#d6ac45] transition-colors duration-300">
            <span className="text-3xl mr-3">📍</span>
            Office Address
          </h4>
          <p className="text-xl text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
            Office Number 201, 25 F/A<br />
            Scheme No 94, Eastern Ring Road<br />
            Scheme 94 Sector FB<br />
            Indore, Madhya Pradesh - 452016<br />
            India
          </p>
        </div>

        {/* Contact Details Section */}
        <div className="text-left">
          <h4 className="text-2xl font-bold text-dark mb-4 flex items-center group-hover:text-[#d6ac45] transition-colors duration-300">
            <span className="text-3xl mr-3">📞</span>
            Get In Touch
          </h4>
          <div className="space-y-4">
            <div className="flex items-center hover:text-[#d6ac45] transition-colors duration-200">
              <span className="text-2xl mr-3">📱</span>
              <span className="text-xl text-gray-700 group-hover:text-gray-800 transition-colors duration-300">Phone: +91-XXXXXXXXXX</span>
            </div>
            <div className="flex items-center hover:text-[#d6ac45] transition-colors duration-200">
              <span className="text-2xl mr-3">✉️</span>
              <span className="text-xl text-gray-700 group-hover:text-gray-800 transition-colors duration-300">Email: info@brightstage.com</span>
            </div>
            <div className="flex items-center hover:text-[#d6ac45] transition-colors duration-200">
              <span className="text-2xl mr-3">🌐</span>
              <span className="text-xl text-gray-700 group-hover:text-gray-800 transition-colors duration-300">Website: www.brightstage.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
