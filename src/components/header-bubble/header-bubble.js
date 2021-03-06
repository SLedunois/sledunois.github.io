/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import "./header-bubble.css"

const HeaderBubble = ({ children }) => {
  return <div className="bubble mb-20 pt-12">{children}</div>
}

export default HeaderBubble
