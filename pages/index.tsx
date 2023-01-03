import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import groq from 'groq'

import client from '../client'
import HomeBenefits from '../components/organisms/HomeBenefits'
import HomeFeatures from '../components/organisms/HomeFeatures'
import HomeHero from '../components/organisms/HomeHero'
import Layout from '../components/organisms/Layout'

import styles from '../styles/Home.module.css'
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
      <HomeHero />
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
export async function getStaticProps(context: { params: { slug: string } }) {
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
