import React from 'react'

type PROPS_STYLE = {
  className?: string
  animation:
    | 'fade'
    | 'slide-up'
    | 'slide-down'
    | 'slide-right'
    | 'slide-left'
    | 'zoom-in'
    | 'zoom-out'
    | 'flip-up'
    | 'flip-down'
    | 'flip-left'
    | 'flip-right'
  duration?: number
  delay?: number
}

export default function RevealAnimation(props: React.PropsWithChildren<PROPS_STYLE>) {
  return (
    <div
      className={props.className}
      data-sal={props.animation}
      data-sal-duration={props.duration ? props.duration.toString() : '500'}
      data-sal-delay={props.delay?.toString() || '0'}
    >
      {props.children}
    </div>
  )
}
