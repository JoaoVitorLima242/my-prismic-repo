import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import styles from './welcome.module.css'

/**
 * @typedef {import("@prismicio/client").Content.WelcomeSlice} WelcomeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WelcomeSlice>} WelcomeProps
 * @param { WelcomeProps }
 */
const Welcome = ({ slice }) => (
  <section className={styles.welcomeWrapper}>
    <div className={styles.welcomeContent}>
      <PrismicRichText field={slice.primary.title} />
      <div className={styles.tech}>
        <PrismicRichText field={slice.primary.description} />
      </div>
    </div>
  </section>
)

export default Welcome