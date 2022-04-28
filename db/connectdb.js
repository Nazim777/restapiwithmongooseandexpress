import mongoose from "mongoose";


/*
const mongooseconnect=(daabaseurl)=>{
    return mongoose.connect(daabaseurl).then(()=>{
        console.log('database connected')
    }).catch((err)=>{
        console.log(err)
    })
}
*/

const mongooseconnect=async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/team');
        console.log('database connected')
        
    } catch (error) {
        console.log(error)
        
    }
}

   









export default mongooseconnect