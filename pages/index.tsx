import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/organisms/Layout'

import styles from '../styles/Home.module.css'
const Home: NextPage = () => {
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
      <div className={'h-100 mr-auto font-georgia'}>HELLO</div>
    </Layout>
  )
}

export default Home
