import React from 'react'
import Image from 'next/image'

export default function Logo() {
  return (
    <Image
      src={'https://www.expressvpn.com/frtr/assets/images/edsv2/logo/expressvpn-logo-red.svg'}
      alt={'express vpn'}
      width={175}
      height={75}
    />
  )
}
