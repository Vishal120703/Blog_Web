const mongoose = require("mongoose")

async function main(){
    try{
        mongoose.connect("mongodb://localhost:27017/Blog_Data");
        console.log("Database is connected")
    }
    catch{
        console.log("something went wrong");
    }
}
module.exports = {main}