const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb+srv://andrepoles:4vvCKOL3Hzs1eXZH@cluster0.i72hb.mongodb.net/Calendar?retryWrites=true&w=majority&appName=Cluster0');

const eventSchema = new Schema({
    title: String,
    date: Date,
});

type eventType = {
    title: string,
    date: Date,
};

const eventModel = mongoose.model('Event', eventSchema, 'Event');

export const createEvent = (event: eventType) => {
    try {
        return eventModel.create(event);
    } catch (error) {
        console.log('Error creating event:' + error);
    }
};

export const getEvents = () => {
    try {
        return eventModel.find().sort({ date: 1 });
    } catch (error) {
        console.log('Error getting events:' + error);
    }
};

export const getEventById = (id: string) => {
    try {
        return eventModel.findById(id);
    } catch (error) {
        console.log('Error getting event by id:' + error);
    }
};

export const updateEvent = (id: string, event: eventType) => {
    try {
        return eventModel.findByIdAndUpdate(id, event);
    } catch (error) {
        console.log('Error updating event:' + error);
    }
};

export const deleteEvent = async (id: string) => {
    try {
        const deletedEvent = await eventModel.findByIdAndDelete(id);
        return deletedEvent;
    } catch (error) {
        console.log('Error deleting event:' + error);
    }
};