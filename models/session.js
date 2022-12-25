const { Date } = mongoose.Schema.Types;
const mongoose = require('mongoose');
const { stringify } = require('uuid');
const cours = require('./cours');
const sessionSchema = new mongoose.Schema({

    date : {
        type: Date,
        require: [true, 'Entrez le jour de votre session'],
        trim: true
    },
    heuredebut: {
        type: String,
        require: [true, 'Entrez lheure de debut de la session'],
        trim: true
    },

    heurefin: {
        type: String,
        require: [true, 'Entrez lheure de fin de la session'],
        trim: true
    },
    matiere: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Cours'
    }]
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: "updated_at"
    }
});

module.exports = mongoose.model('Session' , sessionSchema);
