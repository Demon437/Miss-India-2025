import React, { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Home from "./Home";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import Header from "../components/Header";


const GotoForm = ({ onFormClick }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isSignInOpen, setIsSignInOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    useEffect(() => {
        if (location.state?.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    // optional navigation helper (not used here)
const HandelSignIn = () => {
    // Open the Sign In modal instead of navigating to a separate page
    setIsSignInOpen(true);
};

    return (
        <div className="min-h-screen bg-[#fdfdfd] flex flex-col items-center">


<Header/>
            {/* Existing Form Content */}
            <div className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-xl max-w-4xl w-full p-6 md:p-10 relative mt-6">

                {/* Top Button - show absolute on md+, stacked full-width on mobile */}
                <div className="hidden md:block absolute md:top-48 top-6 right-6">
                    <button
                        // onClick={onFormClick}
                         onClick={HandelSignIn}
                        className="font-medium py-3 px-4 rounded-full text-md transition-colors duration-300 bg-yellow-600 hover:bg-yellow-700 text-white shadow-md"
                    >
                        Go to the form
                    </button>
                </div>

                {/* Logo */}
                <div className="flex flex-col items-center mb-4 mt-2">
                    {/* Mobile: smaller container; md+ keeps larger size */}
                    <div className="w-full max-w-[260px] md:max-w-[380px] h-[90px] md:h-[150px] overflow-hidden bg-white flex items-center justify-center rounded">
                        <img
                            src={logo}
                            alt="Bright-Stage Logo"
                            className="w-auto max-h-full object-contain block"
                        />
                    </div>

                    {/* Mobile CTA under logo */}
                    <div className="w-full max-w-[240px] mt-4 md:hidden mx-auto">
                        <button
                            onClick={HandelSignIn}
                            className="w-full font-medium py-3 rounded-full text-md transition-colors duration-300 bg-yellow-600 hover:bg-yellow-700 text-white shadow-md"
                        >
                            Go to the form
                        </button>
                    </div>
                {/* Sign In modal - opens when user clicks Go to the form */}
                <SignInModal
                    isOpen={isSignInOpen}
                    onClose={() => setIsSignInOpen(false)}
                    onSuccess={() => {
                        // after successful sign-in, call onFormClick if provided
                        setIsSignInOpen(false);
                        if (onFormClick) onFormClick();
                        else navigate('/');
                    }}
                    onOpenSignUp={() => {
                        setIsSignInOpen(false);
                        // open sign up modal instead of navigating
                        setIsSignUpOpen(true);
                    }}
                />
                <SignUpModal
                    isOpen={isSignUpOpen}
                    onClose={() => setIsSignUpOpen(false)}
                    onSuccess={() => {
                        setIsSignUpOpen(false);
                        if (onFormClick) onFormClick();
                        else navigate('/');
                    }}
                    onOpenSignIn={() => {
                        setIsSignUpOpen(false);
                        setIsSignInOpen(true);
                    }}
                />
            </div>

                {/* Title */}
                <h2 className="text-[20px] md:text-[22px] font-semibold text-yellow-600 mb-4 md:mb-6">
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
                        <div key={idx} className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-x-6 items-start">
                            <div className="text-yellow-600 font-semibold pr-2 mb-2 md:mb-0">
                                Step {idx + 1}:
                            </div>
                            <div>
                                <div className="text-[15px]">{text}</div>
                                <hr className={idx === 5 ? "hidden" : "mt-3 border-gray-200"} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Note */}
                <p className="text-gray-700 mt-6 md:mt-8 text-[15px]">
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
                            +91 7000939353 / +91 9425311203
                        </span>{" "}
                        or kindly write to us on{" "}
                        <span className="text-dark">
                            team@brightstage.co.in
                        </span>
                    </p>
                </div>
                {/* Thank You */}
                <div className="text-left text-gray-700 text-[15px] mt-8 font-normal ">
                    Thank You!
                </div>
             
                <div className="flex justify-end mt-6">
                    <button
                        onClick={HandelSignIn}
                        className="hidden md:inline-block font-medium py-3 px-4 rounded-full text-md transition-colors duration-300 bg-yellow-600 hover:bg-yellow-700 text-white shadow-md"
                    >
                        Go to the form
                    </button>
                </div>

            </div>
        </div>
    );
};

export default GotoForm;

