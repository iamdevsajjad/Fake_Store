import React, { useState } from 'react';
import Home from '../../Pages/Home/Home';
import Navbar from './Navbar';

const Layout = () => {
    const [count, setCount] = useState(0);
    const newCount = () => {
        setCount(count+1);
    }
    return (
        <div>
            <Navbar count = {count} newCount = {newCount}/>
            <Home newCount = {newCount} />
        </div>
    );
};

export default Layout;