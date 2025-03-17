import React from 'react'
import WelcomePage from '../components/WelcomePage'
import Layout from "./Layout"
import Footer from "../components/ui/Footer"

const Welcome = () => {
  return (
    <Layout>
      <WelcomePage />
      <Footer />
    </Layout>
  )
}

export default Welcome
