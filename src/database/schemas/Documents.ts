import mongoose from 'mongoose'

const Document = new mongoose.Schema({
  number: { type: Number, required: true, unique: true },
  dateTime: { type: Date, required: false },
  date: { type: String, required: false },
  time: { type: String, required: false },
  nature_code: { type: String, required: true },
  nature_description: { type: String, required: true },
  address: { type: String, required: false },
  type: {
    type: String,
    enum: ['RAT', 'BOS', 'REDS'],
    required: true,
  },
  situation: {
    type: String,
    enum: ['ABERTO', 'NOVO', 'ENCERRADO', 'FECHADO'],
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
})

export default mongoose.model('Document', Document)
