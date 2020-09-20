'use strict'
const Database = use('Database')

class DadoController {
    async index({ request, response, view, params }) {
        const idCurso = params.idCurso
        return await Database.table('dados').where('curso_id', '=', idCurso);
    }
}

module.exports = DadoController
