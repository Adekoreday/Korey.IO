import React from 'react';
import './index.css'
import GithubImg from '../../img/svg/github.svg';
import LinkedImg from '../../img/svg/linkedin.svg';
import TwitterImg from '../../img/svg/twitter.svg';

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="footer__icons">
                <a className="footer__link" href="https://www.linkedin.com/in/adeyemi-adekorede/">
                <img className="footer_icon" src={LinkedImg} alt="linkedin icon"></img>
                </a>
                <a className="footer__link" href="https://twitter.com/AdeyemiAdekore2">
                <img className="footer_icon" src={TwitterImg} alt="twitter icon"></img>
                </a>
                <a className="footer__link" href="http://github.com/Adekoreday">
                <img className="footer_icon" src={GithubImg} alt="github icon"></img>
                </a>
            </div>
            <div style={{color: "#FFFFFF"}}>{props.children}</div>

        </div>
    );
};

export default Footer;