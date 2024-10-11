import { createEvent, getEvents, getEventById, updateEvent, deleteEvent } from "../../mongodb/events.mongo";

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
        updateEvent(req.params.id, event) //TODO: Testar no Postman.
            .then(updatedEvent => {
                if (updatedEvent) {
                    res.send(updatedEvent);
                } else {
                    res.status(404).send('Event not found');
                }
            })
            .catch(error => {
                res.status(500).send(error.message);

            });
    })
    .delete((req, res) => {
        deleteEvent(req.params.id);
        res.send('Event deleted successfully');
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

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});