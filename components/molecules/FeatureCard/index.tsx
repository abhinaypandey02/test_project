import React from 'react'

import imageUrlBuilder from '@sanity/image-url'

import client from '../../../client'
import Text from '../../atoms/Text'
function urlFor(source: string) {
  return imageUrlBuilder(client).image(source)
}
export default function FeatureCard({
  title,
  description,
  image,
  even,
}: {
  title: string
  description: string
  image: string
  even: boolean
}) {
  return (
    <div
      key={title}
      className={
        'mb-10 flex flex-wrap justify-center text-center md:flex-nowrap md:gap-10 md:text-start ' +
        (!even ? 'md:flex-row-reverse' : 'flex-row')
      }
    >
      <div className={'flex w-1/2 items-center justify-center'}>
        <img className={'w-3/4'} width={300} src={urlFor(image).url()} alt={`picture`} />
      </div>

      <div className={'text-[rgb(10,10,35)] md:w-1/2 md:pt-10'}>
        <div className={'md:mb-7'}>
          <Text text={title} variant={'h2'} />
        </div>
        <div>
          <Text text={description} variant={'l3'} />
        </div>
      </div>
    </div>
  )
}
