import React from 'react';
import HeroIcon from '../heroIcon'
import JsImg from '../../img/svg/heroIcon/js.svg'
import TsImg from "../../img/svg/heroIcon/ts.svg"
import NodeImg from "../../img/svg/heroIcon/node.svg"
import CSharp from "../../img/svg/heroIcon/csharp.svg"
import DotNetImg from "../../img/svg/heroIcon/dotnetcore.svg"
import MongodbImg from "../../img/svg/heroIcon/mongodb.svg"
import PostgresImg from "../../img/svg/heroIcon/postgres.svg"
import MySQLImg from "../../img/svg/heroIcon/mysql.svg"
import ReactImg from "../../img/svg/heroIcon/react.svg"
import AngularImg from "../../img/svg/heroIcon/angular.svg"
import ReduxImg from "../../img/svg/heroIcon/redux.svg"
import GraphQLmg from "../../img/svg/heroIcon/graphql.svg"
import HTML5Img from "../../img/svg/heroIcon/html5.svg"
import CSS5Img from "../../img/svg/heroIcon/css.svg"
import SCSSImg from "../../img/svg/heroIcon/scss.svg"
import JESTImg from "../../img/svg/heroIcon/jest.svg"
import MochaImg from "../../img/svg/heroIcon/mocha.svg"
import ChaiImg from "../../img/svg/heroIcon/chai.svg"
import NunitImg from "../../img/svg/heroIcon/nunit.svg"
import RTLImg from "../../img/svg/heroIcon/rtl.svg"
import TravisImg from "../../img/svg/heroIcon/travis.svg"
import CoverAllImg from "../../img/svg/heroIcon/coverall.svg"
import CircleCI from "../../img/svg/heroIcon/circleci.svg"
import KubernetesImg from "../../img/svg/heroIcon/kubernetes.svg"
import DockerImg from "../../img/svg/heroIcon/docker.svg"
import ShellImg from "../../img/svg/heroIcon/shell.svg"
import AWSImg from "../../img/svg/heroIcon/aws.svg"
import WebPack from "../../img/svg/heroIcon/webpack.svg"
import Azure from "../../img/svg/heroIcon/azure.svg"
import GCPImg from "../../img/svg/heroIcon/gcp.svg"
import HerokuImg from "../../img/svg/heroIcon/heroku.svg"
import HelmImg from "../../img/svg/heroIcon/helm.svg"
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
          className="hero__layout"
        >
          <div className="hero__container">
            <h1 style={{ color: `#FFFFFF` }}>BACK END</h1>
            <div>
              <div className="range__container">
                <HeroIcon
                  img={JsImg}
                  description="Javascript"
                />
                <HeroIcon img={TsImg} description="Typescript" />
                <HeroIcon
                  img={CSharp}
                  description="Csharp"
                />
                <HeroIcon
                  img={NodeImg}
                  description="Nodejs"
                />
              </div>
            </div>
            <div>
              <div className="range__container">
                <HeroIcon img={DotNetImg} description="Dotnet Core" />
                <HeroIcon img={MongodbImg} description="MongoDB" />
                <HeroIcon img={PostgresImg} description="PostgresDB" />
                <HeroIcon img={MySQLImg} description="MYSQL" />
              </div>
            </div>
          </div>
          <div className="hero__container">
            <h1 style={{ color: `#FFFFFF` }}>FRONT END</h1>
            <div className="range__container">
              <HeroIcon img={ReactImg} description="React" />
              <HeroIcon img={AngularImg} description="Angular" />
              <HeroIcon img={ReduxImg} description="Redux" />
              <HeroIcon img={GraphQLmg} description="GraphQL" />
            </div>
            <div className="range__container">
              <HeroIcon img={WebPack} description="WebPack" />
              <HeroIcon img={HTML5Img} description="HTML" />
              <HeroIcon img={CSS5Img} description="CSS" />
              <HeroIcon img={SCSSImg} description="SCSS" />
            </div>
          </div>
        </div>

        <div
          data-sal="slide-up"
          data-sal-duration="10000"
          data-sal-delay="300"
          data-sal-easing="easeInBack"
          className="hero__layout"
        >
          <div className="hero__container--secondary">
            <h1 style={{ color: `#FFFFFF` }}>TEST</h1>
            <div className="range__container">
              <HeroIcon img={JESTImg} description="Jest" />
              <HeroIcon img={MochaImg} description="Mocha" />
              <HeroIcon img={ChaiImg} description="Chai" />
              <HeroIcon img={NunitImg} description="Nunit" />
            </div>
            <div className="range__container">
              <HeroIcon img={RTLImg} description="RTL" />
              <HeroIcon img={CoverAllImg} description="CoverALLS" />
              <HeroIcon img={TravisImg} description="Travis CI" />
              <HeroIcon img={CircleCI} description="Circle CI" />
            </div>
          </div>
          <div className="hero__container--secondary">
            <h1 style={{ color: `#FFFFFF` }}>DEVOPS</h1>
            <div className="range__container">
              <HeroIcon img={KubernetesImg} description="Kubernetes" />
              <HeroIcon img={HelmImg} description="Helm Charts" />
              <HeroIcon img={DockerImg} description="Docker" />
              <HeroIcon img={ShellImg} description="Shell Script" />
            </div>
            <div className="range__container">
              <HeroIcon img={Azure} description="Azure" />
              <HeroIcon img={GCPImg} description="GCP" />
              <HeroIcon img={HerokuImg} description="Heroku" />
              <HeroIcon img={AWSImg} description="Aws" />
            </div>
          </div>
        </div>
      </div>
    )
};

export default Hero;
