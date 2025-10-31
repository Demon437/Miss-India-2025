import React, { useState, useEffect } from 'react';
import qrImage from '../assets/Screenshot 2025-10-23 173612.png';
import closeUpRef from '../assets/Close-Up.jpg';
import midLengthRef from '../assets/Mid-length.jpg';
import fullLengthRef from '../assets/Full-length.jpg';
import './Form.css'; // <-- added stylesheet import
import Header from './Header';

const AccordionSection = ({ index, title, isOpen, onToggle, children }) => {
  return (
    <div className="mb-6">
      <Header/>
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

  // If user signed in with Google, prefill name/email from localStorage key 'authUser'
  useEffect(() => {
    try {
      const raw = localStorage.getItem('authUser');
      if (!raw) return;
      const u = JSON.parse(raw);
      if (!u) return;

      const displayName = (u.displayName || '').trim();
      const email = u.email || '';

      if (displayName || email) {
        const parts = displayName ? displayName.split(/\s+/) : [];
        const first = parts.length > 0 ? parts[0] : '';
        const last = parts.length > 1 ? parts.slice(1).join(' ') : '';

        setFormData(prev => ({
          ...prev,
          firstName: prev.firstName || first,
          middleName: prev.middleName || '',
          lastName: prev.lastName || last,
          email: prev.email || email,
        }));
      }
    } catch {
      // ignore parse/storage errors
    }
  }, []);

  // submission UI state
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // auto-hide toast messages after a short delay
  useEffect(() => {
    if (!successMessage) return undefined;
    const t = setTimeout(() => setSuccessMessage(''), 4000);
    return () => clearTimeout(t);
  }, [successMessage]);

  useEffect(() => {
    if (!errorMessage) return undefined;
    const t = setTimeout(() => setErrorMessage(''), 5000);
    return () => clearTimeout(t);
  }, [errorMessage]);

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
  // handle feet-specific rules for inches
  const handleHeightFeetChange = (e) => {
    const feet = e.target.value;
    setFormData(prev => {
      let inches = prev.heightInches;
      // if feet is 5, ensure inches start from 3" (clear if below 3)
      if (feet === '5') {
        if (inches !== '' && Number(inches) < 3) inches = '';
      }
      // if feet is 6, inches allowed from 0 (no change needed)
      return { ...prev, heightFeet: feet, heightInches: inches };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    try {
      // client-side required fields validation
      if (!formData.firstName || !formData.lastName || !formData.mobile || !formData.birthDate || !formData.birthMonth || !formData.birthYear) {
        setErrorMessage('Please fill First name, Last name, Mobile and complete Date of Birth.');
        return;
      }

      setSubmitting(true);

      const url = 'http://127.0.0.1:8000/api/contestants/';
      const payload = new FormData();

      // Map component state to API field names (snake_case expected by backend)
      if (formData.firstName) payload.append('first_name', formData.firstName);
      if (formData.middleName) payload.append('middle_name', formData.middleName);
      if (formData.lastName) payload.append('last_name', formData.lastName);

      // build date_of_birth from birthYear, birthMonth, birthDate if available
      const bd = formData.birthDate;
      const bm = formData.birthMonth;
      const by = formData.birthYear;
      if (bd && bm && by) {
        const mm = String(bm).padStart(2, '0');
        const dd = String(bd).padStart(2, '0');
        payload.append('date_of_birth', `${by}-${mm}-${dd}`);
      }

      if (formData.age) payload.append('age', formData.age);
      if (formData.heightFeet) payload.append('height_feet', formData.heightFeet);
      if (formData.heightInches) payload.append('height_inches', formData.heightInches);

      // contact
      if (formData.mobile) payload.append('mobile_no', formData.mobile);
  if (formData.alternateMobile) payload.append('alternate_mobile', formData.alternateMobile);
  if (formData.email) payload.append('email', formData.email);

  // other fields (convert to snake_case expected by API)
  if (formData.nationality) payload.append('nationality', formData.nationality);
  if (formData.instagram) payload.append('instagram_profile', formData.instagram);

  if (formData.birthState) payload.append('birth_state', formData.birthState);
      if (formData.birthStatePreference) payload.append('birth_state_preference', formData.birthStatePreference);
      if (formData.currentState) payload.append('current_state', formData.currentState);
      if (formData.currentStatePreference) payload.append('current_state_preference', formData.currentStatePreference);
      if (formData.nativeState) payload.append('native_state', formData.nativeState);
      if (formData.nativeStatePreference) payload.append('native_state_preference', formData.nativeStatePreference);
      if (formData.hearAboutUs) payload.append('how_did_you_hear', formData.hearAboutUs);

      // boolean -> backend expects terms_accepted
      payload.append('terms_accepted', formData.declaration ? 'true' : 'false');

      // file fields mapping (frontend state key -> backend field name)
      const fileMap = {
        aadharCard: 'aadhar_card',
        closeUpPhoto: 'close_up_photo',
        fullLengthPhoto: 'full_length_photo',
        midLengthPhoto: 'mid_length_photo',
        naturalLookPhoto: 'natural_look_photo',
        naturalBeautyPhoto: 'natural_look_makeup_photo',
        paymentScreenshot: 'payment_screenshot'
      };
      Object.entries(fileMap).forEach(([key, backendName]) => {
        const file = formData[key];
        if (file instanceof File) payload.append(backendName, file, file.name);
      });

      const res = await fetch(url, {
        method: 'POST',
        body: payload
      });

      if (res.ok) {
        const data = await res.json().catch(() => ({}));
        setSuccessMessage('Registration submitted successfully! We will contact you soon.');
        // reset form data (keep simple)
        setFormData({
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
        console.log('Server response:', data);
      } else {
        let errText = `Request failed with status ${res.status}`;
        try {
          const json = await res.json();
          if (json && typeof json === 'object') errText = JSON.stringify(json);
        } catch (err2) {
          console.warn('Failed to parse error body', err2);
        }
        setErrorMessage(errText);
        console.error('Submission error:', errText);
      }
    } catch (err) {
      setErrorMessage(err.message || 'An unexpected error occurred');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (    
    <section className="form-root py-8 bg-[#1b3521] text-ecruWhite-500">

 <section
  className="femina-section"
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 20px 40px 20px", // 👈 less top padding
    marginTop:"70px"
  }}
>
  <div
    className="femina-card"
    style={{
      backgroundColor: "#fff",
      borderRadius: "16px",
      padding: "40px 25px",
      maxWidth: "900px",
      boxShadow: "0 4px 25px rgba(0, 0, 0, 0.1)",
      textAlign: "center",

      
    }}
  >
    <h2
      style={{
        color: "#d4af37",
        fontSize: "1.8rem",
        fontWeight: "600",
        marginBottom: "20px",
      }}
    >
      Femina
    </h2>

    <p
      style={{
        color: "#333",
        fontSize: "1.05rem",
        lineHeight: "1.7",
        marginBottom: "0",
      }}
    >
      With an illustrious legacy of over 60 years, <strong>Femina Miss India</strong> has
      been the crown jewel of India’s pageant heritage a symbol of beauty, intellect,
      and empowerment.
      <br />
      <br />
      <strong>Bright Stage</strong> takes immense pride in being the official licensee
      for <strong>Femina Miss India – Madhya Pradesh</strong>, curating an experience
      where luxury meets legacy and every participant shines with confidence, elegance,
      and purpose.
    </p>
  </div>
</section>

      {/* Toast / transient messages */}
      {(successMessage || errorMessage) && (
        <div className="fixed top-6 right-6 z-50">
          <div className={`max-w-xs px-4 py-3 rounded shadow-lg text-white break-words ${successMessage ? 'bg-green-600' : 'bg-red-600'}`} role="status" aria-live="polite">
            {successMessage || errorMessage}
          </div>
        </div>
      )}
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-lg p-6 shadow-lg border border-oldGold-500/30">
          <h1 className="text-4xl font-bold text-center mb-6 text-[#d6ac45] font-display">
            FEMINA MISS INDIA MP-2025
          </h1>



          <form onSubmit={handleSubmit} className="space-y-6">
            {successMessage && (
              <div className="text-center">
                <p className="text-green-600 font-medium">{successMessage}</p>
              </div>
            )}
            {errorMessage && (
              <div className="text-center">
                <p className="text-red-600 font-medium break-words">{errorMessage}</p>
              </div>
            )}

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
                    className="text-[#d6ac45] font-semibold"
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
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder='First Name*'
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 bg-white border border-gray-300
                      placeholder-gray-400
                      text-sm rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20"
                    />


                  </div>


                  <div>
                    <label className="block text-celtic-500 font-semibold mb-1 text-sm mt-6"></label>
                    <input
                      type="text"
                      placeholder='Middle Name*'
                      name="middleName"
                      value={formData.middleName}
                      onChange={handleInputChange}
                      className="w-full p-2 bg-white border border-gray-300 placeholder-gray-400 rounded text-celtic-500 focus:border-oldGold-500 text-sm focus:outline-none focus:ring-1 focus:ring-oldGold-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-celtic-500 font-semibold mb-1 text-sm mt-6">
                       <span className="text-red-500"></span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder='Last Name*'
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 bg-white border border-gray-300 
                      placeholder-gray-400 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20 text-sm placeholder-gray-400"
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
                        value={formData.birthDate || ''}
                        onChange={handleInputChange}
                        className="w-24 p-1 bg-white border border-gray-300 rounded text-celtic-500 text-sm focus:border-oldGold-500 focus:outline-none"
                      >
                        <option value="">Date</option>
                        {[...Array(31)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                      </select>
                      <select
                        name="birthMonth"
                        value={formData.birthMonth || ''}
                        onChange={handleInputChange}
                        className="w-24 p-1 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none text-sm"
                      >
                        <option value="">Month</option>
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, i) => (
                          <option key={i} value={i + 1}>{month}</option>
                        ))}
                      </select>
                      <select
                        name="birthYear"
                        value={formData.birthYear || ''}
                        onChange={handleInputChange}
                        className="w-24 p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none text-sm"
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
                      className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none text-sm"
                    />
                  </div>

                  {/* Height Field */}
                  {/* Height Field */}
                  <div className="flex-1">
                    <label className="block text-celtic-500 font-semibold mb-1 text-sm">
                      Height <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select
                        name="heightFeet"
                        value={formData.heightFeet}
                        onChange={handleHeightFeetChange}
                        className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none text-sm"
                      >
                        <option value="">Feet</option>
                        {[5, 6].map(feet => (
                          <option key={feet} value={String(feet)}>{feet}</option>
                        ))}
                      </select>
                      <select
                        name="heightInches"
                        value={formData.heightInches}
                        onChange={handleInputChange}
                        className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none text-sm"
                      >
                        <option value="">Inches</option>
                        {(() => {
                          const feet = formData.heightFeet;
                          const start = feet === '5' ? 3 : (feet === '6' ? 0 : 0);
                          const options = [];
                          for (let i = start; i <= 11; i++) {
                            options.push(<option key={i} value={String(i)}>{i}"</option>);
                          }
                          return options;
                        })()}
                      </select>
                    </div>
                  </div>

                  {/* Contact Details Row */}
                  <div>
                    <label className="block text-celtic-500 font-semibold mb-1 text-sm">
                      Contact Details. <span className="text-red-500">*</span>
                    </label>
                    <input placeholder='Mobile No.'
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 bg-white border border-gray-300  rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20 text-sm placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-celtic-500 font-semibold mb-1 text-sm mt-6"></label>
                    <input
                      type="tel"
                      placeholder='Mobile No.(Alternate)'
                      name="alternateMobile"
                      value={formData.alternateMobile}
                      onChange={handleInputChange}
                      className="w-full p-2 bg-white border border-gray-300 placeholder-gray-400 text-sm rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-celtic-500 font-semibold mb-1 text-sm">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                    placeholder='Email'
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 bg-white border border-gray-300 placeholder-gray-400 text-sm rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20"
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
                    className="text-[#d6ac45] font-semibold"
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
                      className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20 text-sm"
                    >
                      <option value="">Birth State / UT</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="West Bengal">West Bengal</option>
                      <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                      <option value="Delhi (NCT)">Delhi (NCT)</option>
                      <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                      <option value="Ladakh">Ladakh</option>
                      <option value="Lakshadweep">Lakshadweep</option>
                      <option value="Puducherry">Puducherry</option>
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
                      className="w-full p-2 bg-white border border-gray-300 rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20 text-sm" 
                    >
                     <option value="">Current State / UT</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="West Bengal">West Bengal</option>
                      <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                      <option value="Delhi (NCT)">Delhi (NCT)</option>
                      <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                      <option value="Ladakh">Ladakh</option>
                      <option value="Lakshadweep">Lakshadweep</option>
                      <option value="Puducherry">Puducherry</option>
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
                      className="w-full p-2 bg-white border border-gray-300  rounded text-celtic-500 focus:border-oldGold-500 focus:outline-none focus:ring-1 focus:ring-oldGold-500/20 text-sm "
                    >
                      <option value="">Native State / UT</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="West Bengal">West Bengal</option>
                      <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                      <option value="Delhi (NCT)">Delhi (NCT)</option>
                      <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                      <option value="Ladakh">Ladakh</option>
                      <option value="Lakshadweep">Lakshadweep</option>
                      <option value="Puducherry">Puducherry</option>
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
                    className="text-[#d6ac45] font-semibold"
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
                  disabled={submitting}
                  className={`font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 text-white shadow-md ${submitting ? 'bg-yellow-400 cursor-wait' : 'bg-yellow-600 hover:bg-yellow-700'}`}
                >
                  {submitting ? 'Submitting...' : 'Submit Registration'}
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