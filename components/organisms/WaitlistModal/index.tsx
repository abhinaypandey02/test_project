import React from 'react'
import Image from 'next/image'

import crossLogo from '../../../images/nav/crossLogo.svg'
import successLogo from '../../../images/nav/successLogo.svg'
import Button from '../../atoms/Button'
import Text from '../../atoms/Text'
import WaitListForm from '../../molecules/WaitlistForm'
type PROPS_TYPE = {
  close: () => void
  success: boolean
  setSuccess: (x: boolean) => void
  isGetEarlyAccess?: boolean
}

export default function WaitListModal(props: PROPS_TYPE) {
  if (props.success)
    return (
      <div className={'p-11'}>
        <div className={''}>
          <Image
            src={crossLogo}
            className={'ml-auto cursor-pointer'}
            onClick={props.close}
            alt={'exit'}
          />
        </div>
        <div className={''}>
          <Image src={successLogo} alt={'tick with green background'} className={'mx-auto'} />
        </div>
        <div className={'mt-4 text-center md:mt-8'}>
          <Text variant={'h2'} text={'Wohoo!'} />
        </div>
        <div className={'mt-2.5 mb-8 text-center'}>
          <Text variant={'l3'} text={'An email has been sent with the invitation!'} />
        </div>
        <div>
          <Button
            id={'waitlist-modal'}
            variant={'primary'}
            className={'mx-auto !w-full sm:!w-[300px]'}
            onClick={props.close}
            height={56}
            width={300}
          >
            Continue to the website
          </Button>
        </div>
      </div>
    )
  return (
    <div className={'px-[20px] pt-[20px] md:px-[35px] md:pt-[43px]'}>
      <div className={'flex '}>
        <div className={'  mr-auto'}>
          <div className={'ml-[3px] leading-[32px]'}>
            <Text variant={'h2'} text={'Join the Waitlist!'} />
          </div>
          <div className={' ml-[3px] leading-[20px] md:leading-[31px]'}>
            <Text className={'text-p3 opacity-70'} text={'to get product update'} />
          </div>
          <hr className={'mt-[24px] mb-[24px] border-[#F3F3F3] bg-[#F3F3F3]'} />
        </div>
        <div className={'cursor-pointer'} onClick={props.close}>
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.75 5.25L5.25 15.75"
              stroke="#B0B7C3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.25 5.25L15.75 15.75"
              stroke="#B0B7C3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <WaitListForm isGetEarlyAccess={props.isGetEarlyAccess} setSuccess={props.setSuccess} />
    </div>
  )
}
