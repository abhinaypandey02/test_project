import React from 'react'

const BUTTON_CLASSES = {
  outline:
    'transition-colors duration-200 bg-transparent hover:bg-p2 !text-p1 child-text-black border-[2px] hover:border-p2 border border-p1 hover:border-transparent rounded-full',
  primary: 'bg-p1 hover:bg-p2 !text-white rounded-full',
  light: 'bg-white rounded-full hover:bg-[#ECECEC]',
}

type PROPS_TYPE = {
  variant: keyof typeof BUTTON_CLASSES
  className?: string
  width?: number
  height?: number
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
  id: string
}

export default function Button(props: React.PropsWithChildren<PROPS_TYPE>) {
  const baseClass =
    'transition-colors duration-200 flex justify-center items-center w-full h-full disabled:bg-[#13ba96] font-semibold font-inter'
  return (
    <button
      disabled={props.disabled}
      type={props.type}
      style={{ height: props.height, width: props.width }}
      id={props.id}
      onClick={props.onClick}
      className={`${props.className} ${baseClass} ${BUTTON_CLASSES[props.variant]}`}
    >
      {props.children}
    </button>
  )
}
