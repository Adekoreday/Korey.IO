import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main/main"
import Hero from "../components/hero"
import Projects from "../components/projects"
import Footer from '../components/footer'

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `dotnet`, `c#`]}
        />
      <Main />
      <Hero />
      <Projects />
      </Layout>
    )
  }
}

export default IndexPage
