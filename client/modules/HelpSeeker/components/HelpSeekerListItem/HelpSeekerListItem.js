import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import reptileImage from './abd50bc0e11052fea9669f18f0c017bc.jpg'
import styles from './HelpSeekerListItem.css'

function HelpSeekerListItem (props) {
  return (
    <Grid item xs={12} sm={4} className={styles['gridItem']}>
      <Card className={styles['card']}>
        <CardMedia image=''>
          <Link to={`/helpSeekers/${props.helpSeeker.cuid}`} >
            <img className={styles['postImage']} src='./abd50bc0e11052fea9669f18f0c017bc.jpg' alt='Contemplative Reptile' />
          </Link>
        </CardMedia>
        <CardContent>
          <Typography type='headline' component='h2'>{props.helpSeeker.iban}</Typography>
          <Typography type='subheading' gutterBottom>{props.helpSeeker.name}</Typography>
          <Typography component='p'>{props.helpSeeker.description}</Typography>
        </CardContent>
        <CardActions>
          <Button dense color='primary'>
            Share
          </Button>
          <Button dense color='primary'>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

HelpSeekerListItem.propTypes = {
  helpSeeker: PropTypes.shape({
    cuid: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    iban: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
}

export default HelpSeekerListItem
