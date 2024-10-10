import { createEvent, getEvents, getEventById, getEventsByMonth, updateEvent, deleteEvent } from "../../mongodb/events.mongo";

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.route('/events/:id')
    .get((req, res) => {
        getEventById(req.params.id).then((event) => {
            res.send(event);
        });
    })
    .put((req, res) => {
        let event = req.body; //TODO: Validar se o body está correto.
        updateEvent(req.params.id, event); //TODO: Testar no Postman.
    })
    .delete((req, res) => {
        deleteEvent(req.params.id); //TODO: Testar no Postman.
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

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
}); //TODO: Retirar após fase de testes.