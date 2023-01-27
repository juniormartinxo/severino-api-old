import express from 'express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import invariant from 'tiny-invariant'
import routes from './routes'

dotenv.config()

const app = express()

invariant(process.env.DATABASE_URL, '🔥 DATABASE_URL is required in file .env')

try {
  mongoose.connect(process.env.DATABASE_URL!)
} catch (error) {
  console.log('🔥 error on connect to database', error)
}

app.use(express.json())
app.use(routes)

app.listen(3000, () => {
  console.log('🔥 server on fire!!!')
})
