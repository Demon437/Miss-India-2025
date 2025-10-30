import React, { useState } from "react";
import googleIcon from "../assets/google.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [termsChecked, setTermsChecked] = useState(false);
    const navigate = useNavigate();




    // 🌍 All country codes list
    const countryCodes = [
        { code: "+1", name: "United States" },
        { code: "+91", name: "India" },
        { code: "+44", name: "United Kingdom" },
        { code: "+61", name: "Australia" },
        { code: "+81", name: "Japan" },
        { code: "+49", name: "Germany" },
        { code: "+33", name: "France" },
        { code: "+39", name: "Italy" },
        { code: "+86", name: "China" },
        { code: "+7", name: "Russia" },
        { code: "+971", name: "United Arab Emirates" },
        { code: "+974", name: "Qatar" },
        { code: "+966", name: "Saudi Arabia" },
        { code: "+92", name: "Pakistan" },
        { code: "+94", name: "Sri Lanka" },
        { code: "+880", name: "Bangladesh" },
        { code: "+977", name: "Nepal" },
        { code: "+60", name: "Malaysia" },
        { code: "+65", name: "Singapore" },
        { code: "+62", name: "Indonesia" },
        { code: "+64", name: "New Zealand" },
        { code: "+27", name: "South Africa" },
        { code: "+34", name: "Spain" },
        { code: "+351", name: "Portugal" },
        { code: "+55", name: "Brazil" },
        { code: "+54", name: "Argentina" },
        { code: "+1-876", name: "Jamaica" },
        { code: "+52", name: "Mexico" },
        { code: "+20", name: "Egypt" },
        { code: "+213", name: "Algeria" },
        { code: "+90", name: "Turkey" },
        { code: "+98", name: "Iran" },
        { code: "+31", name: "Netherlands" },
        { code: "+41", name: "Switzerland" },
        { code: "+43", name: "Austria" },
        { code: "+46", name: "Sweden" },
        { code: "+47", name: "Norway" },
        { code: "+48", name: "Poland" },
        { code: "+32", name: "Belgium" },
        { code: "+420", name: "Czech Republic" },
        { code: "+36", name: "Hungary" },
        { code: "+45", name: "Denmark" },
        { code: "+82", name: "South Korea" },
        { code: "+66", name: "Thailand" },
        { code: "+84", name: "Vietnam" },
        { code: "+852", name: "Hong Kong" },
        { code: "+853", name: "Macau" },
        { code: "+63", name: "Philippines" },
        { code: "+598", name: "Uruguay" },
        { code: "+56", name: "Chile" },
        { code: "+57", name: "Colombia" },
        { code: "+58", name: "Venezuela" },
        { code: "+93", name: "Afghanistan" },
        { code: "+850", name: "North Korea" },
        { code: "+998", name: "Uzbekistan" },
        { code: "+380", name: "Ukraine" },
        { code: "+965", name: "Kuwait" },
        { code: "+968", name: "Oman" },
        { code: "+961", name: "Lebanon" },
        { code: "+962", name: "Jordan" },
        { code: "+972", name: "Israel" },
        { code: "+994", name: "Azerbaijan" },
        { code: "+212", name: "Morocco" },
        { code: "+254", name: "Kenya" },
        { code: "+256", name: "Uganda" },
        { code: "+255", name: "Tanzania" },
        { code: "+233", name: "Ghana" },
        { code: "+234", name: "Nigeria" },
        { code: "+229", name: "Benin" },
        { code: "+216", name: "Tunisia" },
        { code: "+250", name: "Rwanda" },
        { code: "+503", name: "El Salvador" },
        { code: "+504", name: "Honduras" },
        { code: "+505", name: "Nicaragua" },
        { code: "+506", name: "Costa Rica" },
        { code: "+507", name: "Panama" },
        { code: "+509", name: "Haiti" },
        { code: "+225", name: "Ivory Coast" },
        { code: "+241", name: "Gabon" },
        { code: "+242", name: "Congo" },
        { code: "+243", name: "Democratic Republic of Congo" },
        { code: "+51", name: "Peru" },
        { code: "+593", name: "Ecuador" },
        { code: "+591", name: "Bolivia" },
        { code: "+597", name: "Suriname" },
        { code: "+592", name: "Guyana" },
        { code: "+223", name: "Mali" },
        { code: "+222", name: "Mauritania" },
        { code: "+221", name: "Senegal" },
        { code: "+226", name: "Burkina Faso" },
        { code: "+220", name: "Gambia" },
        { code: "+227", name: "Niger" },
        { code: "+228", name: "Togo" },
        { code: "+231", name: "Liberia" },
        { code: "+232", name: "Sierra Leone" },
        { code: "+258", name: "Mozambique" },
        { code: "+260", name: "Zambia" },
        { code: "+263", name: "Zimbabwe" },
    ];

    const handleSignUp = () => {
        if (!termsChecked) {
            setErrorMessage("Please accept terms of service");
        } else {
            setErrorMessage("Email/Mobile is already registered with us");
        }
    };

    return (
        <div
            style={{
                backgroundColor: "#001a66",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Arial, sans-serif",
                color: "white",
            }}
        >
            <div
                style={{
                    width: "420px",
                    backgroundColor: "#001a66",
                    padding: "35px",
                    borderRadius: "12px",
                    boxShadow: "0 0 15px rgba(0,0,0,0.3)",
                }}
            >
                {/* Toggle Buttons */}
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "35px" }}>
                    <button
                        style={{
                            backgroundColor: "#f0f0f0",
                            color: "black",
                            border: "none",
                            borderRadius: "30px 0 0 30px",
                            padding: "10px 25px",
                            cursor: "pointer",
                            fontWeight: "bold",
                        }}
                        onClick={() => navigate("/signIn")}  // ✅ Go to Sign In
                    >
                        Sign In
                    </button>

                    <button
                        style={{
                            backgroundColor: "red",
                            color: "white",
                            border: "none",
                            borderRadius: "0 30px 30px 0",
                            padding: "10px 25px",
                            cursor: "pointer",
                            fontWeight: "bold",
                        }}
                        onClick={() => navigate("/signup")} // ✅ Already on Sign Up
                    >
                        Sign Up
                    </button>
                </div>


                {/* Google Sign-In */}
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                    <button
                        style={{
                            backgroundColor: "white",
                            color: "black",
                            border: "none",
                            borderRadius: "8px",
                            padding: "10px 25px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 auto",
                            boxShadow: "0 0 15px rgba(255,255,255,0.2)",
                            cursor: "pointer",
                        }}
                    >
                        <img
                            src={googleIcon}
                            alt="Google"
                            style={{ width: "30px", marginRight: "8px" }}
                        />
                        Sign in with Google
                    </button>
                    <p
                        style={{
                            marginTop: "15px",
                            fontSize: "14px",
                            color: "#ccc",
                        }}
                    >
                        ........ or go to the traditional way ........
                    </p>
                </div>

                {/* Form Fields */}
                <div style={{ marginBottom: "15px", display: "flex", gap: "10px" }}>
                    <select
                        style={{
                            width: "50%",
                            padding: "10px",
                            border: "none",
                            borderBottom: "1px solid white",
                            background: "transparent",
                            color: "white",
                            outline: "none",
                        }}
                    >
                        {countryCodes.map((country, index) => (
                            <option key={index} value={country.code} style={{ color: "black" }}>
                                {country.code} ({country.name})
                            </option>
                        ))}
                    </select>
                    <input
                        type="text"
                        placeholder="Mobile number"
                        style={{
                            width: "50%",
                            padding: "10px",
                            border: "none",
                            borderBottom: "1px solid white",
                            background: "transparent",
                            color: "white",
                            outline: "none",
                        }}
                    />
                </div>

                <input
                    type="text"
                    placeholder="Name"
                    style={{
                        width: "100%",
                        padding: "10px",
                        border: "none",
                        borderBottom: "1px solid white",
                        background: "transparent",
                        color: "white",
                        outline: "none",
                        marginBottom: "15px",
                    }}
                />

                <div style={{ position: "relative", marginBottom: "15px" }}>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        style={{
                            width: "100%",
                            padding: "10px",
                            border: "none",
                            borderBottom: "1px solid white",
                            background: "transparent",
                            color: "white",
                            outline: "none",
                        }}
                    />
                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                            position: "absolute",
                            right: "10px",
                            top: "10px",
                            cursor: "pointer",
                            color: "white",
                            fontSize: "18px",
                            userSelect: "none",
                        }}
                    >
                        {showPassword ? "🙈" : "👁️"}
                    </span>
                </div>

                <input
                    type="email"
                    placeholder="Email"
                    style={{
                        width: "100%",
                        padding: "10px",
                        border: "none",
                        borderBottom: "1px solid white",
                        background: "transparent",
                        color: "white",
                        outline: "none",
                        marginBottom: "20px",
                    }}
                />

                {/* Terms of Service */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "25px",
                        borderBottom: !termsChecked ? "2px solid red" : "none",
                        paddingBottom: !termsChecked ? "5px" : "0",
                    }}
                >
                    <input
                        type="checkbox"
                        checked={termsChecked}
                        onChange={() => setTermsChecked(!termsChecked)}
                        style={{
                            width: "20px",
                            height: "20px",
                            marginRight: "10px",
                            accentColor: "white",
                        }}
                    />
                    <label style={{ fontWeight: "bold", color: "white" }}>Terms of Service</label>
                </div>

                {/* Sign Up Button */}
                <button
                    style={{
                        width: "100%",
                        backgroundColor: "red",
                        border: "none",
                        color: "white",
                        padding: "12px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "bold",
                        transition: "0.3s",
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#cc0000")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "red")}
                    onClick={handleSignUp}
                >
                    Sign Up
                </button>

                {/* Error Message */}
                {errorMessage && (
                    <p
                        style={{
                            color: "#ff4d4d",
                            marginTop: "12px",
                            textAlign: "center",
                            fontWeight: "bold",
                        }}
                    >
                        {errorMessage}
                    </p>
                )}
            </div>
        </div>
    );
};

export default SignUp;
