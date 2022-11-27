const express = require('express');
const studentModel = require('../models/student;');
let router = express.Router();

router.post('/', async (req,res) =>{
    const{firstname, lastname}= request.body;
    
    if (typeof firstname === 'undefined' || typeof lastname === 'undefined'){
        return res.status(500).json({
        "msg": "Vous devez entrer un nom et un prenom !"
    })
}

try {
  let student = await studentModel.create({
    firstname,
    lastname
  });
  return res.status(200).json(student);
} catch(error){
    return res.status(500).json({
        "msg": "Il ya une erreur:"+ erreur
})
}

});

router.get('/', async (req, res) => {
try{
  let student = await classeStudent.findById(id); 
  return res.status(200).json(student);

} catch(error){
  response.status(200).json({
      msg: error
  });
}

});

router.get('/:id', async (req, res) => {
const {id} = request.params
try{
let student = await classeModel.findOne({
  _id: id 
})
response.status(200).json({
  msg:"eleve bien supprimée"
});
}catch(error){
response.status(200).json({
  msg: error
});
}




response.status(200).json(student);
});

router.delete('/:id', (req, res) => {
const {id} = request.params;
classes = classes.filter(object=>{return object.id !== id;});

response.status(200).json(student);
});
router.put('/:id', async (req, res) => {
const {id} = req.params;
const {name} = req.body;

let student = student.find(item => item.id === id);
student.name = name;
res.status(200).json(student);


})
module.exports = router;