import React, { useState } from 'react'

import Text from '../../atoms/Text'

type PROPS_STYLE = {
  options: { code: string | undefined; name: string }[]
  onChange: (x: string | undefined) => void
  value: string
  ref: any
  onBlur: () => void
  INPUT_BASE_CLASS: string
}

export default function Dropdown(props: PROPS_STYLE) {
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const [hovering, setHovering] = useState<string | undefined>('false')
  let value = ''
  const selectedOption = props.options.find((o) => o.code === props.value)
  if (selectedOption) value = selectedOption.name
  const optionsToShow = props.options.filter((e) => !!e.code)
  return (
    <div
      tabIndex={1}
      className={`relative flex cursor-pointer select-none items-center bg-white ${props.INPUT_BASE_CLASS} relative !px-0`}
      ref={props.ref}
      onBlur={() => setDropdownVisible(false)}
      onClick={() => setDropdownVisible(true)}
    >
      <div className={'mx-3 flex w-full items-center justify-between'}>
        <span>{value}</span>
        <svg width={16} height={8} fill={'black'} viewBox={'0 0 70 35'}>
          <path d={dropdownVisible ? 'M0, 35 L25,0 L50,35Z' : 'M0, 0 L25,35 L50,0Z'} />
        </svg>
      </div>

      {dropdownVisible && (
        <div
          className={
            'overflow- absolute top-full z-50 w-full translate-y-[0px]  rounded-lg  border border-[1px] border-[rgba(185,152,219,0.3)] bg-white px-[8px] py-[10px] shadow-[0_2px_8px_rgba(117,131,142,0.08)] shadow-[0_20px_32px_rgba(52,60,68,0.16)]'
          }
        >
          {optionsToShow.map((o) => (
            <div
              key={o.code}
              onMouseEnter={() => setHovering(o.code)}
              onMouseLeave={() => setHovering('false')}
              className={
                'relative rounded bg-white px-[11px] py-[4px] text-[20px]  font-bold text-[#2C090B] hover:text-p1 md:text-[16px]'
              }
              onClick={(e) => {
                props.onChange(o.code)
                setDropdownVisible(false)
                e.stopPropagation()
              }}
            >
              <Text text={o.name} />
              {hovering === o.code && <div className={'absolute -bottom-0 h-0.5 w-[11px] bg-p1'} />}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
