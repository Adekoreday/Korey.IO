import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../../components/bio"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Tag from "../../components/tag"
import DateImg from '../../img/svg/date.svg'
import './index.css'


class Blog extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    const { currentPage, numPages } = pageContext;
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? 'blog/' : `blog/${(currentPage - 1).toString()}`
    const nextPage = `blog/${(currentPage + 1).toString()}`


    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div className="list__container">
        <div className="list__content">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            const tag = node.frontmatter.tags
            return (
              <div className="post__content" key={node.fields.slug}>
                <div className="list__main">
                <Link
                    style={{ boxShadow: `none` }}
                    to={`${node.fields.slug}`}
                  >
                <div className="post__title">

                    {title}
                </div>
                <div
                className="post__details"
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
                  <div className="icon__container"><img className="date__icon" src={DateImg} alt=""/><div><small >{node.frontmatter.date}</small></div></div>
                  </Link>
                </div>
                <Link to={`/tags/${tag[0]}`}><div>{tag !== null && <ul>{<Tag name={tag[0]} />}</ul>}</div></Link>
              </div>
            )
          })}
        </div>

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            listStyle: 'none',
            padding: 0,
          }}
        >
          {!isFirst && (
            <Link to={prevPage} rel="prev">
              <div className="navigation__link">← Newer Posts</div>
            </Link>
          )}
          {!isLast && (
            <Link to={nextPage} rel="next">
             <div className="navigation__link">Older Post →</div> 
            </Link>
          )}
        </ul>
        </div>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: $limit, skip: $skip, sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`

/*
export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`*/

//OLD QUERY
/*
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx( sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`*/