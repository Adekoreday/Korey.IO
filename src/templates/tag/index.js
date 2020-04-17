import React from "react"
import PropTypes from "prop-types"
import DateImg from '../../img/svg/date.svg'
import Layout from "../../components/layout"
import SEO from "../../components/seo"

// Components
import { Link, graphql } from "gatsby"
const Tags = ({ data, location }) => {
  const { edges, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  }`
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
            <SEO title="blogs tags"/>
    <div className="list__container">
      <h1>{tagHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title, date, description } = node.frontmatter
          return (
            <div className="post__content" key={slug}>
              <div className="list__main">
              <Link to={slug}>
              <div className="post__title">
                {title}
            </div>
            <div
                className="post__details"
                  dangerouslySetInnerHTML={{
                    __html: description || node.excerpt,
                  }}
                />
             <div className="icon__container"><img className="date__icon" src={DateImg} alt=""/><div><small >{node.frontmatter.date}</small></div></div>
            </Link>
            </div>
          </div>
          )
        })}
      </ul>
      <div className="navigation__link"><Link to="/tags">All tags</Link></div>
    </div>
    </Layout>
  )
}
Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}
export default Tags
export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
          }
        }
      }
    }
  }
`