import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import Header404 from "../components/sections/Header404"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Navigation />
    <Header404 />
    <Features />
    <GetStarted />
    <Footer />
  </Layout>
)

export default NotFoundPage
