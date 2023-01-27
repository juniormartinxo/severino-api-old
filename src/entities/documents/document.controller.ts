import { Request, Response } from 'express'
import Documents from '../../database/schemas/Documents'

class DocumentController {
  async create(request: Request, response: Response) {
    const {
      number,
      date,
      time,
      nature_code,
      nature_description,
      type,
      situation,
    } = request.body

    try {
      const document = await Documents.create({
        number,
        date,
        time,
        nature_code,
        nature_description,
        type,
        situation,
      })

      response.json(document)
    } catch (error) {
      return response.status(500).send({
        error: '🔥 error on create document',
        message: error.message,
      })
    }
  }
}

export default new DocumentController()
