import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../layout/layout"
import Header from "../header/header"
import Toc from "../toc/toc"
import PostHeader from "../post-header/post-header"
import DesignSystem from "../design-system/design-system"

const Post = ({ location, data }) => {
  const { tableOfContents, headings, body, frontmatter } = data.mdx
  return (
    <Layout location={location}>
      <Header />
      <PostHeader
        title={frontmatter.title}
        description={frontmatter.description}
      />
      <Toc headings={tableOfContents.items} />
      <div className="post-content">
        <MDXProvider components={DesignSystem}>
          <MDXRenderer headings={headings}>{body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { path: { eq: $slug } }) {
      body
      frontmatter {
        title
        description
        date(fromNow: true)
      }
      headings {
        value
      }
      tableOfContents
    }
  }
`

export default Post
