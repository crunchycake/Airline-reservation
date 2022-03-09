const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
    login: String,
    password: String,
    name: String,
    lastName: String,
    email: String,
    age: Number,
    
});


const Character = new mongoose.model('CharacterSchema', CharacterSchema);

module.exports = Character;