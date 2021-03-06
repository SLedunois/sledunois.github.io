import React from "react"
import { graphql } from "gatsby"

import HeaderBubble from "../components/header-bubble/header-bubble"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Description from "../components/description/description"
import Article from "../components/article/article"

const IndexPage = ({ data, location }) => (
  <div className="w-full overflow-x-hidden">
    <HeaderBubble>
      <Layout location={location}>
        <SEO title="Home" />
        <Description />
      </Layout>
    </HeaderBubble>
    <div className="layout container mx-auto text-black pt-4 mb-8">
      {data.allMdx.nodes.map(node => (
        <Article
          key={node.id}
          title={node.frontmatter.title}
          description={node.frontmatter.description}
          timeToRead={node.timeToRead}
          technologies={node.frontmatter.technologies}
          path={node.frontmatter.path}
        />
      ))}
    </div>
  </div>
)

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        frontmatter {
          title
          date
          path
          description
          technologies
        }
        timeToRead
        id
      }
    }
  }
`

export default IndexPage
