import React from 'react';
import bgSvg from '../../img/svg/circularbg1.svg';
import smBgSvg from '../../img/svg/smallbg.svg';
import mdSvg from '../../img/svg/mediumbg.svg';
import semiCircleSvg from '../../img/svg/semiCirclebg.svg';
import profileSvg from '../../img/svg/profileContainer.svg';

import './index.css';


const Main = () => {
    return (

        <div className="main__container" 
        >
            <div className="main__bg">
            <div 
                    data-sal="slide-right"
                    data-sal-delay="30"
                    data-sal-duration="100000"
                    data-sal-easing="easeInBack"
            className="bg__logo">
            <img className="main__content" src={bgSvg} alt="bg-logo" />
            <img className="main__profile" src={profileSvg} alt="bg-logo" />
            <div className="text__container">
            <div className="profile__text">Adeyemi</div>
            <div className="profile__text">Adekorede</div>
            <div className="profile__subtext">Software Engineer</div>
            </div>
            </div>
            <img className="smaller__bg" src={smBgSvg} alt="bg-logo" />
            <img className="medium__bg"  src={mdSvg} alt="bg-logo" />
            </div>
            <img className="side__img" src={semiCircleSvg} alt="bg-logo" />
        </div>
    );
};

export default Main;