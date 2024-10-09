var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb+srv://andrepoles:4vvCKOL3Hzs1eXZH@cluster0.i72hb.mongodb.net/Calendar?retryWrites=true&w=majority&appName=Cluster0');
var eventSchema = new Schema({
    title: String,
    description: String,
    date: Date,
});
var eventModel = mongoose.model('Event', eventSchema, 'Event');
var doc = new eventModel({
    title: 'My first event',
    description: 'This is my first event',
    date: new Date(),
});
doc.save();
