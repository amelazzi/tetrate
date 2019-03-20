/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Header from "../header"
import Footer from '../footer'
import GlobalStyles from '../../styles/globalStyles'


const ChildContainer = styled.div`
    width: 100%;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header />
        <ChildContainer>
            <main>{children}</main>
        </ChildContainer>
        <Footer/>
        <GlobalStyles/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
