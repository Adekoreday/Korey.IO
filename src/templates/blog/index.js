import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import DateImg from '../../img/svg/date.svg'
import Bio from "../../components/bio"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { rhythm, scale } from "../../utils/typography"
import './index.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div className="list__container">
        <div className="post__header">{post.frontmatter.title}</div>
         <div className="icon__container"><img className="date__icon" src={DateImg} alt=""/><div><small >{post.frontmatter.date}</small></div></div>
         <div className="page__content">
        <MDXRenderer>{post.body}</MDXRenderer>
        </div>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
