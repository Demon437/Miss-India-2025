import React from "react";

const SignIn = () => {
    return (
        <div
            style={{
                backgroundColor: "#001a66",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
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
                    textAlign: "center",
                }}
            >
                {/* Top Buttons */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginBottom: "35px",
                    }}
                >
                    <button
                        style={{
                            backgroundColor: "red",
                            color: "white",
                            border: "none",
                            borderRadius: "30px 0 0 30px",
                            padding: "10px 25px",
                            cursor: "pointer",
                            fontWeight: "bold",
                        }}
                    >
                        Sign In
                    </button>
                    <button
                        style={{
                            backgroundColor: "#f0f0f0",
                            color: "black",
                            border: "none",
                            borderRadius: "0 30px 30px 0",
                            padding: "10px 25px",
                            cursor: "pointer",
                            fontWeight: "bold",
                        }}
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
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            alt="Google"
                            style={{ width: "20px", marginRight: "8px" }}
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

                {/* Email/Phone Input */}
                <div style={{ textAlign: "left", marginBottom: "25px" }}>
                    <label
                        style={{
                            display: "block",
                            fontWeight: "bold",
                            marginBottom: "8px",
                            fontSize: "15px",
                        }}
                    >
                        Email ID / Phone Number
                    </label>
                    <input
                        type="text"
                        placeholder="Enter email or phone to sign up/ sign in"
                        style={{
                            width: "100%",
                            padding: "10px",
                            border: "none",
                            borderBottom: "1px solid white",
                            background: "transparent",
                            color: "white",
                            outline: "none",
                            fontSize: "14px",
                        }}
                    />
                </div>

                {/* Continue Button */}
                <button
                    style={{
                        width: "60%",
                        backgroundColor: "#a12a2a",
                        border: "none",
                        color: "white",
                        padding: "12px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "bold",
                        marginTop: "30px",
                        transition: "0.3s",
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#cc0000")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#a12a2a")}
                >
                    Continue
                </button>
            </div>

            {/* Footer */}
            <div
                style={{
                    marginTop: "40px",
                    textAlign: "center",
                    fontSize: "13px",
                    color: "#ccc",
                    lineHeight: "1.6",
                }}
            >
                <p>
                    Terms of Use | Grievance Redressal Policy | Contact Us
                </p>
                <p>
                    Copyright @ 2024. A division of Times Global Broadcasting Co. Ltd
                </p>
            </div>
        </div>
    );
};

export default SignIn;
