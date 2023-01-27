import { Router } from 'express'
import DocumentController from './entities/documents/document.controller'

const routes = Router()

routes.post('/document', DocumentController.create)

export default routes
