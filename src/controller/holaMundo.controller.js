import Validator from 'validatorjs'
import LOG from '../commons/logger'
import { Response } from '../commons/response'

Validator.useLang('es')

const healt = async (req, res) => {
  LOG.debug('CTRL: Starting callbackConciliacion method')
  try {
    LOG.debug('CTRL: Ending callbackConciliacion method')
    return Response.Ok(res)
  } catch (err) {
    LOG.error(err)
    return Response.InernalError(err)
  }
}

const holaMundo = async (req, res) => {
  LOG.debug('CTRL: Starting callbackConciliacion method')
  try {
    LOG.debug('CTRL: Ending callbackConciliacion method')
    return Response.Ok(res, { message: 'Hola Mundo' })
  } catch (err) {
    LOG.error(err)
    return Response.InernalError(err)
  }
}

export const Controller = {
  healt,
  holaMundo
}

export default null
