import React, { useState } from "react";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);

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
                {/* Top Buttons */}
                <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "35px" }}>
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
                        <option style={{ color: "black" }}>+91 (India)</option>
                        <option style={{ color: "black" }}>+1 (USA)</option>
                        <option style={{ color: "black" }}>+44 (UK)</option>
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
                <div style={{ display: "flex", alignItems: "center", marginBottom: "25px" }}>
                    <input
                        type="checkbox"
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
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default SignUp;
