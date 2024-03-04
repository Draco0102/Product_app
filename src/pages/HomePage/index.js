import React from 'react'
import Layout from '../../components/layout/Layout'
import Banner from '../../components/banner/Banner'
import ProductsOverview from './ProductsOverview'

const HomePage = () => {
  return (
    <div>
      <Layout>
        <Banner />
        <ProductsOverview />
      </Layout>
    </div>
  )
}

export default HomePage
