import React from 'react'
import { PrismicRichText } from '@prismicio/react'

import Container from '../../components/Container'
import { FaHouseUser } from "react-icons/fa"

import styles from './about.module.css'

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
          <img
            src={slice.primary.my_photo.url} 
            alt={slice.primary.my_photo.alt}
          />
          </div>
          <div className={styles.info}>
            <div className={styles.line}>
              <div className={styles.ball} />
            </div>
            <div>
              <div className='d-flex flex-column'>
                <PrismicRichText field={slice.primary.my_name} />
                <div className={styles.locationWrapper}>
                  <p><FaHouseUser/> </p><PrismicRichText field={slice.primary.my_location} />
                </div>
              </div>
              <PrismicRichText field={slice.primary.my_about_text} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
)

export default About