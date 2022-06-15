const express=require('express');
var router = express.Router();
var ObjectId= require('mongoose').Types.ObjectId;

var {Books}= require('../models/books');

router.get('/',(req,res)=>{
    Books.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log('error in retriving : '+JSON.stringify(err,undefined,2));}
    });
});

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.parmas.id}`);
    Books.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('Error in retriving : '+JSON.stringify(err,undefined,2));}
    });
});

router.post('/',(req,res)=>{
    var emp=new Books({
        name:req.body.name,
        password:req.body.password,
        role:req.body.role
    });
    emp.save((err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('error in save : '+ JSON.stringify(err,undefined,2));}
    });
});

// router.put('/:id',(req,res)=>{
//     if(!ObjectId.isValid(req.params.id))
//         return res.status(400).send(`No record with given id : ${req.parmas.id}`);
//     var emp=new Books({
//         name:req.body.name,
//         password:req.body.password,
//         role:req.body.role
//     });  
//     Books.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>{
//         if(!err){res.send(doc);}
//         else{console.log('error in save : '+ JSON.stringify(err,undefined,2));}
//     });
// });

// router.delete('/:id',(req,res)=>{
//     if(!ObjectId.isValid(req.params.id))
//         return res.status(400).send(`No record with given id : ${req.parmas.id}`);
//     Books.findByIdAndUpdate(req.params.id,(err,doc)=>{
//         if(!err){res.send(doc);}
//         else{console.log('error in delete : '+ JSON.stringify(err,undefined,2));}
//     });
// });

module.exports=router;