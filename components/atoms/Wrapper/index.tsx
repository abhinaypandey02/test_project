import React from 'react'

type PROPS_STYLES = {
  className?: string
  style?: any
}

export default function Wrapper({
  children,
  className,
  style,
}: React.PropsWithChildren<PROPS_STYLES>) {
  return (
    <div style={style} className={className + ' px-5'}>
      {children}
    </div>
  )
}
