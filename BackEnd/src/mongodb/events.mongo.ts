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
    return eventModel.create(event);
};

export const getEvents = () => {
    return eventModel.find();
};

export const getEventById = (id: string) => {
    return eventModel.findById(id);
};

export const updateEvent = (id: string, event: eventType) => {
    return eventModel.findByIdAndUpdate(id, event);
};

export const deleteEvent = async (id: string) => {
    try {
        const deletedEvent = await eventModel.findByIdAndDelete(id);
    } catch (error) {
        console.log('Erro ao deletar evento:'+ error);
    }
};