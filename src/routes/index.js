import express from 'express'
import { Controller } from '../controller/holaMundo.controller'

const router = express.Router()

router.route('/').get(Controller.healt)
router.route('/example').get(Controller.holaMundo)

module.exports = router
