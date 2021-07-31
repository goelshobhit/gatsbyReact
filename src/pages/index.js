import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Fold from "../components/fold"
import Fold2 from "../components/fold2"
import Fold3 from "../components/fold3"
import Fold4 from "../components/fold4"
import Fold5 from "../components/fold5"
import Fold6 from "../components/fold6"
import Fold7 from "../components/fold7"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Fold />
    <Fold2 />
    <Fold3 />
    <Fold4 />
    <Fold5 />
    <Fold6 />
    <Fold7 />
  </Layout>
)

export default IndexPage
