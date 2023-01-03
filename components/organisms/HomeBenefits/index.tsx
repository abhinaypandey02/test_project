import React from 'react'

import Container from '../../atoms/Container'
import Text from '../../atoms/Text'
import Wrapper from '../../atoms/Wrapper'
import BenefitCard from '../../molecules/BenefitCard'
export default function HomeBenefits({
  benefits,
}: {
  benefits: { title: string; description: string; image: string }[]
}) {
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
        <div className={'my-10 grid grid-cols-1 gap-7 sm:grid-cols-2  lg:grid-cols-3'}>
          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit.title}
              title={benefit.title}
              description={benefit.description}
              image={benefit.image}
            />
          ))}
        </div>
      </Container>
    </Wrapper>
  )
}
