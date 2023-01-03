import React, { PropsWithChildren } from 'react'
import { Carousel as ReactResponsiveCarousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
type PROPS_STYLE = {
  current: number
}

export default function Carousel({ children, current, setCurrent }: any) {
  return (
    <ReactResponsiveCarousel
      showStatus={false}
      selectedItem={current}
      onChange={(i) => setCurrent(i)}
      renderIndicator={(clickHandler, isSelected, index, label) => (
        <span
          onClick={clickHandler}
          style={{ height: 12, width: 12, opacity: isSelected ? 1 : 0.17 }}
          className={'mx-1 inline-flex translate-y-[15px] cursor-pointer rounded-full bg-p1'}
        />
      )}
      className={'max-w-full'}
    >
      {children}
    </ReactResponsiveCarousel>
  )
}
