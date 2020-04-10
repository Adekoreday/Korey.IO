import React from 'react';
import './index.css';
import Range from '../range';

const Hero = () => {
    return (
        <div>

<div 

data-sal="slide-up"
data-sal-duration="10000"
data-sal-delay="300"
data-sal-easing="easeInBack"

className="hero__layout">
        <div 
        className="hero__container">
            <h1 style={{ color: `#FFFFFF`}}>BACK END</h1>
            <div >
                <div className="range__container"><span className="inline__text">NodeJs</span>
                <Range 
                proficiency={75}
                />
                <span className="medium__text">75%</span>
                </div>
            </div>
            <div >
                <div className="range__container"><span className="inline__text">ASP.NET MVC </span>
                <Range 
                proficiency={70}
                />
                                <span className="medium__text">70%</span>
                </div>
            </div>
            <div >
                <div className="range__container"><span className="inline__text">ASP.NET core</span>
                <Range 
                proficiency={75}
                />
                <span className="medium__text">75%</span>
                </div>
            </div>
            <div>
                <div className="range__container">
                <span className="inline__text">GraphQL</span>
                <Range 
                proficiency={60}
                />
                <span className="medium__text">60%</span>
                </div>
            </div>
        </div>
        <div className="hero__container">
        <h1 style={{ color: `#FFFFFF`}}>FRONT END</h1>
        <div >
                <div className="range__container"><span className="inline__text">React</span>
                <Range 
                proficiency={75}
                />
                <span className="medium__text">75%</span>
                </div>
            </div>
            <div >
                <div className="range__container"><span className="inline__text">Redux </span>
                <Range 
                proficiency={70}
                />
                <span className="medium__text">70%</span>
                </div>
            </div>
            <div>
                <div className="range__container">
                <span className="inline__text">Angular</span>
                <Range 
                proficiency={70}
                />
                <span className="medium__text">70%</span>
                </div>
            </div>
        </div>

        </div>


        <div 
        
data-sal="slide-up"
data-sal-duration="10000"
data-sal-delay="300"
data-sal-easing="easeInBack"
        
        className="hero__layout">
        <div className="hero__container--secondary">
            <h1 style={{ color: `#FFFFFF`}}>TEST</h1>
            <div >
                <div className="range__container"><span className="inline__text">JEST / ENZYME</span>
                <Range 
                proficiency={75}
                />
                <span className="medium__text">75%</span>
                </div>
            </div>
            <div >
                <div className="range__container"><span className="inline__text">MOCHA CHAI </span>
                <Range 
                proficiency={70}
                />
                                <span className="medium__text">70%</span>
                </div>
            </div>
            <div >
                <div className="range__container"><span className="inline__text">NUIT</span>
                <Range 
                proficiency={70}
                />
                <span className="medium__text">70%</span>
                </div>
            </div>
            <div>
                <div className="range__container">
                <span className="inline__text">CI (TRAVIS,AZURE,CIRCLE CI)</span>
                <Range 
                proficiency={70}
                />
                <span className="medium__text">70%</span>
                </div>
            </div>
        </div>
        <div className="hero__container--secondary">
        <h1 style={{ color: `#FFFFFF`}}>DEVOPS</h1>
        <div >
                <div className="range__container"><span className="inline__text">AZURE</span>
                <Range 
                proficiency={90}
                />
                <span className="medium__text">70%</span>
                </div>
            </div>
            <div>
                <div className="range__container">
                <span className="inline__text">HEROKU</span>
                <Range 
                proficiency={70}
                />
                <span className="medium__text">70%</span>
                </div>
            </div>
            <div>
                <div className="range__container">
                <span className="inline__text">DOCKER</span>
                <Range 
                proficiency={70}
                />
                <span className="medium__text">70%</span>
                </div>
            </div>
            
        </div>

        </div>



        </div>
       
    );
};

export default Hero;