import React from 'react'
import Layout from '../../components/Layout'
import HelpSeekerDetails from './HelpSeekerDetails'
import { fetchHelpSeeker } from '../../actions/HelpSeekerActions'

const title = 'Details'

async function action ({ params, store }) {
  const getHelpSeeker = await store.dispatch(fetchHelpSeeker(params.cuid))
  const helpSeeker = getHelpSeeker.helpSeeker
  return {
    chunks: ['details'],
    title,
    component: (
      <Layout>
        <HelpSeekerDetails title={title} helpSeeker={helpSeeker} />
      </Layout>
    ),
  }
}

export default action
