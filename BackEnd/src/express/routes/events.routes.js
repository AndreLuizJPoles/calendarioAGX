"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events_mongo_1 = require("../../mongodb/events.mongo");
var express = require('express'); //Descomentar para testar.
var app = express();
var eventRoute = express.Router();
app.route('/events/:id')
    .get(function (req, res) {
    (0, events_mongo_1.getEventById)(req.params.id).then(function (event) {
        res.send(event);
    });
})
    .put(function (req, res) {
    //TODO: Implementar para atualizar um evento pelo id.
})
    .delete(function (req, res) {
    //TODO: Implementar para deletar um evento pelo id.
});
app.route('/events')
    .get(function (req, res) {
    (0, events_mongo_1.getEvents)().then(function (events) {
        res.send(events);
    });
})
    .post(function (req, res) {
    var event = req.body; //TODO: Validar se o body está correto.
    (0, events_mongo_1.createEvent)(event);
});
app.get('/events/:month', function (req, res) {
    //TODO: Implementar para recuperar todos os eventos de um mês específico.
});
app.listen(3000);
