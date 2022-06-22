const express=require('express');
const bodyParser=require('body-parser');
//package import

const {mongoose}=require('./db.js'); //local import
var bookscontroller= require('./controllers/bookscontroller.js');

var app = express();
app.use(bodyParser.json());

app.listen(3000,()=>console.log('Server started at port : 3000'));

app.use('/books',bookscontroller)