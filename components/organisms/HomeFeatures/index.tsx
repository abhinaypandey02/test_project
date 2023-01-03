import React from 'react'

import Container from '../../atoms/Container'
import Wrapper from '../../atoms/Wrapper'
import FeatureCard from '../../molecules/FeatureCard'

export default function HomeFeatures({
  features,
}: {
  features: { title: string; description: string; image: string }[]
}) {
  return (
    <Wrapper>
      <Container className={'py-20'}>
        {features.map((feature, i) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            image={feature.image}
            even={i % 2 === 0}
          />
        ))}
      </Container>
    </Wrapper>
  )
}
