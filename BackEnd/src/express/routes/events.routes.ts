import { createEvent, getEvents, getEventById, getEventsByMonth } from "../../mongodb/events.mongo";

const express = require('express');
const app = express();
const eventRoute = express.Router();

app.route('/events/:id')
    .get((req, res) => {
        getEventById(req.params.id).then((event) => {
            res.send(event);
        });
    })
    .put((req, res) => {
        //TODO: Implementar para atualizar um evento pelo id.
    })
    .delete((req, res) => {
        //TODO: Implementar para deletar um evento pelo id.
    });

app.route('/events')
    .get((req, res) => {
        getEvents().then((events) => {
            res.send(events);
        });
    })
    .post((req, res) => {
        let event = req.body; //TODO: Validar se o body está correto.
        createEvent(event);
    });

app.get('/events/month/:month', (req, res) => {
    getEventsByMonth(req.params.month).then((events) => {
        res.send(events);
    });
});

app.listen(3000); //TODO: Retirar após fase de testes.