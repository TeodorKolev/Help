import React, { PropTypes } from 'react'
import Masonry from 'react-masonry-component'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './HelpSeekerList.css'
import HelpSeekerListItem from './HelpSeekerListItem/HelpSeekerListItem'

function HelpSeekerList (props) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Masonry className={s.grid}>
          {props.helpSeekers.map((helpSeeker) => (
            <HelpSeekerListItem helpSeeker={helpSeeker} key={helpSeeker.cuid} />
          ))}
        </Masonry>
      </div>
    </div>
  )
}

HelpSeekerList.propTypes = {
  helpSeekers: PropTypes.arrayOf(PropTypes.shape({
    cuid: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    iban: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
}

export default HelpSeekerList
