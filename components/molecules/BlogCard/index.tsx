import React from 'react'
import Link from 'next/link'

import imageUrlBuilder from '@sanity/image-url'

import client from '../../../client'
import Text from '../../atoms/Text'
type PROPS_TYPES = {
  image: any
  authorName: string
  publishedAt: string
  title: string
  slug: string
}
function urlFor(source: string) {
  return imageUrlBuilder(client).image(source)
}
export default function BlogCard(props: PROPS_TYPES) {
  return (
    <Link
      href={'/blog/' + props.slug}
      className={
        'cursor-pointer overflow-hidden rounded-3xl border border-[1px] border-[rgb(200,200,200)] bg-white shadow-xl transition-transform duration-200 ease-in-out hover:-translate-y-4'
      }
    >
      <div>
        <img className={''} src={urlFor(props.image).url()} alt={`picture`} />
      </div>
      <div className={'m-4 flex justify-between gap-3 '}>
        <Text text={props.authorName} variant={'l4'} />
        <Text text={props.publishedAt} variant={'l4'} />
      </div>
      <div className={'m-4 my-8'}>
        <Text text={props.title} variant={'s2'} />
      </div>
    </Link>
  )
}
