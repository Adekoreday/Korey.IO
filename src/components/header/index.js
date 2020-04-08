import React from 'react';
import { Link } from "gatsby";
import './index.css';

const Header = () => {
    return (
        <div className="header">
            <Link to={'/'}><div className="header_item">KOREY.IO</div></Link>
            <div className="heaer__details">
            <Link to={'/blog'}><div className="header_item">BLOG</div></Link>
            <Link to={'/'}><div  className="header_item">ABOUT</div></Link>
            </div>
        </div>

    );
};

export default Header;