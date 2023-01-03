import React from 'react'

const VARIANTS = {
  h1_jumbo: 'font-georgia text-8xl',
  h1: 'font-georgia text-6xl',
  h2: 'font-georgia text-5xl',
  s1: 'font-inter font-bold text-2xl',
  s2: 'font-inter font-bold text-lg',
  l4: 'font-inter font-normal text-xs',
  l3: 'font-inter font-normal ',
  l2: 'font-inter font-normal text-xl',
  l1: 'font-inter font-normal text-2xl',
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
