import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='bg-blue-900 text-white p-5'>
            <div className="fullNav flex justify-between container mx-auto">
                <div className="logo">Logo</div>
                <div className="navLinks">
                    <ul className='flex gap-5'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;