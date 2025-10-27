import React, { useState } from 'react';
import qrImage from '../assets/Screenshot 2025-10-23 173612.png';
import closeUpRef from '../assets/Close-Up.jpg';
import midLengthRef from '../assets/Mid-length.jpg';
import fullLengthRef from '../assets/Full-length.jpg';
import './Form.css'; // <-- added stylesheet import

const AccordionSection = ({ index, title, isOpen, onToggle, children }) => {
  return (
    <div className="mb-6">
      <label className="flex items-center cursor-pointer">
        {/* Remove the radio input as it's not needed for toggle functionality */}
        <div
          className={`accordion-header w-full flex items-center justify-between py-4 px-6 focus:outline-none ${isOpen ? 'is-sticky' : ''}`}
          onClick={() => onToggle(index)} // Add onClick here
        >
          <div className="flex items-center gap-4">
            <div className="accordion-number w-10 h-10 flex items-center justify-center text-gray-700 font-semibold">
              {index}
            </div>
            <span className="accordion-title text-left text-celtic-500 font-semibold">{title}</span>
          </div>

          <div className="text-gray-700">
            {isOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </div>
        </div>
      </label>

      <div
        className={`mt-4 overflow-hidden transition-[max-height,opacity] duration-300 ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!isOpen}
      >
        <div className="pl-12 pr-6 pb-4">
          {children}
        </div>
      </div>
    </div>
  );
};

const nationalityOptions = [
  'Indian Passport',
  'OCI',
  // Add more options as needed
];

const Form = () => {
  // allow multiple open sections
  const [openSections, setOpenSections] = useState([]); // array of open indexes

  // toggle a section on/off without closing others
  const toggleSection = (i) => {
    setOpenSections(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  };

  // continue should open the next section while keeping current opens
  const handleContinue = (nextSection) => {
    setOpenSections(prev => prev.includes(nextSection) ? prev : [...prev, nextSection]);
  };

  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    age: '',
    height: '',
    mobile: '',
    alternateMobile: '',
    email: '',
    nationality: '',
    instagram: '',
    nativeState: '',
    currentState: '',
    aadharCard: null,
    closeUpPhoto: null,
    fullLengthPhoto: null,
    midLengthPhoto: null,
    naturalLookPhoto: null,
    naturalBeautyPhoto: null,
    hearAboutUs: '',
    paymentScreenshot: null,
    declaration: false
  });

  const handleInputChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : (files ? files[0] : value)
    }));
  };

  const handleNationalityChange = (e) => {
    setFormData({ ...formData, nationality: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Registration submitted successfully! We will contact you soon.');
  };

  return (
    <section className="form-root py-8 bg-[#1b3521] text-ecruWhite-500">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-lg p-6 shadow-lg border border-oldGold-500/30">
          <h1 className="text-4xl font-bold text-center mb-6 text-[#d6ac45] font-display">
            FEMINA MISS INDIA MP-2025
          </h1>



          <form onSubmit={handleSubmit} className="space-y-6">

            <div id="section-1">
              <AccordionSection
                index={1}
                title="Eligibility Criteria"
                isOpen={openSections.includes(1)}
                onToggle={() => toggleSection(1)}
              >
                <ul className="space-y-3 text-celtic-500">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-sm">▸</span>
                    <span className="text-base text-gray-600">Age: 18 to 25 years (25 as of December 31, 2025).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-sm">▸</span>
                    <span className="text-base text-gray-600">Height: 5'3" & above (without heels).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-sm">▸</span>
                    <span className="text-base text-gray-600">Relationship Status: Single, Not-Engaged, Unmarried, & Never been Married.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-sm">▸</span>
                    <span className="text-base text-gray-600">Nationality: Indian passport holder.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-sm">▸</span>
                    <span className="text-base text-gray-600">OCI cardholder can apply only for 2nd runner-up title.</span>
                  </li>
                </ul>

                <div className="text-right mt-4">
                  <button
                    type="button"
                    onClick={() => handleContinue(2)}
                    className="text-pink-600 font-semibold"
                  >
                    Continue &gt;
                  </button>
                </div>
              </AccordionSection>
            </div>

            <div id="section-2">
              <AccordionSection
                index={2}
                title="Personal Credentials"
                isOpen={openSections.includes(2)}
                onToggle={() => toggleSection(2)}
              >
                {/* Update the grid layout in Personal Credentials section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Name Fields Row */}
                  <div>
                    <label className="block text-celtic-500 font-semibold mb-1 text-sm">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20"
                    />


                  </div>


                  <div>
                    <label className="block text-celtic-500 font-semibold mb-1 text-sm">Middle Name</label>
                    <input
                      type="text"
                      name="middleName"
                      value={formData.middleName}
                      onChange={handleInputChange}
                      className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-celtic-500 font-semibold mb-1 text-sm">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20"
                    />
                  </div>

                  {/* Date, Age, Height Row */}

                  {/* Date of Birth Field */}
                  <div className="flex-1">
                    <label className="block text-celtic-500 font-semibold mb-1 text-sm">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select
                        name="birthDate"
                        className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none"
                      >
                        <option value="">Date</option>
                        {[...Array(31)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                      </select>
                      <select
                        name="birthMonth"
                        className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none"
                      >
                        <option value="">Month</option>
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, i) => (
                          <option key={i} value={i + 1}>{month}</option>
                        ))}
                      </select>
                      <select
                        name="birthYear"
                        className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none"
                      >
                        <option value="">Year</option>
                        {[...Array(8)].map((_, i) => {
                          const year = 2007 - i;
                          return <option key={year} value={year}>{year}</option>;
                        })}
                      </select>
                    </div>
                  </div>

                  {/* Age Field */}
                  <div className="flex-1">
                    <label className="block text-celtic-500 font-semibold mb-1 text-sm">
                      Age (on December 31, 2025) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      required
                      placeholder="Age"
                      className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none"
                    />
                  </div>

                  {/* Height Field */}
                  <div className="flex-1">
                    <label className="block text-celtic-500 font-semibold mb-1 text-sm">
                      Height <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select
                        name="heightFeet"
                        className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none"
                      >
                        <option value="">Feet</option>
                        {[5, 6].map(feet => (
                          <option key={feet} value={feet}>{feet}</option>
                        ))}
                      </select>
                      <select
                        name="heightInches"
                        className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none"
                      >
                        <option value="">Inches</option>
                        {[...Array(12)].map((_, i) => (
                          <option key={i} value={i}>{i}"</option>
                        ))}
                      </select>
                    </div>
                  </div>


                  {/* Contact Details Row */}
                  <div>
                    <label className="block text-celtic-500 font-semibold mb-1 text-sm">
                      Mobile No. <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-celtic-500 font-semibold mb-1 text-sm">Alternate Mobile</label>
                    <input
                      type="tel"
                      name="alternateMobile"
                      value={formData.alternateMobile}
                      onChange={handleInputChange}
                      className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-celtic-500 font-semibold mb-1 text-sm">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 font-semibold mb-2">Nationality</label>
                    <div className="flex flex-wrap items-center gap-6">
                      {nationalityOptions.map((option, index) => (
                        <label key={index} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="nationality"
                            value={option}
                            checked={formData.nationality === option}
                            onChange={handleNationalityChange}
                            className="h-4 w-4 mr-1 accent-[#2563eb]"
                          />
                          <span className="text-celtic-500 font-semibold">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-celtic-500 font-semibold mb-1 text-sm">Instagram Profile URL</label>
                    <input
                      type="text"
                      name="instagram"
                      value={formData.instagram}
                      onChange={handleInputChange}
                      placeholder="https://instagram.com/yourusername"
                      className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20"
                    />
                  </div>
                </div>

                <div className="text-right mt-4">
                  <button
                    type="button"
                    onClick={() => handleContinue(3)}
                    className="text-pink-600 font-semibold"
                  >
                    Continue &gt;
                  </button>
                </div>
              </AccordionSection>
            </div>

            <div id="section-3">
              <AccordionSection
                index={3}
                title="Other Details"
                isOpen={openSections.includes(3)}
                onToggle={() => toggleSection(3)}
              >
                {/* Note above the columns (moved as requested) */}
                <p className="text-sm text-celtic-500 mb-4 bg-pink-50 p-3 rounded border border-pink-100">
                  Please note (There will be only one representative from the UTs marked as (UT) in the drop down)
                </p>

                {/* Three-column: Birth State / Current State / Native(Parents) State with preference selects */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                  {/* Birth State / UT */}
                  <div>
                    <label className="block text-celtic-500 font-semibold mb-1 text-sm">
                      Birth State / UT <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="birthState"
                      value={formData.birthState || ''}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20"
                    >
                      <option value="">Birth State / UT</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Other">Other</option>
                    </select>

                    <div className="mt-3 flex items-center gap-4">
                      <select
                        name="birthStatePreference"
                        value={formData.birthStatePreference || ''}
                        onChange={handleInputChange}
                        className="p-2 w-28 bg-white border border-gray-300 rounded text-celtic-500 focus:outline-none"
                      >
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                      <span className="text-sm text-celtic-500">In order of preference of your audition state / UT*</span>
                    </div>
                    <p className="text-red-500 text-sm mt-1 hidden">Please select birth state</p>
                  </div>

                  {/* Current State / UT */}
                  <div>
                    <label className="block text-celtic-500 font-semibold mb-1 text-sm">
                      Current State / UT <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="currentState"
                      value={formData.currentState}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20"
                    >
                      <option value="">Current State / UT</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Other">Other</option>
                    </select>

                    <div className="mt-3 flex items-center gap-4">
                      <select
                        name="currentStatePreference"
                        value={formData.currentStatePreference || ''}
                        onChange={handleInputChange}
                        className="p-2 w-28 bg-white border border-gray-300 rounded text-celtic-500 focus:outline-none"
                      >
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                      <span className="text-sm text-celtic-500">In order of preference of your audition state / UT*</span>
                    </div>
                    <p className="text-red-500 text-sm mt-1 hidden">Please select preference</p>
                  </div>

                  {/* Native State (Parents Birth State) / UT */}
                  <div>
                    <label className="block text-celtic-500 font-semibold mb-1 text-sm">
                      Native State (Parents Birth State) / UT <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="nativeState"
                      value={formData.nativeState}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20"
                    >
                      <option value="">Native State / UT</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Other">Other</option>
                    </select>

                    <div className="mt-3 flex items-center gap-4">
                      <select
                        name="nativeStatePreference"
                        value={formData.nativeStatePreference || ''}
                        onChange={handleInputChange}
                        className="p-2 w-28 bg-white border border-gray-300 rounded text-celtic-500 focus:outline-none"
                      >
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                      <span className="text-sm text-celtic-500">In order of preference of your audition state / UT*</span>
                    </div>
                    <p className="text-red-500 text-sm mt-1 hidden">Please select preference</p>
                  </div>
                </div>

                <div className="text-right mt-4">
                  <button
                    type="button"
                    onClick={() => handleContinue(4)}
                    className="text-pink-600 font-semibold"
                  >
                    Continue &gt;
                  </button>
                </div>
              </AccordionSection>
            </div>  

            <div id="section-4">
              <AccordionSection
                index={4}
                title="Upload Photos"
                isOpen={openSections.includes(4)}
                onToggle={() => toggleSection(4)}
              >
                <div className="bg-blue-50 p-3 rounded mb-4">
                  <p className="text-sm text-blue-800 mb-1 font-semibold">Photo Upload Instructions:</p>
                  <p className="text-xs text-blue-700">Rename files as: "Your Name Photo Type" (e.g., "Rashmi Jain Close Up")</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <label className="block text-celtic-500 font-semibold mb-1 text-sm">
                        Close Up Photo <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="file"
                        name="closeUpPhoto"
                        onChange={handleInputChange}
                        accept=".jpg,.jpeg,.png"
                        required
                        className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20"
                      />
                    </div>
                    <div className="w-36 text-center">
                      <img src={closeUpRef} alt="Close Up Reference" className="w-28 h-28 object-cover rounded-lg shadow-sm mb-1" />
                      <p className="text-xs text-celtic-500">Reference Image</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <label className="block text-celtic-500 font-semibold mb-1 text-sm">
                        Full Length Photo <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="file"
                        name="fullLengthPhoto"
                        onChange={handleInputChange}
                        accept=".jpg,.jpeg,.png"
                        required
                        className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20"
                      />
                    </div>
                    <div className="w-36 text-center">
                      <img src={fullLengthRef} alt="Full Length Reference" className="w-28 h-28 object-cover rounded-lg shadow-sm mb-1" />
                      <p className="text-xs text-celtic-500">Reference Image</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <label className="block text-celtic-500 font-semibold mb-1 text-sm">
                        Mid Length Photo <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="file"
                        name="midLengthPhoto"
                        onChange={handleInputChange}
                        accept=".jpg,.jpeg,.png"
                        required
                        className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20"
                      />
                    </div>
                    <div className="w-36 text-center">
                      <img src={midLengthRef} alt="Mid Length Reference" className="w-28 h-28 object-cover rounded-lg shadow-sm mb-1" />
                      <p className="text-xs text-celtic-500">Reference Image</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <label className="block text-celtic-500 font-semibold mb-1 text-sm">
                        Natural Look Photo <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="file"
                        name="naturalLookPhoto"
                        onChange={handleInputChange}
                        accept=".jpg,.jpeg,.png"
                        required
                        className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20"
                      />
                    </div>
                    <div className="w-36 text-center">
                      <img src={closeUpRef} alt="Natural Look Reference" className="w-28 h-28 object-cover rounded-lg shadow-sm mb-1" />
                      <p className="text-xs text-celtic-500">Reference Image</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-celtic-500 font-semibold mb-1 text-sm">
                      Natural Beauty Shot (No make-up)
                    </label>
                    <input
                      type="file"
                      name="naturalBeautyPhoto"
                      onChange={handleInputChange}
                      accept=".jpg,.jpeg,.png"
                      className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-celtic-500 font-semibold mb-1 text-sm">How did you hear about us?</label>
                    <input
                      type="text"
                      name="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={handleInputChange}
                      placeholder="e.g., Social Media, Friend, Advertisement"
                      className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20"
                    />
                  </div>
                </div>
              </AccordionSection>
            </div>

            {/* Payment and submit area kept outside or can be in a separate accordion */}
            <div className="rounded-lg p-4 bg-gray-50">
              <h2 className="text-xl font-bold text-oldGold-500 mb-4 border-b border-oldGold-500 pb-1">
                Payment & Declaration
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="text-lg font-bold text-celtic-500 mb-3">Registration Fee: ₹999</h4>
                  <div className="bg-white p-4 rounded-lg border border-gray-300 text-center">
                    <div className="w-48 h-48 mx-auto bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                      <a href={qrImage} target="_blank" rel="noopener noreferrer">
                        <img src={qrImage} alt="Payment QR" className="w-48 h-48 object-contain rounded-lg" />
                      </a>
                    </div>
                    <p className="text-sm text-gray-600">Scan QR code to make payment</p>
                  </div>
                </div>

                <div>
                  <div className="mb-4">
                    <label className="block text-celtic-500 font-semibold mb-1 text-sm">
                      Payment Screenshot <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="file"
                      name="paymentScreenshot"
                      onChange={handleInputChange}
                      accept=".jpg,.jpeg,.png,.pdf"
                      required
                      className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20"
                    />
                  </div>

                  <div className="bg-gray-50 p-3 rounded">
                    <label className="flex items-start space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="declaration"
                        checked={formData.declaration}
                        onChange={handleInputChange}
                        required
                        className="mt-1 w-4 h-4 text-oldGold-500 bg-white border-gray-300 rounded focus:ring-oldGold-500"
                      />
                      <span className="text-sm text-celtic-500">
                        I confirm I've read the terms & conditions and all details are correct. <span className="text-red-500">*</span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 bg-yellow-600 hover:bg-yellow-700 text-white shadow-md"
                >
                  Submit Registration
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
