/* React Imports */
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

/* CSS Imports */
import "./Login.css";

/* Component Imports */

export function Login() {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const username = localStorage.getItem("user");
        if (username) {
            setLoggedIn(true);
        }
    }, []);

    if (loggedIn) {
        Navigate("/home");
    }
    else {
        const [action, setAction] = useState("Sign Up");

        return (
            <div className="container">
                <div className="header">
                    <div className="text" onClick={Navigate("/home")}>{action}</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    {(action === "Login" || action === "Forgot Password") ? <></> : <div className="input">
                        <i className='bx bx-user' ></i>
                        <input type="text" placeholder="Username" required />
                    </div>}

                    <div className="input">
                        <i className='bx bx-envelope' ></i>
                        <input type="email" placeholder="Email" required />
                    </div>
                    {action === "Forgot Password" ? <></> : <div className="input">
                        <i className='bx bx-key' ></i>
                        <input type="password" placeholder="Password" required />
                    </div>}


                </div>
                {action === "Login" ? <div className="forgot-password">Forgot Password?&nbsp;<span onClick={() => setAction("Forgot Password")}>Click Here!</span></div> : <></>}

                <div className="submit-container">
                    {action === "Forgot Password" ? <></> :
                        <>
                            <div className={(action === "Login" ? "submit gray" : "submit")} onClick={() => setAction("Sign Up")}>Sign Up</div>
                            <div className={action === "Login" ? "submit" : "submit gray"} onClick={() => setAction("Login")}>Login</div>
                        </>
                    }

                    <div className={(action === "Forgot Password") ? "submit" : "submit none"} onclick={() => sendVerification()}>Send Email</div>
                </div>

                {action === "Forgot Password" ?
                    <span className="returnLogin" onClick={() => setAction("Login")}><i class='bx bx-arrow-back'></i>&nbsp;Return to Login</span>
                    : <></>}
            </div>
        );
    }
}

export default Login
