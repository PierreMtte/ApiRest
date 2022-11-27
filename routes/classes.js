const { request, response } = require('express');
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const classeModel = require

let router = express.Router();

let classes = [];

router.post('/', async (request, response) =>{
    const {name} = request.body;
    try{
        let classe= await classeModel.create({
            name
        });
        return response.status(200).json(classes);
    } catch(error) {

        response.status(500).json({
            
        });

    }

    
    let classe = {
        id: uuidv4(),
        name
    };

    classes.push(classe);
    response.status(200).json(classes);
});

router.get('/', async (request, response) => {
    try{
        classes = await classeModel.find();

    } catch(error){
        response.status(200).json({
            msg: error
        });
    }
   
});

router.get('/:id', async (request, response) => {
    const {id} = request.params
 try{
    let classe = await classeModel.findOne({
        _id: id 
    })
    response.status(200).json({
        msg:"Classe Bien supprimée"
    });
 }catch(error){
    response.status(200).json({
        msg: error
    });
}


    

    response.status(200).json(classe);
});

router.delete('/:id', (request, response) => {
    const {id} = request.params;
    classes = classes.filter(object=>{return object.id !== id;});

    response.status(200).json(classes);
});
router.put('/:id', (request, response) => {
    const {id} = request.params;
    const {name} = request.body;

    let classe = classe.find(item => item.id === id);
    classe.name = name;
    response.status(200).json(classe);

})
module.exports = router;
