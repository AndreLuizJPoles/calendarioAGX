"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events_mongo_1 = require("../../mongodb/events.mongo");
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.route('/events/:id')
    .get(function (req, res) {
    (0, events_mongo_1.getEventById)(req.params.id)
        .then(function (event) {
        if (event) {
            res.status(200).send(event);
        }
        else {
            res.status(404).send('Event not found');
        }
    })
        .catch(function (error) {
        res.status(500).send(error.message);
    });
})
    .put(function (req, res) {
    var event = req.body;
    (0, events_mongo_1.updateEvent)(req.params.id, event)
        .then(function (updatedEvent) {
        if (updatedEvent) {
            res.status(200).send(updatedEvent);
        }
        else {
            res.status(404).send('Event not found');
        }
    })
        .catch(function (error) {
        res.status(500).send(error.message);
    });
})
    .delete(function (req, res) {
    (0, events_mongo_1.deleteEvent)(req.params.id)
        .then(function (deletedEvent) {
        if (deletedEvent) {
            res.status(200).send(deletedEvent);
        }
        else {
            res.status(404).send('Event not found');
        }
    })
        .catch(function (error) {
        res.status(500).send(error.message);
    });
});
app.route('/events')
    .get(function (req, res) {
    (0, events_mongo_1.getEvents)()
        .then(function (events) {
        if (events.length === 0) {
            res.status(404).send('Events not found');
        }
        else {
            res.status(200).send(events);
        }
    })
        .catch(function (error) {
        res.status(500).send(error.message);
    });
})
    .post(function (req, res) {
    var event = req.body;
    (0, events_mongo_1.createEvent)(event)
        .then(function () {
        res.status(201).send('Event created successfully');
    })
        .catch(function (error) {
        res.status(500).send(error.message);
    });
});
app.listen(3000, function () {
    console.log('Server is running on http://localhost:3000');
});
