import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.WelcomeSlice} WelcomeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WelcomeSlice>} WelcomeProps
 * @param { WelcomeProps }
 */
const Welcome = ({ slice }) => (
  <section className='welcome wrapper'>
    <div className='content'>
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.description} />
    </div>
  </section>
)

export default Welcome