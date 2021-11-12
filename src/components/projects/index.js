import React from 'react';
import Card from '../cards';
import './index.css';

const projects = () => {
    return (
        <div className="projects__container">
            <h1 className="projects__header">PROJECTS</h1>
            <div className="card__container">
                <Card
                img="https://res.cloudinary.com/kaytronics/image/upload/c_scale,h_821,q_24/v1586213278/portfolio_gy1pgl.png"
                link="#"
                title="PORTFOLIO"
                repo="#"
                details="This project contains my portfolio and blog(progress) built with react (gatsby)"
                ></Card>
<Card
                img="https://res.cloudinary.com/kaytronics/image/upload/v1636702019/Screenshot_2021-11-12_at_08.26.53_c6nan4.png"
                link="#"
                title="GIT PAY"
                repo="https://gitpay.me"
                details="A platform that allows bounties for issues on demand. Be rewarded by learning, using Git workflow and continuous integration"
                ></Card>
                <Card
                img="https://res.cloudinary.com/kaytronics/image/upload/v1636701804/Screenshot_2021-11-12_at_08.23.16_kvrljt.png"
                link="#"
                title="MindRight"
                repo="https://www.mindright.io"
                details="Culturally-responsive, daily coaching over text message for people who want to talk, judgment free platform"
                ></Card>

<Card
                img="https://res.cloudinary.com/kaytronics/image/upload/v1636702175/Screenshot_2021-11-12_at_08.29.27_emkrz1.png"
                link="#"
                title="DataField Consulting"
                repo="https://www.datafieldconsulting.com"
                details="business insights and analytics platform"
                ></Card>


<Card
                img="https://res.cloudinary.com/kaytronics/image/upload/v1636702354/Screenshot_2021-11-12_at_08.32.26_lrhbpf.png"
                link="#"
                title="Startup Lagos"
                repo="https://www.startuplagos.net"
                details="A platform that connects all stakeholders in Africa's Tech space"
                ></Card>

                <Card
                img="https://res.cloudinary.com/kaytronics/image/upload/c_scale,h_777/v1586213286/vlogin_epcjj4.png"
                link="#"
                title="VLOGIN"
                repo="http://vlogin-staging.azurewebsites.net/"
                details="An enterprise visitor management solution"
                ></Card>
            </div>
        </div>
    );
};

export default projects;