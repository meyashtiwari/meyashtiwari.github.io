import * as React from "react"
import Layout from "../components/layouts/DefaultLayout"
import Home from "../components/Home";

const IndexPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default IndexPage

export const Head = () => <title>Yash Tiwari | Portfolio</title>
