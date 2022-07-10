import {Schema, model} from "mongoose";

const blogSchema = new Schema({
  
    title:{
        type:String,
        required: true
    },
    Blog:{
        type:String,
        required: true
    }
})

export default model('blogs',blogSchema,) 

