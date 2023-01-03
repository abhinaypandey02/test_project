import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

import Button from '../../atoms/Button'
import Text from '../../atoms/Text'
import FormGroup from '../FormGroup'

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/
const phoneRegex = /^[6-9]\d{9}$/
export default function WaitListForm({ setSuccess, isGetEarlyAccess }: any) {
  const { handleSubmit, control, setError } = useForm()
  const [loading, setLoading] = useState(false)

  function onSubmit(contact: any) {
    //f
  }

  return (
    <form
      id={'waitlist-form-main'}
      name={'waitlist-form-main'}
      onSubmit={handleSubmit(onSubmit)}
      className={'flex flex-wrap  justify-between'}
    >
      <div className="flex w-full flex-col justify-between sm:flex-row sm:gap-8">
        <FormGroup
          name={'first_name'}
          control={control}
          label={'First Name'}
          rules={{ required: true }}
        />
        <FormGroup
          name={'last_name'}
          control={control}
          label={'Last Name'}
          rules={{ required: true }}
        />
      </div>
      <FormGroup
        hidden={true}
        defaultValue={'true'}
        name={'waitlist'}
        control={control}
        label={''}
      />
      <div className="flex w-full flex-col justify-between sm:flex-row sm:gap-8">
        <FormGroup
          prepend={'+91'}
          type={'number'}
          name={'mobile_number'}
          control={control}
          label={'Phone Number'}
          rules={{ required: true, maxLength: 10, minLength: 10, pattern: phoneRegex }}
        />
        <FormGroup
          name={'email'}
          control={control}
          label={'Email'}
          rules={{ required: true, pattern: emailRegex }}
        />
      </div>

      <Button
        id={'waitlist-form-button'}
        type={'submit'}
        disabled={loading}
        className={'mt-3 mb-6 w-full py-[14px] sm:mt-0 sm:py-[16px] md:rounded-xl'}
        variant={'primary'}
      >
        <Text
          text={loading ? 'Submitting. Hold Tight!' : 'Join the Waitlist'}
          className={'inter-500-16-24 !text-white '}
        />
        {!loading && (
          <svg
            className={'ml-2.5'}
            width="17"
            height="14"
            viewBox="0 0 17 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 1.75L15.25 7M15.25 7L10 12.25M15.25 7L1.75 7"
              stroke="#F9FAFB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </Button>
    </form>
  )
}
