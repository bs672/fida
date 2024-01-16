import * as React from "react"
import * as styles from "../components/index.module.css"
import { StaticImage } from "gatsby-plugin-image"
import * as contactStyles from '../components/ContactInfo.module.css'; // CSS module for styling

import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactInfo from "../components/ContactInfo"

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
      <div className={contactStyles.contactContainer}>
        <div className={contactStyles.contactEmail}>fidawithus@gmail.com</div>
        <div className={contactStyles.contactNames}>
          <div>Pawan Sabharwal: +919810000737</div>
          <div>Ishira Goel: +91 99100 17567</div>
        </div>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
