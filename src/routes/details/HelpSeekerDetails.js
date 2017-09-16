import React, { PropTypes } from 'react'
import Typography from 'material-ui/Tgit pushypography'
import reptileImage from '../../components/Post/PostListItem/abd50bc0e11052fea9669f18f0c017bc.jpg'

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

function HelpSeekerDetails (props) {
  return (
    <div>
      <Typography type='display3' gutterBottom>
        {props.helpSeeker.name}
      </Typography>
      <img style={styles.postImage} src={reptileImage} alt='Contemplative Reptile' />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat tortor fermentum mi fermentum
        dignissim. Nullam vel ipsum ut ligula elementum lobortis. Maecenas aliquam, massa laoreet lacinia pretium,
        nisi urna venenatis tortor, nec imperdiet tellus libero efficitur metus. Fusce semper posuere ligula, et
        facilisis metus bibendum interdum. Mauris at mauris sit amet sem pharetra commodo a eu leo. Nam at est non
        risus cursus maximus. Nam feugiat augue libero, id consectetur tortor bibendum non. Quisque nec fringilla lorem.
        Nullam efficitur vulputate mauris, nec maximus leo dignissim id.</p>
      <p><strong><span>Банка: </span><span>Експресс банк</span></strong></p>
      <p><strong><span>IBAN: </span><span>BG50TTBB94001526947587</span></strong></p>
      <p><strong><span>BIC: </span><span>TTBB BG22</span></strong></p>
      <p><strong><span>SWIFT: </span><span>UNCRBGSF</span></strong></p>
      <p><strong><span>Титуляр: </span><span>Мария Йорданова Обретенова Иванова</span></strong></p>
    </div>
  )
}

HelpSeekerDetails.propTypes = {
  helpSeeker: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    iban: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
}

export default HelpSeekerDetails
