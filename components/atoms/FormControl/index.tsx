import React from 'react'
import { useController } from 'react-hook-form'

import config from '../../../config.json'
import Dropdown from '../Dropdown'
import Text from '../Text'
type PROPS_TYPE = {
  name: string
  control: any
  rules?: Object
  type?: string
  inputClass?: string
  prepend?: string
  options?: { code: string | undefined; name: string }[]
  defaultValue?: any
}

const { ERROR_MESSAGES }: any = config

export default function FormControl(props: PROPS_TYPE) {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({
    name: props.name,
    control: props.control,
    defaultValue: props.defaultValue,
    rules: props.rules,
  })
  let invalidClass = ' !border-[#fa9d9d] '
  const INPUT_BASE_CLASS =
    'border-[rgb(150,150,150)] inter-600-16-29 border-[1px] form-control focus:border-p1 focus:outline-none h-[45px] sm:h-[58px] text-[#5F6581] px-[15px]  w-full  rounded-[15px] w-full'
  return (
    <>
      <div className={'relative '}>
        {props.prepend && (
          <span
            className={
              'inter-600-16-29 absolute left-2.5 top-1/2 flex -translate-y-1/2 items-center gap-3 text-[#5F6581]'
            }
          >
            {props.prepend}
            <span className={'h-8 w-[1px] bg-[#F3F3F3]'} />
          </span>
        )}

        {!props.options && (
          <input
            placeholder={''}
            type={props.type || 'text'}
            className={
              `${INPUT_BASE_CLASS} ${props.inputClass} ` +
              (props.prepend ? ' pl-16 ' : '') +
              (invalid && invalidClass)
            }
            {...field}
          ></input>
        )}
        {props.options && <input className="hidden" value={field.value} name={field.name} />}

        {props.options && (
          <Dropdown
            options={props.options}
            onChange={field.onChange}
            value={field.value}
            eleRef={field.ref}
            onBlur={field.onBlur}
            INPUT_BASE_CLASS={INPUT_BASE_CLASS}
          />
        )}
      </div>
      {error && (
        <div>
          <Text className={'!text-[#d00]'} text={ERROR_MESSAGES[error.type]} />
        </div>
      )}
    </>
  )
}
