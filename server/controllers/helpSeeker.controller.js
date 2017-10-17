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
  if (!req.body.helpSeeker.name || !req.body.helpSeeker.description || !req.body.helpSeeker.iban) {
    res.status(403).end()
  }

  const newHelpSeeker = new HelpSeeker(req.body.helpSeeker)

  // Let's sanitize inputs
  newHelpSeeker.name = sanitizeHtml(newHelpSeeker.name)
  newHelpSeeker.description = sanitizeHtml(newHelpSeeker.description)
  newHelpSeeker.iban = sanitizeHtml(newHelpSeeker.iban)

  console.log(req.body.helpSeeker.image)

  const fs = require('fs')
  newHelpSeeker.image = new HelpSeekerImg({
    data: req.body.helpSeeker.image,
    contentType: req.body.helpSeeker.image.type
  })

/*  let mongoose = require('mongoose')
  let Gridfs = require('gridfs-stream')
  let db = mongoose.connection.db
  let mongoDriver = mongoose.mongo
  let gfs = new Gridfs(db, mongoDriver)
  let writestream = gfs.createWriteStream({
    filename: req.body.helpSeeker.image.name,
    mode: 'w',
    content_type: req.body.helpSeeker.image.type,
  })
  fs.createReadStream(req.body.helpSeeker.image).pipe(writestream)
  writestream.on('close', function (file) {
    newHelpSeeker.image = file._id
    console.log(newHelpSeeker.image)
  }) */

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
