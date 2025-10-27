import React from "react";

const GotoForm = ({ onFormClick }) => {
    return (
        <div className="min-h-screen bg-[#fdfdfd] flex justify-center items-center p-6">
            <div className="bg-white shadow-md rounded-xl max-w-4xl w-full p-10 relative">
                {/* Top Button */}
                <div className="absolute top-33 right-6">
                    <button
                        onClick={onFormClick}
                        className="bg-[#e91e63] hover:bg-[#d21856] text-white font-semibold text-[15px] rounded-full px-6 py-3 transition-all shadow-md"
                    >
                        Go to the form
                    </button>
                </div>

                {/* Logo */}
                <div className="flex flex-col items-center mb-4 mt-4">
                    <img
                        src="/logo.png"
                        alt="Femina Miss India Logo"
                        className="h-16 mb-2"
                    />
                </div>

                {/* Title */}
                <h2 className="text-[22px] font-semibold text-gray-800 mb-6">
                    Steps to apply
                </h2>

                {/* Intro */}
                <p className="text-[#e91e63] font-semibold mb-1">Dear Aspirants,</p>
                <p className="text-[#e91e63] font-semibold mb-5">
                    Please read the process carefully before filling out the form:
                </p>

                {/* Steps */}
                <div className="space-y-5 text-[15px] text-gray-700">
                    <div>
                        <span className="text-[#e91e63] font-semibold">Step 1: </span>
                        Keep 4 pictures ready: close-up, mid-length, full length & no
                        make-up.
                        <hr className="mt-2 border-gray-200" />
                    </div>
                    <div>
                        <span className="text-[#e91e63] font-semibold">Step 2: </span>
                        Sign In with your email ID / Phone number.
                        <hr className="mt-2 border-gray-200" />
                    </div>
                    <div>
                        <span className="text-[#e91e63] font-semibold">Step 3: </span>
                        Fill in all your credentials, your Instagram handle link & your
                        physical attributes along with your contact details. All fields are
                        mandatory.
                        <hr className="mt-2 border-gray-200" />
                    </div>
                    <div>
                        <span className="text-[#e91e63] font-semibold">Step 4: </span>
                        Upload your pictures as mentioned in the first step.
                        <hr className="mt-2 border-gray-200" />
                    </div>
                    <div>
                        <span className="text-[#e91e63] font-semibold">Step 5: </span>
                        Once all the fields are completed, click on accept T&Cs and submit
                        the form.
                        <hr className="mt-2 border-gray-200" />
                    </div>
                    <div>
                        <span className="text-[#e91e63] font-semibold">Step 6: </span>
                        You will receive an automated email upon successful submission of
                        the form.
                    </div>
                </div>

                {/* Note */}
                <p className="text-gray-700 mt-8 text-[15px]">
                    Hope you have understood the steps to apply.
                </p>

                {/* Contact Info */}
                <div className="mt-5 text-gray-700 text-[14px] leading-relaxed">
                    <p>
                        For further clarity, kindly call the helpline numbers between 11 am
                        to 7 pm.
                    </p>
                    <p>
                        Contact:{" "}
                        <span className="font-medium">
                            +91 9619937295 / +91 7039464909
                        </span>{" "}
                        or kindly write to us on{" "}
                        <span className="text-[#e91e63]">
                            missindiaorg@timesgroup.com
                        </span>
                    </p>
                </div>

                {/* Bottom Button */}
                <div className="flex justify-end mt-10">
                    <button
                        onClick={onFormClick}
                        className="bg-[#e91e63] hover:bg-[#d21856] text-white font-semibold text-[15px] rounded-full px-6 py-3 transition-all shadow-md"
                    >
                        Go to the form
                    </button>
                </div>

                {/* Thank You */}
                <div className="text-center text-gray-700 text-[15px] mt-6 font-normal">
                    Thank You!
                </div>
            </div>
        </div>
    );
};

export default GotoForm;
