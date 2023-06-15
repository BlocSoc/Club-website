const mongoose = require('mongoose')

const { Schema } = mongoose;

const EventSchema = new Schema({
    id: {
        type: String,
        unique: true,
      },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
    
  });

  module.exports = mongoose.model('event',EventSchema)