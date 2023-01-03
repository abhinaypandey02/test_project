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
export default function HomeBenefits({
  benefits,
}: {
  benefits: { title: string; description: string; image: string }[]
}) {
  console.log(benefits)
  return (
    <Wrapper className={'bg-[#f9f8f2]'}>
      <Container className={'py-20'}>
        <h1 className={'text-center'}>
          <Text text={'When should I use a VPN?'} variant={'h2'} />
        </h1>
        <div className={'mx-auto mt-10 max-w-xl leading-7'}>
          <Text
            text={
              'If privacy is important to you, you should use a VPN every time you connect to the internet. A VPN app runs in the background of your device so it won’t get in the way while you use other apps and browse the internet. And you’ll have peace of mind knowing your privacy is always protected.'
            }
            variant={'l3'}
          />
        </div>
        <div className={'my-10 grid grid-cols-3 gap-7'}>
          {benefits.map((feature, i) => (
            <div
              key={feature.title}
              className={'rounded-2xl bg-white px-4 py-12 text-center shadow-lg'}
            >
              <div className={'flex  items-center justify-center'}>
                <img
                  className={'w-3/4'}
                  width={300}
                  src={urlFor(feature.image).url()}
                  alt={`picture`}
                />
              </div>

              <div className={'pt-10 text-[rgb(10,10,35)]'}>
                <div className={'mb-7'}>
                  <Text text={feature.title} variant={'s2'} />
                </div>
                <div>
                  <Text text={feature.description} variant={'l3'} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Wrapper>
  )
}
