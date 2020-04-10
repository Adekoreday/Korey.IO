const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog/index.js`);
  const tagTemplate = path.resolve(`./src/templates/tag/tags.js`);
  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        tagsGroup: allMdx(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMdx.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `${post.node.fields.slug}`,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

        // Create blog post list pages
        const postsPerPage = 3;
        const numPages = Math.ceil(posts.length / postsPerPage);
        const tags = result.data.tagsGroup.group
    
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `blog/` : `blog/${i + 1}`,
            component: path.resolve('./src/templates/blog-list/index.js'),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1
            },
          });
        });

      tags.forEach(tag => {
        createPage({
          path: `/tags/${tag.fieldValue}/`,
          component:  path.resolve('./src/templates/tag/index.js'),
          context: {
            tag: tag.fieldValue,
          },
        })
      })
        return null;
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}


