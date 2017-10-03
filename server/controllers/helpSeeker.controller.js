import HelpSeeker from '../models/helpSeeker'
import cuid from 'cuid'
import slug from 'limax'
import HelpSeekerImg from '../models/helpSeekerImg'
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
  console.log(req.body.helpSeeker)
  if (!req.body.helpSeeker.name || !req.body.helpSeeker.description || !req.body.helpSeeker.iban) {
    res.status(403).end()
  }

  const newHelpSeeker = new HelpSeeker(req.body.helpSeeker)

  // Let's sanitize inputs
  newHelpSeeker.name = sanitizeHtml(newHelpSeeker.name)
  newHelpSeeker.description = sanitizeHtml(newHelpSeeker.description)
  newHelpSeeker.iban = sanitizeHtml(newHelpSeeker.iban)

  const fs = require('fs')
  newHelpSeeker.image = new HelpSeekerImg({
    data: fs.readFileSync(req.body.helpSeeker.image),
    contentType: 'image/png'
  })

/*  let tempfile    = req.files.filename.path;
  let origname    = req.files.filename.name;
  let writestream = gfs.createWriteStream({ filename: origname });
  // open a stream to the temporary file created by Express...
  fs.createReadStream(tempfile)
    .on('end', function() {
      res.send('OK');
    })
    .on('error', function() {
      res.send('ERR');
    })
    // and pipe it to gfs
    .pipe(writestream); */

/*  newHelpSeeker.title = sanitizeHtml(newHelpSeeker.title)
  newHelpSeeker.image = sanitizeHtml(newHelpSeeker.image)
  newHelpSeeker.status = sanitizeHtml(newHelpSeeker.status)
  newHelpSeeker.bank = sanitizeHtml(newHelpSeeker.bank)
  newHelpSeeker.bic = sanitizeHtml(newHelpSeeker.bic)
  newHelpSeeker.swift = sanitizeHtml(newHelpSeeker.swift)
  newHelpSeeker.holder = sanitizeHtml(newHelpSeeker.holder)
  newHelpSeeker.refs = sanitizeHtml(newHelpSeeker.refs)
  newHelpSeeker.dateAdded = sanitizeHtml(newHelpSeeker.dateAdded)
  newHelpSeeker.dateStatusChanged = sanitizeHtml(newHelpSeeker.dateStatusChanged) */

  newHelpSeeker.cuid = cuid()
  newHelpSeeker.save((err, saved) => {
    if (err) {
      res.status(500).send(err)
    }
    res.json({ helpSeeker: saved })
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
