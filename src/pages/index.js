import * as React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Fold from '../components/fold';
// import Fold2 from '../components/fold2';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Fold />
    {/* <Fold2 /> */}
    <StaticImage
      src={'../images/gatsby-astronaut.png'}
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to={'/page-2/'}>Go to page 2</Link> <br />
      <Link to={'/using-typescript/'}>Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
