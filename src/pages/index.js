import * as React from "react"
import * as styles from "../components/index.module.css"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      {/* <p className={styles.intro}>
        <b>Precious Jewellery</b>
        <br />
      </p> */}
      <StaticImage
        src="../images/full-page.jpeg"
        loading="eager"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
    </div>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
