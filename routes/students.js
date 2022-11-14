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
return res.status(200).json()
})
module.exports = router;