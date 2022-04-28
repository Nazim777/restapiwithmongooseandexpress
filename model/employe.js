import mongoose from "mongoose";
const employeshema=new mongoose.Schema({
    name:{type:String},
    position:{type:String},
    salary:{type:Number}
})

const employemodel= mongoose.model('employes',employeshema)
//insert data
/*
// this is for single data insert
const employdata= async()=>{
    try {

        const insertdata= new employemodel({
            name:'hashim ali',
            position:' engineer',
            salary:60000
        })
        const result =await insertdata.save()
        console.log(result)
        
    } catch (error) {
        console.log(error)
        
    }
} 

*/
/*
//for insert multiple data
const employdata= async()=>{
    try {

    const insertdata= new employemodel({
            name:'Hajer Islam',
            position:'cricketer',
            salary:60000
        })
        const insertdata1= new employemodel({
            name:'Yeanur Rahman',
            position:'engineer',
            salary:50000
        })

        const insertdata2= new employemodel({
            name:'Shamim Ahmed',
            position:'chmist',
            salary:80000
        })

        const insertdata3= new employemodel({
            name:'Aktar Ali',
            position:'computer engineer',
            salary:60000
        })
        const insertdata4= new employemodel({
            name:'Anisur Islam',
            position:'teacher',
            salary:80000
        })
        const result = await employemodel.insertMany([insertdata,insertdata1,insertdata2,insertdata3,insertdata4])
        console.log(result)


    } catch (error) {
        console.log(error)
    }
}


*/


//get all data 
/*
const readdata= async()=>{
   
       // const result = await employemodel.find() find all data from the database
   // const result = await employemodel.find().select('name position') //data just showing name and position
   //const result = await employemodel.find().select({name:0}) exclude name from the data
  // const result = await employemodel.findById('6267a7b5cfadad8b895fc122') //find single data by id from thedatabase
  //const result = await employemodel.findById('6267a7b5cfadad8b895fc122','name') get data by specified id
 // const result = await employemodel.find({name:'Yeasir Ali'}) //find data by name
 const result = await employemodel.find().limit(2) // find limited data 
    console.log(result)
    
}
*/
/*
//get all data with specified fields
const getreaddata= async()=>{
    
     const result = await employemodel.find()
     //console.log(result)
     result.forEach((item)=>{
         console.log('name:',item.name)
         console.log('position:',item.position)
         console.log('salary:',item.salary)
    
 }
 
 
*/
/*
//update data 

const updatedata=async()=>{
    const result = await employemodel.updateOne({name:'hashim ali'},{$set:{name:'Atahar Ali'}})
    console.log(result);
}
*/
//update one data
/*
const updatedata= async(id)=>{
    try {

        //const result = await employemodel.findByIdAndUpdate(id,{name:'Ahmed Humayun'}) //update data by id
        const result = await employemodel.updateOne({_id:id},{name:'Yeamin Islam',position:'engineer'})
        console.log(result)

    } catch (error) {
        console.log(error)
    }
   
}
*/
/*
//update many
const updatedata= async (s)=>{
    const result = await employemodel.updateMany({salary:s},{salary:60000})
    console.log(result)
}
*/

const deletedata= async(id)=>{
    try {
        //single data delete
      //  const result = await employemodel.findOneAndDelete(id) //find by id and delete
    //  const result= await employemodel.deleteOne({_id:id})
   // const result= await employemodel.deleteOne({name:'Anisur Islam'})
   //multiple data delete
   const result = await employemodel.deleteMany({name:'Yunus Islam'}) 
        console.log(result)
        
    } catch (error) {
        console.log(error)
    }
   
}

export {deletedata}
//export {updatedata}
//export {readdata}
// export default employemodel 
//export default employdata




