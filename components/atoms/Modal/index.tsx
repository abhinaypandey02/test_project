import React, { useEffect, useState } from 'react'

type PROPS_TYPE = {
  onClose: () => void
  show: boolean
  width: string | number
  className?: string
}

function stopClickingThrough(e: React.MouseEvent) {
  //stopping the inner elements' onClick from being triggered if an overlapping element is clicked
  //this is done to ensure that the modal closes when clicked on the empty space but stopping the propagation and doing nothing when clicking on the modal body
  e.stopPropagation()
}
export function NavModal(props: React.PropsWithChildren<PROPS_TYPE>) {
  const [show, setShow] = useState(props.show) //visibility of modal
  useEffect(() => {
    if (!props.show)
      //we want to wait 350ms for the closing animation to be completed before turning off the display
      setTimeout(() => setShow(false), 350)
    //no wait needed on opening
    else setShow(true)
  }, [props.show])
  if (!show) return null //no display if modal closed

  //modal open
  return (
    <div
      onClick={props.onClose}
      className={'fixed top-0 left-0 z-50 min-h-full w-full overflow-auto bg-[rgba(0,0,0,0.4)]'}
    >
      <div
        style={{ width: props.width }}
        tabIndex={0}
        onClick={stopClickingThrough}
        className={
          'fade-in-animation absolute min-h-full !w-[80%] bg-white md:!w-auto ' +
          (props.show ? 'fade-in-animation' : 'fade-out-animation')
        }
      >
        {props.children}
      </div>
    </div>
  )
}
export default function Modal(props: React.PropsWithChildren<PROPS_TYPE>) {
  const [show, setShow] = useState(props.show) //visibility of modal
  useEffect(() => {
    if (!props.show)
      //we want to wait 350ms for the closing animation to be completed before turning off the display
      setTimeout(() => setShow(false), 350)
    //no wait needed on opening
    else setShow(true)
  }, [props.show])
  //modal open
  return (
    <div
      style={{ display: show ? 'block' : 'none' }}
      onClick={props.onClose}
      className={
        'fixed top-0 left-0 z-50 min-h-full w-full overflow-auto bg-[rgba(0,0,0,0.4)] ' +
        props.className
      }
    >
      <div
        style={{ maxWidth: 618, height: '100vh' }}
        tabIndex={0}
        onClick={stopClickingThrough}
        className={
          ' fade-in-animation2 mx-auto mx-3 flex items-center   sm:mx-auto md:overflow-visible   ' +
          (props.show ? 'fade-in-animation2' : 'fade-out-animation2')
        }
      >
        <div className={'mx-auto overflow-visible rounded-[31px] bg-white'}>{props.children}</div>
      </div>
    </div>
  )
}
