import React from 'react'
import Layout from '../../components/Layout'
import Scroll from './Scroll'

const title = 'Scroll'

function action () {
  return {
    chunks: ['scroll'],
    title,
    component: (
      <Layout>
        <Scroll title={title} />
      </Layout>
    ),
  }
}

export default action
