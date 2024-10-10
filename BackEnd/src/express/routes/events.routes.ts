import { createEvent, getEvents, getEventById, getEventsByMonth, updateEvent, deleteEvent } from "../../mongodb/events.mongo";

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.route('/events/:id')
    .get((req, res) => {
        getEventById(req.params.id).then((event) => {
            res.send(event);
        });
    })
    .put((req, res) => {
        let event = req.body;
        updateEvent(req.params.id, event); //TODO: Testar no Postman.
    })
    .delete((req, res) => {
        deleteEvent(req.params.id);
        res.send('Deletado com sucesso');
    });

app.route('/events')
    .get((req, res) => {
        getEvents().then((events) => {
            res.send(events);
        });
    })
    .post((req, res) => {
        let event = req.body;
        createEvent(event)
        res.send('Event created successfully');
    });

app.get('/events/month/:month', (req, res) => {
    getEventsByMonth(req.params.month).then((events) => {
        res.send(events);
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
}); //TODO: Retirar após fase de testes.