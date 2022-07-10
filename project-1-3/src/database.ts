import mongoose from "mongoose";

 async function connect(){
    try{
          const db = await mongoose.connect('mongodb://127.0.0.1/projectDB',{
        });
        console.log('...Database is connected')
    }
    catch{
        console.log('Error')
    }
}

export default connect;