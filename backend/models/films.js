const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const filmSchema = new Schema({
    title: {
        type: String,
        require: true, 
    },
    description: {
        type: String,
        require: true, 
    },
    score: {
        type: String,
        require: true, 
    },
    director: {
        type: String,
        require: true, 
    },
    year: {
        type: String,
        require: true, 
    },
});


module.exports = mongoose.model('Film', filmSchema);