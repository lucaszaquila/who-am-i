import * as React from "react";
import Presentation from "../components/Presentation.jsx";
import Layout from "../components/Layout.jsx";


const IndexPage = () => {
  return (
    <>
      <Layout pageTitle="Inicio">
        <Presentation />
      </Layout>
    </>
  )
}

export default IndexPage
