import React from 'react'

import Container from '../../atoms/Container'
import Text from '../../atoms/Text'
import Wrapper from '../../atoms/Wrapper'
import BlogCard from '../BlogCard'

export default function BlogList({ title, blogs }: { title: string; blogs: any[] }) {
  return (
    <Wrapper>
      <Container className={'my-5'}>
        <div className={'my-10'}>
          <Text text={title} variant={'h2'} />
        </div>
        <div
          className={'mt-4 grid grid-cols-1 gap-10 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4'}
        >
          {blogs.map((blog) => (
            <BlogCard
              key={blog.slug.current}
              image={blog.mainImage}
              authorName={blog.name}
              slug={blog.slug.current}
              publishedAt={new Date(blog.publishedAt).toDateString()}
              title={blog.title}
            />
          ))}
        </div>
      </Container>
    </Wrapper>
  )
}
