import React from 'react';

const Philosophy = () => {
  return (
    <div className="mb-8 p-8 bg-white rounded-xl shadow-lg border-2 border-[#d6ac45]/20 hover:border-[#d6ac45]/40 hover:shadow-xl transition-all duration-300 w-full group">
      <h3 className="text-3xl font-bold text-dark mb-8 text-center group-hover:text-[#d6ac45] transition-colors duration-300">Our Philosophy</h3>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Core Values */}
        <div className="text-left">
          <h4 className="text-2xl font-bold text-dark mb-4 flex items-center group-hover:text-[#d6ac45] transition-colors duration-300">
            <span className="text-3xl mr-3">🎭</span>
            What We Are
          </h4>
          <ul className="space-y-3 text-lg text-dark-700 group-hover:text-dark-800 transition-colors duration-300">
            <li className="flex items-center">
              <span className="text-2xl mr-3">🏗️</span>
              Memory Architects
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">💝</span>
              Emotion Curators
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">📖</span>
              Experience Storytellers
            </li>
            <li className="flex items-center">
              <span className="text-2xl mr-3">✨</span>
              Stage Illuminators
            </li>
          </ul>
        </div>

        {/* Philosophy Statement */}
        <div className="text-left">
          <h4 className="text-2xl font-bold text-dark mb-4 flex items-center group-hover:text-[#d6ac45] transition-colors duration-300">
            <span className="text-3xl mr-3">💭</span>
            Our Belief
          </h4>
          <p className="text-xl text-dark-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
            Bright Stage is more than an event company we are memory architects, emotion curators, and experience storytellers. Wherever there's a stage, we'll make sure your story shines. With Bright Stage, every partnership is a promise of excellence, creativity, and memories that last forever.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
