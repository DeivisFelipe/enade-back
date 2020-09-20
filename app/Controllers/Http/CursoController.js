'use strict'
const Database = use('Database')

class CursoController {
    async index({ request, response, view, params }) {
        const idFaculdade = params.idFaculdade
        return await Database.table('cursos').where('faculdade_id', '=', idFaculdade);
    }
}

module.exports = CursoController
