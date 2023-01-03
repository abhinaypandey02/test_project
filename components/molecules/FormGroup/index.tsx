import React from 'react'

import FormControl from '../../atoms/FormControl'
import Text from '../../atoms/Text'

type PROPS_TYPE = {
  name: string
  control: any
  label: string
  type?: string
  rules?: Object
  prepend?: string
  options?: { code: string | undefined; name: string }[]
  hidden?: boolean
  defaultValue?: any
}

export default function FormGroup(props: PROPS_TYPE) {
  return (
    <div className={'mb-[7px] mb-[33px] w-full sm:w-1/2 ' + (props.hidden ? 'hidden' : '')}>
      <div className={'mb-2 sm:mb-5 '}>
        <Text className={'inter-500-16-24 !text-[14px] text-[#B0B7C3]'} text={props.label} />
      </div>
      <FormControl
        defaultValue={props.defaultValue}
        options={props.options}
        prepend={props.prepend}
        name={props.name}
        control={props.control}
        rules={props.rules}
        type={props.type}
        inputClass=""
      />
    </div>
  )
}
