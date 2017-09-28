/* eslint-disable global-require */
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './modules/App/App'

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule (deps, callback) {
    callback(require)
  }
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/Post/pages/PostListPage/PostListPage')
  require('./modules/Post/pages/PostDetailPage/PostDetailPage')
  require('./modules/HelpSeeker/pages/HelpSeekerListPage/HelpSeekerListPage')
  require('./modules/HelpSeeker/pages/HelpSeekerDetailPage/HelpSeekerDetailPage')
  require('./modules/HelpSeeker/pages/HelpSeekerCreatePage/HelpSeekerCreatePage')
}

export default (
  <Route path='/' component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Post/pages/PostListPage/PostListPage').default)
        })
      }}
    />
    <Route
      path='/posts/:slug-:cuid'
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Post/pages/PostDetailPage/PostDetailPage').default)
        })
      }}
    />
    <Route
      path='/helpSeekers'
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/HelpSeeker/pages/HelpSeekerListPage/HelpSeekerListPage').default)
        })
      }}
    />
    <Route
      path='/helpSeekers/:cuid'
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/HelpSeeker/pages/HelpSeekerDetailPage/HelpSeekerDetailPage').default)
        })
      }}
    />
    <Route
      path='/add'
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/HelpSeeker/pages/HelpSeekerCreatePage/HelpSeekerCreatePage').default)
        })
      }}
    />
  </Route>
)
