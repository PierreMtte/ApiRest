const mongoose = require('mongoose');
const { stringify } = require('uuid');
const coursSchema = new mongoose.Schema({
    
    label : {
    type: String,
    require: [true, 'Entrez votre matiere'],
    trim: true
},
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: "updated_at"
    }
});

module.exports = mongoose.model('Cours' , coursSchema);
