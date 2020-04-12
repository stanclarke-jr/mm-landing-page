import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import ThanksHeader from "../components/sections/ThanksHeader"

const ThankYou = () => (
  <Layout>
    <SEO title="Thank you!" />
    <Navigation />
    <ThanksHeader />
  </Layout>
)

export default ThankYou
