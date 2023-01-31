import mongoose from 'mongoose'

const Document = new mongoose.Schema({
  number: { type: String, required: true, unique: true },
  dateTime: { type: Date, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  nature_code: { type: String, required: true },
  nature_description: { type: String, required: true },
  address: { type: String, required: true },
  type: {
    type: String,
    enum: ['RAT', 'BOS', 'REDS'],
    required: true,
  },
  situation: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
})

export default mongoose.model('Document', Document)
