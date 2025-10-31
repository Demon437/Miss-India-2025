import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../firebase/firebase";

const Login = () => {
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithGoogle();
            console.log(result.user); // shows name, email, photoURL
            alert(`Welcome ${result.user.displayName}`);
            // Navigate to the form page after successful sign-in
            navigate("/form");
        } catch (error) {
            console.error("Error during sign-in:", error);
            alert("Sign-in failed. Check console for details.");
        }
    };

    return (
        <button onClick={handleGoogleSignIn}>
            Sign in with Google
        </button>
    );
};

export default Login;
