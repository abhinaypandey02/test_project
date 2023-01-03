import React, { PropsWithChildren } from 'react'
import { Carousel as ReactResponsiveCarousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
type PROPS_STYLE = {}

export default function Carousel({ children }: any) {
  return (
    <ReactResponsiveCarousel
      infiniteLoop={true}
      renderArrowNext={(clickHandler, hasNext, label) => (
        <svg
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={
            'absolute bottom-3.5 right-[34%] sm:right-[38%] lg:right-[42%] ' +
            (hasNext ? 'cursor-pointer' : '')
          }
          onClick={clickHandler}
        >
          <path
            d="M5.9375 1.09375C5.625 1.40625 5.65625 1.875 5.9375 2.1875L9.71875 5.75H0.75C0.3125 5.75 0 6.09375 0 6.5V7.5C0 7.9375 0.3125 8.25 0.75 8.25H9.71875L5.9375 11.8438C5.65625 12.1562 5.65625 12.625 5.9375 12.9375L6.625 13.625C6.9375 13.9062 7.40625 13.9062 7.6875 13.625L13.7812 7.53125C14.0625 7.25 14.0625 6.78125 13.7812 6.46875L7.6875 0.40625C7.40625 0.125 6.9375 0.125 6.625 0.40625L5.9375 1.09375Z"
            fill={hasNext ? '#183B56' : '#959EAD'}
          />
        </svg>
      )}
      renderArrowPrev={(clickHandler, hasPrev) => (
        <svg
          onClick={clickHandler}
          className={
            'absolute bottom-3.5 left-[34%] sm:left-[38%]  lg:left-[42%] ' +
            (hasPrev ? 'cursor-pointer' : '')
          }
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.03125 12.9375C9.34375 12.625 9.3125 12.1562 9.03125 11.8438L5.25 8.25H14.25C14.6562 8.25 15 7.9375 15 7.5V6.5C15 6.09375 14.6562 5.75 14.25 5.75H5.25L9.03125 2.1875C9.3125 1.875 9.34375 1.40625 9.03125 1.09375L8.34375 0.40625C8.0625 0.125 7.5625 0.125 7.28125 0.40625L1.21875 6.5C0.90625 6.78125 0.90625 7.25 1.21875 7.53125L7.28125 13.625C7.5625 13.9062 8.03125 13.9062 8.34375 13.625L9.03125 12.9375Z"
            fill={hasPrev ? '#183B56' : '#959EAD'}
          />
        </svg>
      )}
      showStatus={false}
      interval={6500}
      autoPlay={true}
      renderIndicator={(clickHandler, isSelected, index, label) => (
        <span
          onClick={clickHandler}
          style={{ height: 12, width: 12, opacity: isSelected ? 1 : 0.17 }}
          className={'mx-1 inline-flex cursor-pointer rounded-full bg-p1'}
        />
      )}
      className={'max-w-full'}
    >
      {children}
    </ReactResponsiveCarousel>
  )
}
