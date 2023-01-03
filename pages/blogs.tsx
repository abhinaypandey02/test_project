import { useState } from 'react'
import type { NextPage } from 'next'
import groq from 'groq'

import client from '../client'
import Container from '../components/atoms/Container'
import SEO from '../components/atoms/SEO'
import Text from '../components/atoms/Text'
import Wrapper from '../components/atoms/Wrapper'
import BlogList from '../components/molecules/BlogList'
import Layout from '../components/organisms/Layout'

const Blogs: NextPage = ({ blogs }: any) => {
  const [showWaitListForm, setShowWaitListForm] = useState(false) //to keep track of visibility of modal
  function displayWaitListForm() {
    //display the wait-list modal/form by setting showWaitListFrom to true
    setShowWaitListForm(true)
  }

  function hideDisplayWaitListForm() {
    //hide the wait-list modal/form by setting showWaitListFrom to false
    setShowWaitListForm(false)
  }
  const latestBlogs = blogs.sort(
    (a: any, b: any) => new Date(a.publishedAt) < new Date(b.publishedAt)
  )
  const featuredBlogs = latestBlogs.filter((blog: any) => blog.categories.includes('Featured'))
  const newsBlogs = latestBlogs.filter((blog: any) => blog.categories.includes('News'))
  return (
    <Layout
      hideDisplayWaitListForm={hideDisplayWaitListForm}
      showWaitListForm={showWaitListForm}
      displayWaitListForm={displayWaitListForm}
    >
      <SEO title={'Express Blogs'} description={'List of all blogs by Express VPN team'} />
      <Wrapper className={'bg-[#f9f8f2]'}>
        <Container className={'py-14 pt-40 '}>
          <div className={'mb-4'}>
            <Text text={'Express Blogs'} variant={'h1'} />
          </div>
          <div>
            <Text
              text={
                'Your destination for privacy news, how-to guides, and the latest on our VPN tech'
              }
              variant={'l3'}
            />
          </div>
        </Container>
      </Wrapper>
      <BlogList title={'Latest Blogs'} blogs={latestBlogs} />
      <BlogList title={'Featured Blogs'} blogs={featuredBlogs} />
      <BlogList title={'Express news'} blogs={newsBlogs} />
    </Layout>
  )
}
const query = groq`*[_type == "post"]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body,
  mainImage,
  slug,
  publishedAt
}`
export async function getStaticProps() {
  // It's important to default the slug so that it doesn't return "undefined"
  const blogs = await client.fetch(query)
  return {
    props: {
      blogs,
    },
  }
}

export default Blogs
