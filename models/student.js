const mongoose = require('mongoose');
const { stringify } = require('uuid');
const studentSchema = new mongoose.Schema({

    firstname: {
        type: String,
        require: [true, 'Entrez un prénom'],
        trim: true
    },
    lastname: {
        type: String,
        require: [true, 'Entrez un nom'],
        trim: true
    }
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: "updated_at"
    }
});

module.exports = mongoose.model('Student' , studentSchema);
