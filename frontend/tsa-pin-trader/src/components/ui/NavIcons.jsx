import { useState, useEffect } from "react";

/* CSS Imports */
import "./NavIcons.css";

export function NavIcons() {
    //Update the amount of items in the cart and any new notifications in the navbar
    const [cartAmount, setCartAmount] = useState([]);
    const [notificationAmount, setNotificationAmount] = useState([]);

    useEffect(() => {
        async function getNavAmounts() {
            const user = localStorage.getItem("user");
            // const response = await fetch('https://software-23-24.onrender.com/getNavAmounts', { //for deployment
            const response = await fetch("http://localhost:3000/getNavAmounts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ user: user }),
            });

            const result = await response.json();
            setCartAmount(result.cart);
            setNotificationAmount(result.notification);
        }

        getNavAmounts();
    }, []);
    return (
        <div className="nav-icons">
            <div className="shop-cart">
                <div className="icon-box">
                    <i className='bx bx-cart'></i>
                </div>
                {cartAmount > 0 && <span className="icon-badge">{cartAmount}</span>}
            </div>
            <div className="notification-bell">
                <div className="icon-box">
                    <i className='bx bx-bell'></i>
                </div>
                {notificationAmount > 0 && <span className="icon-badge">{notificationAmount}</span>}
            </div>
            <div className="profile">
                <i className='bx bx-user'></i>
            </div>
        </div>
    );
}

export default NavIcons