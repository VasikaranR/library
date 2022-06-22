const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/crud',(err)=>{
    if(!err){
        console.log('Mongose connection Succeeded...');
    }
    else{
        console.log('error in db connection : '+ JSON.stringify(err,undefined,2));
    }
});
module.exports=mongoose;