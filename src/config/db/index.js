const mongoose = require('mongoose')
async function connect() {
    try{
        await mongoose.connect('mongodb://localhost:27017/npm_dev');
        console.log("okk");   
    } catch (error){
        console.log("not okk");   
    }
}

module.exports  ={connect}