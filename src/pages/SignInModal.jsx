import React, { useEffect, useState } from "react";
import googleIcon from '../assets/google.png';
import { signInWithGoogle } from "../firebase/firebase";

/**
 * SignInModal
 * Props:
 * - isOpen: boolean
 * - onClose: () => void
 * - onSuccess: (user) => void  (optional) called after successful sign-in
 * - onOpenSignUp: () => void  (optional) when user clicks Sign Up
 */
const SignInModal = ({ isOpen, onClose, onSuccess, onOpenSignUp }) => {
    const [termsChecked, setTermsChecked] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e) => {
            if (e.key === 'Escape') onClose && onClose();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target.dataset?.modalOverlay) {
            onClose && onClose();
        }
    };

    const handleSignIn = () => {
        if (!termsChecked) {
            setErrorMessage("Please accept terms of service");
            return;
        }
        setErrorMessage("");
    };

    const handleGoogle = async () => {
        try {
            const res = await signInWithGoogle();
            const user = res.user;
            console.log("Google Sign in result:", user);
            // persist minimal user info so other pages (Form) can auto-fill fields
            try {
                const authUser = {
                    displayName: user.displayName || '',
                    email: user.email || '',
                    photoURL: user.photoURL || ''
                };
                localStorage.setItem('authUser', JSON.stringify(authUser));
            } catch {
                // ignore storage errors
            }
            onSuccess ? onSuccess(user) : null;
            onClose && onClose();
        } catch (err) {
            console.error("Google Sign in error:", err);
            alert("Sign-in failed. Check console for details.");
        }
    };

    return (
        <div
            data-modal-overlay
            onClick={handleOverlayClick}
            style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 50,
            }}
        >
            <div style={{ width: 420, padding: 28, borderRadius: 12, backgroundColor: '#1b3521', color: '#f2f1da', boxShadow: '0 8px 30px rgba(0,0,0,0.4)', fontFamily: 'Arial, sans-serif' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                    <div style={{ fontWeight: 700, color: '#d6ac45', fontSize: 20 }}>Sign In</div>
                    <button onClick={() => onClose && onClose()} style={{ background: 'transparent', border: 'none', color: '#f2f1da', fontSize: 20, cursor: 'pointer' }}>&times;</button>
                </div>

                <div style={{ textAlign: 'center', marginBottom: 18 }}>
                    <button
                        onClick={handleGoogle}
                        style={{
                            backgroundColor: '#f2f1da',
                            color: '#1b3521',
                            border: '1px solid rgba(214,172,69,0.85)',
                            borderRadius: 8,
                            padding: '10px 25px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto',
                            boxShadow: '0 6px 20px rgba(24,24,24,0.12)',
                            cursor: 'pointer',
                            fontWeight: 600
                        }}
                    >
                        <img src={googleIcon} alt="Google" style={{ width: 30, marginRight: 8 }} />
                        Sign in with Google
                    </button>
                    <p style={{ marginTop: 12, fontSize: 14, color: '#d6ac45' }}>........ or go the traditional way ........</p>
                </div>
{/* 
                <div style={{ textAlign: 'left', marginBottom: 18 }}>
                    <label style={{ display: 'block', fontWeight: 700, marginBottom: 8, fontSize: 15, color: '#f2f1da' }}>Email ID / Phone Number</label>
                    <input type="text" placeholder="Enter email or phone to sign up/ sign in" style={{ width: '100%', padding: 10, border: 'none', borderBottom: '1px solid rgba(214,172,69,0.7)', background: 'transparent', color: '#f2f1da', outline: 'none', fontSize: 14 }} />
                </div> */}

                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
                    <input type="checkbox" checked={termsChecked} onChange={() => setTermsChecked(!termsChecked)} style={{ width: 20, height: 20, accentColor: '#d6ac45' }} />
                    <label style={{ fontWeight: 700, color: '#f2f1da' }}>Terms of Service</label>
                </div>

                <button onClick={handleSignIn} style={{ width: '100%', backgroundColor: '#d6ac45', border: 'none', color: '#1b3521', padding: 12, borderRadius: 8, cursor: 'pointer', fontSize: 16, fontWeight: 700 }} onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#81490f')} onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#d6ac45')}>
                    Continue
                </button>

                {errorMessage && <p style={{ color: '#81490f', marginTop: 12, fontWeight: 700 }}>{errorMessage}</p>}


            </div>
        </div>
    );
};

export default SignInModal;

