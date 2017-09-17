import mongoose from 'mongoose'
const Schema = mongoose.Schema

const helpSeekerSchema = new Schema({
  cuid: { type: 'String', required: false },
  title: { type: 'String', required: false },
  name: { type: 'String', required: true },
  image: { type: 'Buffer', required: false },
  description: { type: 'String', required: true },
  status: { type: 'String', required: false },
  bank: { type: 'String', required: false },
  iban: { type: 'String', required: true },
  bic: { type: 'String', required: false },
  swift: { type: 'String', required: false },
  holder: { type: 'String', required: false },
  refs: { type: 'Array', required: false },
  dateAdded: { type: 'Date', required: false },
  dateStatusChanged: { type: 'Date', required: false }
})

export default mongoose.model('HelpSeeker', helpSeekerSchema, 'helpSeekers')
