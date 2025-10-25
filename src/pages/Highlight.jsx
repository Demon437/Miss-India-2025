import React from 'react';

const Highlight = () => {
  return (
    <section className="py-16 bg-[#f2f1da]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#81490f] font-display">
          Femina Miss India – Madhya Pradesh
        </h2>
        <p className="text-xl text-[#81490f] leading-relaxed mb-6 text-left">
          Bright Stage is immensely proud to be the official licensee of Femina Miss India – Madhya Pradesh. Bringing this prestigious national platform to our state is not just an honor; it is a celebration of talent, ambition, and the limitless potential of young women. Femina Miss India has long been a stage where dreams take flight, confidence shines bright, and extraordinary journeys begin — values that perfectly resonate with the spirit of Bright Stage.
        </p>
        <p className="text-2xl italic text-[#81490f] mb-6 font-semibold text-left">
          "A stage is not just a place: it is where brilliance meets opportunity."
        </p>
        <p className="text-xl text-[#81490f] leading-relaxed mb-8 text-left">
          We are thrilled to open the doors for young women aged 15 to 25, inviting them to step into the spotlight, showcase their talent, express their individuality, and embrace the journey of transformation. This is your moment to shine, inspire, and leave a legacy that echoes far beyond the stage.
        </p>

        <div className="mt-8 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-[#81490f]/30 inline-block text-left max-w-4xl">
          <h3 className="text-2xl font-bold mb-4 text-[#81490f] flex items-center">
            <span className="text-3xl mr-3">🌟</span>
            Open Invitation
          </h3>
          <p className="text-lg text-[#81490f] leading-relaxed">
            To every ambitious, confident, and passionate girl in Madhya Pradesh — the stage awaits. Join Femina Miss India – Madhya Pradesh and embark on a journey where beauty meets purpose, elegance meets empowerment, and dreams turn into lasting legacies
          </p>
        </div>
      </div>



      <section className="py-16 bg-[#F5F5DC] w-full" id="services">
        <div className="w-full bg-white p-8 rounded-lg shadow-md border border-[#d6ac45]/30">
          {/* Tagline */}
          <p className="text-[#1b3521] italic mb-6 text-xl text-center font-medium">
            From spotlight moments to standing ovations — we create the magic between the stage and the soul.
          </p>

          {/* Main Heading */}
          <h2 className="text-3xl font-bold text-center mb-6 text-dark">
            Weddings & Celebrations – Turning "I Do" into "Wow"
          </h2>

          {/* Main Description */}
          <p className="text-gray-700 leading-relaxed text-left mb-8 text-xl">
            Love stories deserve stages as grand as the emotions behind them. Whether it's a destination wedding by the sea or a sparkling anniversary gala, we make celebrations unforgettable.
          </p>

          {/* Services List */}
          <div className="text-left mb-8">
            <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6 text-lg">
              <li>Destination Weddings & Royal Celebrations</li>
              <li>Designer Décor & Show-Stopping Bridal Entries</li>
              <li>Engagements, Anniversaries & Family Galas</li>
              <li>Celebrity Acts & Full Wedding Planning</li>
              <li>& more</li>
            </ul>

            {/* Closing Messages */}
            <p className="italic text-gray-600 mb-4 text-lg">
              Because your love story deserves a celebration as timeless as your bond.
            </p>
            <p className="text-gray-700 mb-6 text-lg">
              Every celebration becomes a timeless memory — designed to be retold for generations.
            </p>
          </div>
        </div>
      </section>

    </section>



  );
};

export default Highlight;
