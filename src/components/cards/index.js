import React from 'react';
import './index.css';
import GhImg from '../../img/svg/ghImg.svg'

const Card = (props) => {
    const {img, title, link, details, repo} = props
    return (
        <div 
        data-sal="slide-up"
        data-sal-duration="10000"
        data-sal-delay="300"
        data-sal-easing="easeInBack"
        className="card">
            <div className="card__imgContainer">
            <img className="card__img" src={img}></img>
            </div>
            <div className="card__content">
                <div className="card__title">{title}</div>
                <div className="card__details">
                    {details}
                </div>
                <a className="link" href={repo}><img src={GhImg}></img></a>
            </div>

        </div>
    );
};

export default Card;