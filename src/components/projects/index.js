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
                img="https://res.cloudinary.com/kaytronics/image/upload/v1609112666/Screenshot_2020-12-28_at_00.43.41_neuzy7.png"
                link="#"
                title="STARTUP LAGOS"
                repo="https://startuplagos.net"
                details="A platform that connects all stakeholders in Africa's Tech space"
                ></Card>
                <Card
                img="https://res.cloudinary.com/kaytronics/image/upload/v1609113209/Screenshot_2020-12-28_at_00.53.04_aip5l7.png"
                link="#"
                title="BLOSSOM"
                repo="https://www.blossom.vc"
                details="A venture capital deal sourcing intelligence platform"
                ></Card>

<Card
                img="https://res.cloudinary.com/kaytronics/image/upload/c_scale,h_872,q_21/v1586213274/banka_e3m9bv.png"
                link="#"
                title="BANKA"
                repo="https://banka-reactjs.herokuapp.com/"
                details="banking app for medium/small scale banking operations"
                ></Card>

                <Card
                img="https://res.cloudinary.com/kaytronics/image/upload/c_scale,h_777/v1586213286/vlogin_epcjj4.png"
                link="#"
                title="VLOGIN"
                repo="http://vlogin-staging.azurewebsites.net/"
                details="An enterprise visitor management solution"
                ></Card>

                <Card
                img="https://res.cloudinary.com/kaytronics/image/upload/c_scale,h_747,q_29/v1586213274/mint_knaezl.png"
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