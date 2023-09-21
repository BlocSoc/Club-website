const mongoose = require('mongoose')

const { Schema } = mongoose;

const BlogSchema = new Schema({
    id: {
        type: String,
        default: mongoose.Types.ObjectId().toHexString(),
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
    blog:{
        type:String,
        required:true
    },
    blogLink:{
        type:String,
        required:false
    }

  });

  module.exports = mongoose.model('blog',BlogSchema)