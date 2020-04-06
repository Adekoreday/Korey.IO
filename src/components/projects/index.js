import React from 'react';
import Card from '../cards';
import './index.css';
import PortfolioImg from '../../img/pic/portfolio.png';
import BankaImg from '../../img/pic/banka.png';
import VloginImg from '../../img/pic/vlogin.png';
import IEventImg from '../../img/pic/eventApp.png';
import MintDashBoardImg from '../../img/pic/mint.png'

const projects = () => {
    return (
        <div className="projects__container">
            <h1 className="projects__header">PROJECTS</h1>
            <div className="card__container">
                <Card
                img={PortfolioImg}
                link="#"
                title="PORTFOLIO"
                repo="https://github.com/Adekoreday/MyBlog-koreythoughts-"
                details="This project contains my portfolio and blog(progress) built with react (gatsby)"
                ></Card>

                <Card
                img={BankaImg}
                link="#"
                title="BANKA"
                repo="https://github.com/Adekoreday/Banka-React"
                details="A banking application that supports medium/small scale banking operations"
                ></Card>

                <Card
                img={VloginImg}
                link="#"
                title="VLOGIN"
                repo="#"
                details="An enterprise visitor management solution"
                ></Card>

<Card
                img={IEventImg}
                link="#"
                title="EVENT"
                repo="https://github.com/Adekoreday/IEvent"
                details="A template for consuming open source event Booking API written by me"
                ></Card>

                <Card
                img={MintDashBoardImg}
                link="#"
                title="MINT DASHBOARD"
                repo="https://github.com/Adekoreday/BANKWITHMINT"
                details="A dashboard template developed with react"
                ></Card>
            </div>
        </div>
    );
};

export default projects;