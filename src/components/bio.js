/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
            <GatsbyImage
              image={image}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width: "5rem",
                height: "5rem",
                borderRadius: `50%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <SubContainer>
              <div>
                Written by <strong>{author}</strong>
              </div>
              <a href={`https://twitter.com/${social.twitter}`}>
                You can follow him on Twitter
              </a>
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
  display: flex;
`
const SubContainer = styled.div`
display: flex;
flex-direction: column;
`
export default Bio
