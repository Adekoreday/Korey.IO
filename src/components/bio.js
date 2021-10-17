/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import GithubImg from "../img/svg/github.svg"
import LinkedImg from "../img/svg/linkedin.svg"
import TwitterImg from "../img/svg/twitter.svg"

import styled from "styled-components"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
         const image = getImage(data.avatar)
        return (
          <Container>
              <div>
                <GatsbyImage
                  image={image}
                  alt={author}
                  style={{
                    marginRight: rhythm(1 / 2),
                    marginBottom: 0,
                    width: "6rem",
                    height: "6rem",
                    borderRadius: `50%`,
                  }}
                  imgStyle={{
                    borderRadius: `50%`,
                  }}
                />
              </div>
              <SubContainer>
                <Header>
                  <strong>{author}</strong>
                </Header>
                {/* <a href={`https://twitter.com/${social.twitter}`}>
                  You can follow him on Twitter
                </a> */}
                <Content>
                  I'm passionate about technology and currently work remotely from Lagos
                  (Nigeria) as a software engineer at MindRight Health (New
                  jersey, USA). You can support my work or reach out by
                  connecting with me.
                  <IconContainer>
                    <a
                      className="footer__link"
                      href="https://www.linkedin.com/in/adeyemi-adekorede/"
                    >
                      <IconImg src={LinkedImg} alt="linkedin icon"></IconImg>
                    </a>
                    <a
                      className="footer__link"
                      href="https://twitter.com/AdeyemiAdekore2"
                    >
                      <IconImg src={TwitterImg} alt="twitter icon"></IconImg>
                    </a>
                    <a
                      className="footer__link"
                      href="http://github.com/Adekoreday"
                    >
                      <IconImg src={GithubImg} alt="github icon"></IconImg>
                    </a>
                  </IconContainer>
                </Content>
              </SubContainer>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
          gatsbyImageData(layout: FIXED)
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

const Container = styled.div`
  width: 50%;
  background-color: #5a4e88;
  margin: 10rem 0rem;
  border-radius: 1rem;
  padding: 1rem 2rem;
  display: flex;
  color: #ffffff;
  @media (max-width: 768px) {
    width: 100%;
  }
`
const SubContainer = styled.div`
  display: block;
`

const Header = styled.div`
  font-size: 1.5rem
`
const Content = styled.div`
  font-size: 1rem
  display: block;
`

const IconImg = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: .5rem;
  margin-top: .5rem;
  margin-bottom: 0 !important;
` 

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`
export default Bio
