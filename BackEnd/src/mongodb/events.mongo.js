"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEvent = exports.getEventsByMonth = exports.getEventById = exports.getEvents = exports.createEvent = void 0;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb+srv://andrepoles:4vvCKOL3Hzs1eXZH@cluster0.i72hb.mongodb.net/Calendar?retryWrites=true&w=majority&appName=Cluster0');
var eventSchema = new Schema({
    title: String,
    description: String,
    date: Date,
});
var eventModel = mongoose.model('Event', eventSchema, 'Event');
var createEvent = function (event) {
    return eventModel.create(event);
};
exports.createEvent = createEvent;
var getEvents = function () {
    return eventModel.find();
};
exports.getEvents = getEvents;
var getEventById = function (id) {
    return eventModel.findById(id);
};
exports.getEventById = getEventById;
var getEventsByMonth = function (month) {
    var currentYear = new Date().getFullYear();
    return eventModel.find({
        date: {
            $gte: new Date(currentYear, month, 1),
            $lt: new Date(currentYear, month + 1, 1),
        }
    });
};
exports.getEventsByMonth = getEventsByMonth;
var updateEvent = function (id, event) {
    return eventModel.findByIdAndUpdate(id, event);
};
exports.updateEvent = updateEvent;
