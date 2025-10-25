import React from "react";

const GotoForm = () => {
    return (
        <div className="min-h-screen bg-[#fdfdfd] flex justify-center items-center p-6">
            <div className="bg-white shadow-lg rounded-2xl max-w-3xl w-full p-8">
                {/* Logo */}
                <div className="flex flex-col items-center mb-6">
                    <img
                        src="/logo.png"
                        alt="Femina Miss India Logo"
                        className="h-20 mb-2"
                    />
                    <h1 className="text-pink-600 font-bold text-xl">FEMINA MISS INDIA 2025</h1>
                </div>

                {/* Heading */}
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
                    Steps to apply
                </h2>

                {/* Description */}
                <p className="text-pink-600 font-semibold mb-2">Dear Aspirants,</p>
                <p className="text-gray-700 mb-6">
                    Please read the process carefully before filling out the form:
                </p>

                {/* Steps */}
                <div className="space-y-4 text-gray-700">
                    <p>
                        <span className="text-pink-600 font-semibold">Step 1:</span> Keep 4
                        pictures ready: close-up, mid-length, full length & no make-up.
                    </p>
                    <p>
                        <span className="text-pink-600 font-semibold">Step 2:</span> Sign in
                        with your email ID / Phone number.
                    </p>
                    <p>
                        <span className="text-pink-600 font-semibold">Step 3:</span> Fill in
                        all your credentials, your Instagram handle link & your physical
                        attributes along with your contact details. All fields are
                        mandatory.
                    </p>
                    <p>
                        <span className="text-pink-600 font-semibold">Step 4:</span> Upload
                        your pictures as mentioned in the first step.
                    </p>
                    <p>
                        <span className="text-pink-600 font-semibold">Step 5:</span> Once
                        all the fields are completed, click on accept T&Cs and submit the
                        form.
                    </p>
                    <p>
                        <span className="text-pink-600 font-semibold">Step 6:</span> You
                        will receive an automated email upon successful submission of the
                        form.
                    </p>
                </div>

                {/* Footer note */}
                <p className="text-gray-700 mt-6">
                    Hope you have understood the steps to apply.
                </p>

                {/* Contact info */}
                <div className="mt-6 text-gray-700 text-sm">
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
                        <span className="text-pink-600">
                            missindiarog@timesgroup.com
                        </span>
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex justify-center mt-8">
                    <button className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition">
                        Go to the form
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GotoForm;
