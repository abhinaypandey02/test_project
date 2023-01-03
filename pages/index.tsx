import { useState } from 'react'
import type { NextPage } from 'next'
import groq from 'groq'

import client from '../client'
import SEO from '../components/atoms/SEO'
import HomeBenefits from '../components/organisms/HomeBenefits'
import HomeFeatures from '../components/organisms/HomeFeatures'
import HomeHero from '../components/organisms/HomeHero'
import Layout from '../components/organisms/Layout'

const Home: NextPage = ({ features, benefits }: any) => {
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
      hideDisplayWaitListForm={hideDisplayWaitListForm}
      showWaitListForm={showWaitListForm}
      displayWaitListForm={displayWaitListForm}
    >
      <SEO title={'Express VPN'} description={'Express VPN! Best VPN!'} />

      <HomeHero displayWaitListForm={displayWaitListForm} />
      <HomeFeatures features={features} />
      <HomeBenefits benefits={benefits} />
    </Layout>
  )
}
const benefits_query = groq`*[_type == "benefit"]{
  title,
  description,
  image
}`
const query = groq`*[_type == "feature"]{
  title,
  description,
  image
}`
export async function getStaticProps() {
  // It's important to default the slug so that it doesn't return "undefined"
  const features = await client.fetch(query)
  const benefits = await client.fetch(benefits_query)
  return {
    props: {
      features,
      benefits,
    },
  }
}

export default Home
