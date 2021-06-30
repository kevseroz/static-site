

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} 
        
      />
      <div className="container" id="content">
        <main>{children}</main>
        <Footer />
        <footer>

          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.linkedin.com/in/kevser-%C3%B6zkan-3548021a7/">KevserOzkan</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

