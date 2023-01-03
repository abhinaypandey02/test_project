import React from 'react'

import bg from '../../../images/herobg.png'
import Button from '../../atoms/Button'
import Container from '../../atoms/Container'
import Text from '../../atoms/Text'
import Wrapper from '../../atoms/Wrapper'
export default function HomeHero({ displayWaitListForm }: { displayWaitListForm: () => void }) {
  return (
    <Wrapper style={{ backgroundImage: `url(${bg.src})`, backgroundPosition: 'center' }}>
      <Container className={'pt-40 pb-64'}>
        <div className={'text-center'}>
          <Text variant={'h1_jumbo'} text={'The VPN that just works'} />
        </div>
        <div className={'my-5 text-center'}>
          <Text variant={'s1'} text={'Go further with the #1 trusted leader in VPN'} />
        </div>
        <div>
          <Button
            className={'mx-auto'}
            height={60}
            width={275}
            variant={'primary'}
            id={'home-hero'}
            onClick={displayWaitListForm}
          >
            <Text text={'Get ExpressVPN'} variant={'s1'} className={'text-white'} />
          </Button>
        </div>
        <div className={'mt-4 text-center'}>
          <Text text={'30-DAY MONEY-BACK GUARANTEE'} variant={'l4'} className={''} />
        </div>
      </Container>
    </Wrapper>
  )
}
