import React from 'react'

const VARIANTS = {
  h1: 'font-georgia text-8xl',
  h2: 'font-georgia h2',
}

type PROPS_TYPES = {
  variant?: keyof typeof VARIANTS
  className?: string
  text: string
}

export default function Text(props: PROPS_TYPES) {
  const BASE_CLASS = ''
  return <span className={`${BASE_CLASS} ${props.variant} ${props.className}`}>{props.text}</span>
}
