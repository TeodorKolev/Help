import mongoose from 'mongoose'
const Schema = mongoose.Schema

const helpSeekerImgSchema = new Schema({
  data: { type: 'Buffer', required: true },
  contentType: { type: 'String', required: true }
})

export default mongoose.model('HelpSeekerImgSchema', helpSeekerImgSchema)
