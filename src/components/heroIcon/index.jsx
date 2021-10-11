import * as React from 'react'
import './index.css'


const HeroIcon = ({img, description, type='inbuilt', ...props}) => {
        return  <div {...props}>
        <div className="hero__imgContainer">
                 <img className="hero__image" src={img} alt={description}></img>
              </div>
              <p className="hero__decription"><b>{description}</b></p>
        </div>

}

export default HeroIcon