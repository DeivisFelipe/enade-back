'use strict'
const Faculdade = use('App/Models/Faculdade')

class FaculdadeController {
    async index({ request, response, view }) {
        return await Faculdade.all();
    }
}

module.exports = FaculdadeController
