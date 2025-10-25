import React, { useState } from 'react';
import qrImage from '../assets/Screenshot 2025-10-23 173612.png';
import closeUpRef from '../assets/Close-Up.jpg';
import midLengthRef from '../assets/Mid-length.jpg';
import fullLengthRef from '../assets/Full-length.jpg';

const Form = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Registration submitted successfully! We will contact you soon.');
  };
  
  return (
    <section className="py-8 bg-[#1b3521] text-ecruWhite-500">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-lg p-6 shadow-lg border border-oldGold-500/30">
          <h1 className="text-4xl font-bold text-center mb-6 text-[#d6ac45] font-display">
            FEMINA MISS INDIA MP-2025
          </h1>

          <p className="text-left text-celtic-500 mb-4 text-lg leading-relaxed font-bold">
            Welcome to the official registration for Femina Miss India Madhya Pradesh 2025, presented by Bright Stage.
          </p>

          <p className="text-left text-celtic-500 mb-6 text-base leading-relaxed">
            Seize this <strong>opportunity</strong> to <strong>shine</strong> and showcase your <strong>personality</strong>, <strong>talent</strong>, and <strong>confidence</strong> on India's most <strong>prestigious platforms</strong>.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Section 1: Eligibility Criteria */}
            <div className="rounded-lg p-4 bg-gray-50">

              <h2 className="text-xl font-bold text-oldGold-500 mb-3 border-b border-oldGold-500 pb-1">
                Eligibility Criteria
              </h2>
              <ul className="space-y-1 text-sm text-celtic-500">
                <li>• Age: 18 to 25 years</li>
                <li>• Height: 5'3" & above</li>
                <li>• Single/Unmarried</li>
                <li>• Indian passport holder</li>
                <li>• OCI cardholders can apply for 2nd runner-up title only</li>
              </ul>
            </div>

            {/* Section 2: Personal Credentials */}
            <div className="rounded-lg p-4">
              <h2 className="text-xl font-bold text-oldGold-500 mb-4 border-b border-oldGold-500 pb-1">
                Personal Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                <div>
                  <label className="block text-celtic-500 font-semibold mb-1 text-sm">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20"
                  />
                </div>

                <div>
                  <label className="block text-celtic-500 font-semibold mb-1 text-sm">
                    Age (Dec 31, 2025) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    min="18"
                    max="25"
                    required
                    className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20"
                  />
                </div>

                <div>
                  <label className="block text-celtic-500 font-semibold mb-1 text-sm">
                    Height (Feet) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="height"
                    value={formData.height}
                    onChange={handleInputChange}
                    placeholder="e.g., 5.5"
                    required
                    className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20"
                  />
                </div>

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

                <div>
                  <label className="block text-celtic-500 font-semibold mb-1 text-sm">
                    Nationality <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20"
                  >
                    <option value="">Select Nationality</option>
                    <option value="Indian">Indian</option>
                    <option value="OCI">OCI</option>
                  </select>
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
            </div>

            {/* Section 3: Location & Documents */}
            <div className="rounded-lg p-4">
              <h2 className="text-xl font-bold text-oldGold-500 mb-4 border-b border-oldGold-500 pb-1">
                Location & Documents
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-celtic-500 font-semibold mb-1 text-sm">
                    Native State <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="nativeState"
                    value={formData.nativeState}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20"
                  >
                    <option value="">Select Native State</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-celtic-500 font-semibold mb-1 text-sm">
                    Current State <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="currentState"
                    value={formData.currentState}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20"
                  >
                    <option value="">Select Current State</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="bg-blue-50 p-3 rounded mb-4">
                <p className="text-sm text-blue-800 mb-2 font-semibold">Document Upload Instructions:</p>
                <p className="text-xs text-blue-700">Rename files as: "Your Name Document Name" (e.g., "Rashmi Jain Aadhar")</p>
              </div>

              <div>
                <label className="block text-celtic-500 font-semibold mb-1 text-sm">
                  Aadhar Card <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  name="aadharCard"
                  onChange={handleInputChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                  required
                  className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20"
                />
              </div>
            </div>

            {/* Section 4: Photos & Additional Info */}
            <div className="rounded-lg p-4">
              <h2 className="text-xl font-bold text-oldGold-500 mb-4 border-b border-oldGold-500 pb-1">
                Photos & Additional Information
              </h2>

              <div className="bg-blue-50 p-3 rounded mb-4">
                <p className="text-sm text-blue-800 mb-1 font-semibold">Photo Upload Instructions:</p>
                <p className="text-xs text-blue-700">Rename files as: "Your Name Photo Type" (e.g., "Rashmi Jain Close Up")</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Close Up */}
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

                {/* Full Length */}
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

                {/* Mid Length */}
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

                {/* Natural Look */}
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

                {/* Natural Beauty */}
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
            </div>

            {/* Section 5: Payment & Declaration */}
            <div className="rounded-lg p-4">
              <h2 className="text-xl font-bold text-oldGold-500 mb-4 border-b border-oldGold-500 pb-1">
                Payment & Declaration
              </h2>

              <div className="bg-blue-50 p-3 rounded mb-4">
                <p className="text-sm text-blue-800 mb-1 font-semibold">Refund Policy:</p>
                <p className="text-xs text-blue-700">Refund only if details are correct and complete. Participation in prelims is mandatory.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="text-lg font-bold text-celtic-500 mb-3">Registration Fee: ₹999</h4>
                  <div className="bg-white p-4 rounded-lg border border-gray-300 text-center">
                    <div className="w-32 h-32 mx-auto bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                      <a href={qrImage} target="_blank" rel="noopener noreferrer">
                        <img src={qrImage} alt="Payment QR" className="w-32 h-32 object-contain rounded-lg" />
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
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 bg-yellow-600 hover:bg-yellow-700 text-white shadow-md"

              >
                Submit Registration
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
