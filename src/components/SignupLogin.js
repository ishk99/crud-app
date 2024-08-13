// this component hold login and signup functionality of the app

import { useState } from "react";
import SignupPage from "./SignupLoginModule/SignupPage";
import LoginPage from "./SignupLoginModule/LoginPage";


const SignupLogin = () =>{
    const [showSignupPage, setShowSignupPage] = useState(false);
    const [showLoginPage, setShowLoginPage] = useState(false);
    return (
        <div className="loginSignup-page">
            
            {showSignupPage ? <SignupPage /> : 
            showLoginPage ? <LoginPage /> :
                <>
                    <button className="login-btn" onClick={() => setShowLoginPage(true)}>Login</button>
                    <button className="signup-btn" onClick={() => setShowSignupPage(true)}>Signup</button>
                </>
            }
        </div>
    )
}

export default SignupLogin;