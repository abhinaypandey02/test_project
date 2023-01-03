import React from 'react'

import imageUrlBuilder from '@sanity/image-url'

import client from '../../../client'
import Text from '../../atoms/Text'
function urlFor(source: string) {
  return imageUrlBuilder(client).image(source)
}
export default function BenefitCard({
  title,
  description,
  image,
}: {
  title: string
  description: string
  image: string
}) {
  return (
    <div
      key={title}
      className={
        'rounded-2xl bg-white px-4 py-6 text-center shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 md:py-12'
      }
    >
      <div className={'flex  items-center justify-center'}>
        <img className={'w-3/4'} width={300} src={urlFor(image).url()} alt={`picture`} />
      </div>

      <div className={'pt-4 text-[rgb(10,10,35)] md:pt-10'}>
        <div className={'mb-3 md:mb-7'}>
          <Text text={title} variant={'s2'} />
        </div>
        <div>
          <Text text={description} variant={'l3'} />
        </div>
      </div>
    </div>
  )
}
