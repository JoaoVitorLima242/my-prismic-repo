import React from 'react'
import { PrismicRichText } from '@prismicio/react'

import Container from '../../components/Container'
import styles from './about.module.css'
import Image from 'next/image'

/**
 * @typedef {import("@prismicio/client").Content.AboutSlice} AboutSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutSlice>} AboutProps
 * @param { AboutProps }
 */
const About = ({ slice }) => (
  <section className={styles.wrapper}>
    <Container>
      <div className={styles.customTitle}>
        <PrismicRichText field={slice.primary.title} />
        <PrismicRichText field={slice.primary.description} />
      </div>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <div className={styles.imageWrapper}>
          <Image
            src={slice.primary.my_photo.url} 
            alt={slice.primary.my_photo.alt}
            width={400}
            height={400}
          />
          </div>
        </div>
      </div>
    </Container>
  </section>
)

export default About