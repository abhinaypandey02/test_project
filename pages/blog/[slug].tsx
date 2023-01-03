import { useState } from 'react'
import groq from 'groq'

import { PortableText, PortableTextBlockComponent } from '@portabletext/react'
import imageUrlBuilder from '@sanity/image-url'

import client from '../../client'
import Container from '../../components/atoms/Container'
import SEO from '../../components/atoms/SEO'
import Text from '../../components/atoms/Text'
import Wrapper from '../../components/atoms/Wrapper'
import Layout from '../../components/organisms/Layout'
function urlFor(source: string) {
  return imageUrlBuilder(client).image(source)
}
const COMPONENTS: { block: Record<string, PortableTextBlockComponent> } = {
  block: {
    h2: ({ children }) => <h2 className={'h2 text-[#323b4b]'}>{children}</h2>,
    h3: ({ children }) => <h3 className={'h2 text-[#323b4b]'}>{children}</h3>,
    h4: ({ children }) => <h4 className={'h3 text-[#323b4b]'}>{children}</h4>,
    normal: ({ children }) => <p className={'text-[#4e5d78e] mb-4 !leading-[28px]'}>{children}</p>,
  },
}

const Post = ({ post }: any) => {
  const { title = 'Missing title', name = 'Missing name', authorImage, mainImage, body = [] } = post
  const [showWaitListForm, setShowWaitListForm] = useState(false) //to keep track of visibility of modal

  function displayWaitListForm() {
    //display the wait-list modal/form by setting showWaitListFrom to true
    setShowWaitListForm(true)
  }

  function hideDisplayWaitListForm() {
    //hide the wait-list modal/form by setting showWaitListFrom to false
    setShowWaitListForm(false)
  }
  return (
    <Layout
      displayWaitListForm={displayWaitListForm}
      showWaitListForm={showWaitListForm}
      hideDisplayWaitListForm={hideDisplayWaitListForm}
    >
      <SEO
        title={title + ' | ExpressVPN'}
        description={'A page with the content of the blog - ' + title}
      />
      <Wrapper>
        <Container className={'pt-44 pb-5'}>
          <article>
            {mainImage && (
              <div className={'my-5'}>
                <img src={urlFor(mainImage).url()} alt={`${name}'s picture`} />
              </div>
            )}
            <h1 className={'mt-6'}>
              <Text text={title} variant={'h1'} />
            </h1>
            <div className={'mt-4 mb-8 flex items-center gap-4'}>
              {authorImage && (
                <div className={'overflow-hidden rounded-full'}>
                  <img
                    height={30}
                    width={30}
                    src={urlFor(authorImage).width(50).url()}
                    alt={`${name}'s picture`}
                  />
                </div>
              )}
              <span>By {name}</span>
            </div>
            <div className={'text-justify font-light'}>
              <PortableText value={body} components={COMPONENTS} />
            </div>
          </article>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(groq`*[_type == "post" && defined(slug.current)][].slug.current`)

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  }
}
const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body,
  mainImage
}`
export async function getStaticProps(context: { params: { slug: string } }) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post,
    },
  }
}

export default Post
