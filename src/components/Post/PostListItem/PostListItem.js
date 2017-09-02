import React, { PropTypes } from 'react'
import { withStyles } from 'material-ui/styles'
import Link from '../../Link/Link'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import reptileImage from './abd50bc0e11052fea9669f18f0c017bc.jpg'

const styles = {
  card: {
    height: 'auto',
  },
  postImage: {
    width: '100%',
  },
  gridItem: {
    padding: '12px'
  }
}

function PostListItem (props) {
  return (
    <Grid item xs={12} sm={4} style={styles.gridItem}>
      <Card style={styles.card}>
        <CardMedia image=''>
          <Link to={`/details/${props.helpSeeker._id}`} >
            <img style={styles.postImage} src={reptileImage} alt='Contemplative Reptile' />
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

PostListItem.propTypes = {
  helpSeeker: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    iban: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
}

export default withStyles(styles, { name: 'PostListItem' })(PostListItem)
