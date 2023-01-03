import React from 'react'

const VARIANTS = {
  h1_jumbo: 'font-georgia text-8xl',
  h1: 'font-georgia text-6xl',
}

type PROPS_TYPES = {
  variant?: keyof typeof VARIANTS
  className?: string
  text: string
}

export default function Text(props: PROPS_TYPES) {
  const BASE_CLASS = ''
  return (
    <span
      className={`${BASE_CLASS} ${props.variant && VARIANTS[props.variant]} ${props.className}`}
    >
      {props.text}
    </span>
  )
}
