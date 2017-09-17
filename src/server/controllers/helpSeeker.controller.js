import HelpSeeker from '../models/helpSeeker'
import cuid from 'cuid'
import slug from 'limax'
import sanitizeHtml from 'sanitize-html'

/**
 * Get all helpSeekers
 * @param req
 * @param res
 * @returns void
 */

export function getHelpSeekers (req, res) {
  HelpSeeker.find().sort('-description').exec((err, helpSeekers) => {
    if (err) {
      res.status(500).send(err)
    }
    res.json({ helpSeekers })
  })
}

/**
 * Save a helpSeeker
 * @param req
 * @param res
 * @returns void
 */
export function addHelpSeeker (req, res) {
  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
    res.status(403).end()
  }

  const newHelpSeeker = new HelpSeeker(req.body.post)

  // Let's sanitize inputs
  newHelpSeeker.title = sanitizeHtml(newHelpSeeker.title)
  newHelpSeeker.name = sanitizeHtml(newHelpSeeker.name)
  newHelpSeeker.image = sanitizeHtml(newHelpSeeker.image)
  newHelpSeeker.description = sanitizeHtml(newHelpSeeker.description)
  newHelpSeeker.status = sanitizeHtml(newHelpSeeker.status)
  newHelpSeeker.bank = sanitizeHtml(newHelpSeeker.bank)
  newHelpSeeker.iban = sanitizeHtml(newHelpSeeker.iban)
  newHelpSeeker.bic = sanitizeHtml(newHelpSeeker.bic)
  newHelpSeeker.swift = sanitizeHtml(newHelpSeeker.swift)
  newHelpSeeker.holder = sanitizeHtml(newHelpSeeker.holder)
  newHelpSeeker.refs = sanitizeHtml(newHelpSeeker.refs)
  newHelpSeeker.dateAdded = sanitizeHtml(newHelpSeeker.dateAdded)
  newHelpSeeker.dateStatusChanged = sanitizeHtml(newHelpSeeker.dateStatusChanged)

  newHelpSeeker.slug = slug(newHelpSeeker.title.toLowerCase(), { lowercase: true })
  newHelpSeeker.id = cuid()
  newHelpSeeker.save((err, saved) => {
    if (err) {
      res.status(500).send(err)
    }
    res.json({ post: saved })
  })
}

/**
 * Get a single helpSeeker
 * @param req
 * @param res
 * @returns void
 */
export function getHelpSeeker (req, res) {
  HelpSeeker.findOne({ cuid: req.params.cuid }).exec((err, helpSeeker) => {
    if (err) {
      res.status(500).send(err)
    }
    res.json({ helpSeeker })
  })
}

/**
 * Delete a helpSeeker
 * @param req
 * @param res
 * @returns void
 */
export function deleteHelpSeeker (req, res) {
  HelpSeeker.findOne({ cuid: req.params.cuid }).exec((err, helpSeeker) => {
    if (err) {
      res.status(500).send(err)
    }

    helpSeeker.remove(() => {
      res.status(200).end()
    })
  })
}
