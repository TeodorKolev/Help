import React from 'react'
import Layout from '../../components/Layout'
import HelpSeekerDetails from './HelpSeekerDetails'

const title = 'Details'

function action () {
  return {
    chunks: ['details'],
    title,
    component: (
      <Layout>
        <HelpSeekerDetails title={title} />
      </Layout>
    ),
  }
}

export default action
