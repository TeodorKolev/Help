import React, { PropTypes, Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import MenuIcon from 'material-ui-icons/Menu'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import Menu, { MenuItem } from 'material-ui/Menu'
import MoreVertIcon from 'material-ui-icons/MoreVert'

// Import Style
// import styles from './Header.css';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
})

const ITEM_HEIGHT = 48

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      anchorEl: null,
      open: false,
    }
  }

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget })
  };

  handleRequestClose = () => {
    this.setState({ open: false })
  };

  render () {
    return (
      <AppBar position='static'>
        <Toolbar>
          <IconButton className={this.props.classes.menuButton} color='contrast' aria-label='Menu'>
            <MenuIcon />
          </IconButton>
          <Typography type='title' color='inherit' className={this.props.classes.flex}>
            Help
          </Typography>
          <IconButton
            aria-label='More'
            aria-owns={this.state.open ? 'long-menu' : null}
            aria-haspopup='true'
            color='contrast'
            onClick={this.handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id='long-menu'
            anchorEl={this.state.anchorEl}
            open={this.state.open}
            onRequestClose={this.handleRequestClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4,
                width: 100,
              },
            }}
          >
            {this.props.intl.enabledLanguages.map(lang =>
              <MenuItem key={lang} onClick={() => {
                this.handleRequestClose()
                this.props.switchLanguage(lang)
              }} selected={lang === this.props.intl.locale}
                className={lang === this.props.intl.locale ? styles.selected : ''}>{lang}</MenuItem>
            )}
          </Menu>
        </Toolbar>
      </AppBar>
    )
  }

/*    <div className={styles.header}>
      <div className={styles['language-switcher']}>
        <ul>
          <li><FormattedMessage id="switchLanguage" /></li>
          {languageNodes}
        </ul>
      </div>
      <div className={styles.content}>
        <h1 className={styles['site-title']}>
          <Link to="/" ><FormattedMessage id="siteTitle" /></Link>
        </h1>
        {
          context.router.isActive('/', true)
            ? <a className={styles['add-post-button']} href="#" onClick={props.toggleAddPost}><FormattedMessage id="addPost" /></a>
            : null
        }
      </div>
    </div> */
}

Header.contextTypes = {
  router: React.PropTypes.object,
}

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
