const mongoose = require('mongoose');


const connectdb = async()=>{
   const conn = await mongoose.connect(process.env.DATABASE,{
        useNewUrlParser: true,
         useCreateIndex: true,
         useUnifiedTopology : true
        
        }).then(()=>{
            console.log("database is connected!")
        })
        .catch(()=>{
            console.log("Unable to connect")
        });
}

module.exports = connectdb;
