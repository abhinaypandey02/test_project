import React from 'react'

import imageUrlBuilder from '@sanity/image-url'

import client from '../../../client'
import Button from '../../atoms/Button'
import Container from '../../atoms/Container'
import Text from '../../atoms/Text'
import Wrapper from '../../atoms/Wrapper'
function urlFor(source: string) {
  return imageUrlBuilder(client).image(source)
}
export default function HomeFeatures({
  features,
}: {
  features: { title: string; description: string; image: string }[]
}) {
  return (
    <Wrapper>
      <Container className={'py-20'}>
        {features.map((feature, i) => (
          <div
            key={feature.title}
            className={
              'flex justify-center gap-10 ' + (i % 2 !== 0 ? 'flex-row-reverse' : 'flex-row')
            }
          >
            <div className={'flex w-1/2 items-center justify-center'}>
              <img
                className={'w-3/4'}
                width={300}
                src={urlFor(feature.image).url()}
                alt={`picture`}
              />
            </div>

            <div className={'pt-10 text-[rgb(10,10,35)] md:w-1/2'}>
              <div className={'mb-7'}>
                <Text text={feature.title} variant={'h2'} />
              </div>
              <div>
                <Text text={feature.description} variant={'l3'} />
              </div>
            </div>
          </div>
        ))}
      </Container>
    </Wrapper>
  )
}
