import React from 'react';

const Partnership = () => {
  return (
    <div className="mb-8 p-8 bg-white rounded-xl shadow-lg border-2 border-[#d6ac45]/20 hover:border-[#d6ac45]/40 hover:shadow-xl transition-all duration-300 w-full group">
      <h3 className="text-3xl font-bold text-dark mb-8 text-center group-hover:text-[#d6ac45] transition-colors duration-300">Partnership Promise</h3>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Partnership Benefits */}
        <div className="text-left">
          <h4 className="text-2xl font-bold text-dark mb-4 flex items-center group-hover:text-[#d6ac45] transition-colors duration-300">
            <span className="text-3xl mr-3">🤝</span>
            Why Partner With Us
          </h4>
          <ul className="space-y-3 text-lg text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
            <li className="flex items-center">
              <span className="text-2xl mr-3">✨</span>
              Brand Amplification & Visibility
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">🎯</span>
              Targeted Audience Engagement
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">💎</span>
              Premium Event Experiences
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">📈</span>
              Measurable Brand Impact
            </li>
          </ul>
        </div>

        {/* Partnership Quote */}
        <div className="text-left">
          <h4 className="text-2xl font-bold text-dark mb-4 flex items-center group-hover:text-[#d6ac45] transition-colors duration-300">
            <span className="text-3xl mr-3">💬</span>
            Our Promise
          </h4>
          <p className="text-xl text-gray-700 italic leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
            "Partnering with Bright Stage means your brand won't just be seen — it will be celebrated. Together, let's create events that amplify visibility, engage audiences, and leave a lasting brand impression."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
