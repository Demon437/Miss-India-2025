import React from "react";

const GotoForm = ({ onFormClick }) => {
    return (
        <div className="min-h-screen bg-[#fdfdfd] flex justify-center items-center p-6">
            <div className="bg-white shadow-md rounded-xl max-w-4xl w-full p-10 relative">
                {/* Top Button */}
                <div className="absolute top-33 right-6">
                    <button
                        onClick={onFormClick}
                        className="font-medium py-3 px-4 rounded-full text-md transition-colors duration-300 bg-yellow-600 hover:bg-yellow-700 text-white shadow-md"
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
                <h2 className="text-[22px] font-semibold text-yellow-600 mb-6">
                    Steps to apply
                </h2>

                {/* Intro */}
                <p className="text-yellow-600 font-semibold mb-1">Dear Aspirants,</p>
                <p className="text-yellow-600 font-semibold mb-5">
                    Please read the process carefully before filling out the form:
                </p>

                {/* Steps */}
                <div className="space-y-6 text-[15px] text-dark">
                    {[
                        "Keep 4 pictures ready: close-up, mid-length, full length & no make-up.",
                        "Sign In with your email ID / Phone number.",
                        "Fill in all your credentials, your Instagram handle link & your physical attributes along with your contact details. All fields are mandatory.",
                        "Upload your pictures as mentioned in the first step.",
                        "Once all the fields are completed, click on accept T&Cs and submit the form.",
                        "You will receive an automated email upon successful submission of the form.",
                    ].map((text, idx) => (
                        <div key={idx} className="grid grid-cols-[auto_1fr] gap-x-6 items-start">
                            <div className="text-yellow-600 font-semibold pr-2">
                                Step {idx + 1}:
                            </div>
                            <div>
                                <div>{text}</div>
                                <hr className={idx === 5 ? "hidden" : "mt-3 border-gray-200"} />
                            </div>
                        </div>
                    ))}
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
                        <span className="text-dark">
                            missindiaorg@timesgroup.com
                        </span>
                    </p>
                </div>
                {/* Thank You */}
                <div className="text-left text-gray-700 text-[15px] mt-10 font-normal ">
                    Thank You!
                </div>
                {/* Bottom Button */}
                <div className="flex justify-end mt-10">
                    <button
                        onClick={onFormClick}
                        className="font-medium py-3 px-4 rounded-full text-md transition-colors duration-300 bg-yellow-600 hover:bg-yellow-700 text-white shadow-md"
                    >
                        Go to the form
                    </button>
                </div>


            </div>
        </div>
    );
};

export default GotoForm;
