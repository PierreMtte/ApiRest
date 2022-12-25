const { response } = require('express');
const express = require('express');
const { request } = require('http');
const { v4: uuidv4 } = require('uuid');
const classeModel = require('../models/classe') 

let router = express.Router();


router.post('/', async (request, response) =>{
    const {name} = request.body;

    if (name == "undefined" || name == "") {
        return response.status(500).json({
            msg: "Veuillez entrer un nom"
        });
    }

    try{
        let classe = await classeModel.create ({
        name
    });

        return response.status(200).json(classe);
    } catch (error){
        return response.status(500).json({
            msg: error
        });
    }
});
router.post('/add-student', async (request, response) => {

    const {studentId, classeId} = request.body;
try {
    classes = await classeModel.findOneAndUpdate({ 
        _id: classeId
    }, {
        students: [studentId]
    },{
        new: true
    }).populate('students');
    return response.status(200).json(classes);
} catch (error) {
    return response.status(500)({
        msg: error
    });
   }
});

router.get('/', async (request, response) => {
    try {
        let classes = await classeModel.find()
        return response.status(200).json(classes);
    } catch(error) {
        return response.status(500).json({
            msg: error
        })
    }
    
}),

router.get('/:id', async (request, response) => {
    const {id} = request.params;
    try{
        let classe = await classeModel.findById(id);
        return response.status(200).json(classe);
    } catch(error){
        return response.status(500).json({
            msg: error
        })
    }
}),

router.delete('/:id', async(request,response) => {
    const {id} = request.params;
    try{
        let classe = await classeModel.findByIdAndRemove(id);
        return response.status(200).json(classe);
    } catch(error){
        return response.status(500).json({
            msg: error
        })
    }
   
}),


router.put('/:id', async(request,response) =>{
    const {id} = request.params;
    const {name} = request.body;

    try {
        let classe = await classeModel.findByIdAndUpdate(id,
            {
                name
            },{
                new: true
            })
        return response.status(200).json({
            msg: "Classe bien modifiée !"
        })
    }catch (error) {
        return response.status(500).json(error)
    }
  
})

module.exports = router;