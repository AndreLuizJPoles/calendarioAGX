const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb+srv://andrepoles:4vvCKOL3Hzs1eXZH@cluster0.i72hb.mongodb.net/Calendar?retryWrites=true&w=majority&appName=Cluster0');

const eventSchema = new Schema({
    title: String,
    description: String,
    date: Date,
});

const eventModel = mongoose.model('Event', eventSchema, 'Event');