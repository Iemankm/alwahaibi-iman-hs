import mongoose from "mongoose";
const keys = require('./config/keys')

 async function connect(){
    try{
          const db = await mongoose.connect(keys.mongodb.dbURI,{
        });
        console.log('...Database is connected')
    }
    catch{
        console.log('Error')
    }
}

export default connect;