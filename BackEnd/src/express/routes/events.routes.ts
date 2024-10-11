import { createEvent, getEvents, getEventById, updateEvent, deleteEvent } from "../../mongodb/events.mongo";

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.route('/events/:id')
    .get((req, res) => {
        getEventById(req.params.id)
            .then((event) => {
                if (event) {
                    res.status(200).send(event);
                } else {
                    res.status(404).send('Event not found');
                }
            })
            .catch(error => {
                res.status(500).send(error.message);
            });
    })
    .put((req, res) => {
        let event = req.body;
        updateEvent(req.params.id, event)
            .then(updatedEvent => {
                if (updatedEvent) {
                    res.status(200).send(updatedEvent);
                } else {
                    res.status(404).send('Event not found');
                }
            })
            .catch(error => {
                res.status(500).send(error.message);
            });
    })
    .delete((req, res) => {
        deleteEvent(req.params.id)
            .then(deletedEvent => {
                if (deletedEvent) {
                    res.status(200).send(deletedEvent);
                } else {
                    res.status(404).send('Event not found');
                }
            })
            .catch(error => {
                res.status(500).send(error.message);
            });
    });

app.route('/events')
    .get((req, res) => {
        getEvents()
            .then((events) => {
                if (events.length === 0) {
                    res.status(404).send('Events not found');
                } else {
                    res.status(200).send(events);
                }
            })
            .catch(error => {
                res.status(500).send(error.message);
            });
    })
    .post((req, res) => {
        let event = req.body;
        createEvent(event)
        .then(() => {
            res.status(201).send('Event created successfully');
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
    });

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});