import React from "react"
import { graphql } from "gatsby"
import './index.css'
import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <div className="notfound__container">
          <h1 className="notfound__header">Not Found</h1>
          <p className="notfound">
            You just hit a route that doesn&#39;t exist... the sadness &#128549;
          </p>
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
