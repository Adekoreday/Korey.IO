import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Footer from './footer'
import { rhythm, scale } from "../utils/typography"
import Header from '../components/header'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props

    /*if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog/`}
          >
            {title}
          </Link>
        </h3>
      )
    }*/
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(90),
          }}
        >
          <Header/>
          <main>{children}</main>
        </div>
       { (location.pathname === '/') ?
          <Footer>
          © {new Date().getFullYear()}
        </Footer> : <div className="footer__two"> Adeyemi Adekorede  © {new Date().getFullYear()}</div>
       }
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

/*const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`*/

export default Layout
