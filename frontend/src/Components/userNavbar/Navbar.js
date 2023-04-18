import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navigation.css'

const Navbar = () => {

    const [Navbar, setNavbar] = useState(false)

    return ( 
        <section className="navbar">

            <ul className={Navbar ? "nav-links" : "nav"}
            onClick={() => setNavbar(false)}>

                <Link to='/' className="home">
                <li>CashFlow</li>
                </Link>

                <Link to='/wallet' className="wallet">
                <li>Wallet</li>
                </Link>

                <Link to='/send' className="send">
                <li>Send</li>
                </Link>

                <Link to='/withdraw' className="withdraw">
                <li>Withdraw</li>
                </Link>

                <Link to='transactions' className="transactions">
                <li>Transactions</li>
                </Link>

                <Link to='profile' className="profile">
                <li>Profile</li>
                </Link>

                <Link>
                <li>Log out</li>
                </Link>
            </ul>
        </section>
     );
}
 
export default Navbar;