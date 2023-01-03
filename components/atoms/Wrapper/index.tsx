import React from 'react'

type PROPS_STYLES = {
  className?: string
}

export default function Wrapper({ children, className }: React.PropsWithChildren<PROPS_STYLES>) {
  return <div className={className + ' px-5'}>{children}</div>
}
