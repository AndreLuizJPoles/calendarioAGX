"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events_mongo_1 = require("../../mongodb/events.mongo");
var express = require('express');
var app = express();
app.route('/events/:id')
    .get(function (req, res) {
    (0, events_mongo_1.getEventById)(req.params.id).then(function (event) {
        res.send(event);
    });
})
    .put(function (req, res) {
    var event = req.body; //TODO: Validar se o body está correto.
    (0, events_mongo_1.updateEvent)(req.params.id, event); //TODO: Testar no Postman.
})
    .delete(function (req, res) {
    (0, events_mongo_1.deleteEvent)(req.params.id); //TODO: Testar no Postman.
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
app.get('/events/month/:month', function (req, res) {
    (0, events_mongo_1.getEventsByMonth)(req.params.month).then(function (events) {
        res.send(events);
    });
});
app.listen(3000); //TODO: Retirar após fase de testes.
