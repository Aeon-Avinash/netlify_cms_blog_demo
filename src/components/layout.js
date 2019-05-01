import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <React.Fragment>
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
              cursor: "pointer",
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
          <h6
            style={{
              ...scale(0.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
              cursor: "pointer",
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/contact`}
            >
              Contact Us
            </Link>
          </h6>
        </React.Fragment>
      )
    } else {
      header = (
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <h3
            style={{
              fontFamily: `Montserrat, sans-serif`,
              marginTop: 0,
              cursor: "pointer",
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h3>
          <h3
            style={{
              fontFamily: `Montserrat, sans-serif`,
              marginTop: 0,
              cursor: "pointer",
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/contact`}
            >
              Contact Us
            </Link>
          </h3>
        </div>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          {` `}
          <Link to='/contact'>Contact us with your queries</Link>
        </footer>
      </div>
    )
  }
}

export default Layout
