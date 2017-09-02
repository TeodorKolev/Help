import React, { PropTypes } from 'react'
import PostListItem from './PostListItem/PostListItem'
import Masonry from 'react-masonry-component'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './PostList.css'

function PostList (props) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Masonry className={s.grid}>
          {props.helpSeekers.map((helpSeeker, index) => (
            <PostListItem helpSeeker={helpSeeker} key={index} />
          ))}
        </Masonry>
      </div>
    </div>
  )
}

PostList.propTypes = {
  helpSeekers: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    iban: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
}

export default withStyles(s)(PostList)
