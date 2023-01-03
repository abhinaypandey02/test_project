import React from 'react'

type PROPS_STYLE = {
  className: string
}

export default function Container(props: React.PropsWithChildren<PROPS_STYLE>) {
  return <div className={'container mx-auto ' + props.className}>{props.children}</div>
}
