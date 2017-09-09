import React from 'react'
import Layout from '../../components/Layout'
import HelpSeekerDetails from './HelpSeekerDetails'
import { fetchHelpSeeker } from '../../actions/HelpSeekerActions'

const title = 'Details'

async function action ({ params, store }) {
  const hs = await store.dispatch(fetchHelpSeeker(params._id))
  return {
    chunks: ['details'],
    title,
    component: (
      <Layout>
        <HelpSeekerDetails title={title} helpSeeker={hs} />
      </Layout>
    ),
  }
}

export default action
