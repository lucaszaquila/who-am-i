import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Navbar from "../components/Navbar.jsx";
import '../styles/global.css';

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  console.log(data);

  return (
    <div className="m-auto max-w-[500px]">
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <Navbar />
        <main>
            <h1 className="text-violet-900 text-2xl font-bold">{pageTitle}</h1>
            {children}
        </main>
    </div>
  )
}

export default Layout;