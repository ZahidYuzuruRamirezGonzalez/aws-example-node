export const MESSAGES = {
  'SPS.EXAMPLE.200': {
    template: 'SUCCESS',
    description: 'Se ha realizado correctamente la operación.'
  },
  'SPS.EXAMPLE.201': {
    template: 'CREATED',
    description: 'Se ha realizado correctamente la operación.'
  },
  'SPS.EXAMPLE.400': {
    template: '<%= message %>',
    description: 'La solicitud no se encuentra bien formada.'
  },
  'SPS.EXAMPLE.404': {
    template: 'NOT FOUND',
    description: 'Recurso no encontrado.'
  },
  'SPS.EXAMPLE.409': {
    template: 'CONFLICT - <%= text %>',
    description: 'Ha ocurrido un conflicto de datos.'
  },
  'SPS.EXAMPLE.500': {
    template: 'INTERNAL SERVER ERROR - <%= text %>',
    description: 'Error en el servidor.'
  },
  'SPS.EXAMPLE.502': {
    template: 'BAD GATEWAY - <%= text %>',
    description: 'Error puerta de enlace incorrecta.'
  },
  'SPS.EXAMPLE.001': {
    template: '<%= message %>',
    description: 'Hay errores en la peticion.'
  }
}

export default null
